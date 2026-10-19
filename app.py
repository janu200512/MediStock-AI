import os
import io
import csv
from pathlib import Path
from datetime import datetime, timedelta
import threading
from flask import Flask, jsonify, request, Response, render_template_string

app = Flask(__name__)

DATA_PATH = Path(__file__).parent / "data" / "inventory_history.csv"

# Lazy-loaded scientific libraries to guarantee instant server socket binding (<0.2s)
pd = None
np = None
RandomForestRegressor = None
_LIBS_LOCK = threading.Lock()
_CACHED_DF = None

def ensure_libs_loaded():
    global pd, np, RandomForestRegressor
    if pd is not None:
        return
    with _LIBS_LOCK:
        if pd is None:
            import numpy as _np
            import pandas as _pd
            from sklearn.ensemble import RandomForestRegressor as _RFR
            np = _np
            pd = _pd
            RandomForestRegressor = _RFR

def load_data():
    global _CACHED_DF
    ensure_libs_loaded()
    if _CACHED_DF is not None:
        return _CACHED_DF
    if not DATA_PATH.exists():
        raise FileNotFoundError(f"Data file not found at {DATA_PATH}")
    df = pd.read_csv(DATA_PATH, parse_dates=["date", "nearest_expiry"])
    df = df.sort_values(["medicine", "date"]).reset_index(drop=True)
    _CACHED_DF = df
    return df

def warm_up_engine():
    try:
        ensure_libs_loaded()
        load_data()
        print("MediStock AI scientific engine pre-warmed successfully.")
    except Exception as e:
        print(f"Pre-warm warning: {e}")

# Start background warm up immediately
threading.Thread(target=warm_up_engine, daemon=True).start()

def forecast_medicine(hist, horizon=14):
    """
    Autoregressive Random Forest forecast for daily medicine demand.
    Uses time trend, day of week, lag 7, lag 14, and 7-day rolling mean.
    """
    ensure_libs_loaded()
    x = hist[["date", "daily_consumption"]].copy().sort_values("date")
    if len(x) < 30:
        val = float(x["daily_consumption"].tail(7).mean())
        return np.repeat(val, horizon)

    x["t"] = np.arange(len(x))
    x["dow"] = x["date"].dt.dayofweek
    x["lag7"] = x["daily_consumption"].shift(7)
    x["lag14"] = x["daily_consumption"].shift(14)
    x["roll7"] = x["daily_consumption"].shift(1).rolling(7).mean()

    train = x.dropna()
    if len(train) < 10:
        val = float(x["daily_consumption"].tail(7).mean())
        return np.repeat(val, horizon)

    model = RandomForestRegressor(n_estimators=150, random_state=42, min_samples_leaf=2, n_jobs=-1)
    model.fit(train[["t", "dow", "lag7", "lag14", "roll7"]], train["daily_consumption"])

    history = list(x["daily_consumption"].astype(float))
    preds = []
    last_date = x["date"].max()

    for i in range(horizon):
        t = len(x) + i
        future_date = last_date + pd.Timedelta(days=i + 1)
        lag7 = history[-7] if len(history) >= 7 else float(np.mean(history))
        lag14 = history[-14] if len(history) >= 14 else float(np.mean(history))
        roll7 = float(np.mean(history[-7:]))

        input_df = pd.DataFrame([{
            "t": t,
            "dow": future_date.dayofweek,
            "lag7": lag7,
            "lag14": lag14,
            "roll7": roll7
        }])
        p = model.predict(input_df)[0]
        p = max(0.0, float(p))
        preds.append(round(p, 2))
        history.append(p)

    return np.array(preds)

def risk_label(stock, avg_daily, lead_days=7):
    days_cover = stock / max(avg_daily, 0.1)
    if days_cover < lead_days:
        return "CRITICAL"
    if days_cover < lead_days + 7:
        return "HIGH"
    if days_cover < lead_days + 14:
        return "MEDIUM"
    return "LOW"

def get_latest_inventory_stats(lead_days=7):
    ensure_libs_loaded()
    df = load_data()
    today = df["date"].max()

    rolling_avg = (
        df.groupby("medicine")["daily_consumption"]
        .rolling(14)
        .mean()
        .groupby(level=0)
        .last()
        .to_dict()
    )

    latest = df.groupby("medicine", as_index=False).tail(1).copy()
    latest["avg_daily"] = latest["medicine"].map(rolling_avg).fillna(1.0)
    latest["days_cover"] = latest["stock_on_hand"] / latest["avg_daily"].clip(lower=0.1)
    latest["risk"] = latest.apply(
        lambda r: risk_label(r["stock_on_hand"], r["avg_daily"], lead_days), axis=1
    )

    expiry_threshold = today + pd.Timedelta(days=30)
    expiring_count = int((latest["nearest_expiry"] <= expiry_threshold).sum())
    critical_or_high = int(latest["risk"].isin(["CRITICAL", "HIGH"]).sum())
    total_units = int(latest["stock_on_hand"].sum())

    inventory_list = []
    for _, row in latest.iterrows():
        inventory_list.append({
            "medicine": str(row["medicine"]),
            "form": str(row.get("form", "MEDICINE")),
            "stock_on_hand": int(row["stock_on_hand"]),
            "avg_daily": round(float(row["avg_daily"]), 1),
            "days_cover": round(float(row["days_cover"]), 1),
            "risk": str(row["risk"]),
            "nearest_expiry": row["nearest_expiry"].strftime("%Y-%m-%d"),
            "expiring_soon": bool(row["nearest_expiry"] <= expiry_threshold)
        })

    return {
        "today": today.strftime("%Y-%m-%d"),
        "total_medicines": len(latest),
        "critical_or_high": critical_or_high,
        "total_units": total_units,
        "expiring_count": expiring_count,
        "inventory": inventory_list
    }

@app.route("/api/overview")
def api_overview():
    try:
        lead_days = int(request.args.get("lead_days", 7))
        stats = get_latest_inventory_stats(lead_days=lead_days)
        return jsonify(stats)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/medicines")
def api_medicines():
    try:
        ensure_libs_loaded()
        df = load_data()
        medicines = sorted(df["medicine"].unique().tolist())
        return jsonify({"medicines": medicines})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/forecast")
def api_forecast():
    try:
        ensure_libs_loaded()
        df = load_data()
        medicine = request.args.get("medicine")
        horizon = int(request.args.get("horizon", 14))
        lead_days = int(request.args.get("lead_days", 7))

        medicines = sorted(df["medicine"].unique().tolist())
        if not medicine or medicine not in medicines:
            medicine = medicines[0]

        hist = df[df["medicine"] == medicine].copy().sort_values("date")
        preds = forecast_medicine(hist, horizon)

        last_date = hist["date"].max()
        future_dates = [
            (last_date + pd.Timedelta(days=i + 1)).strftime("%Y-%m-%d")
            for i in range(horizon)
        ]

        hist_recent = hist.tail(45)
        hist_dates = hist_recent["date"].dt.strftime("%Y-%m-%d").tolist()
        hist_consumption = hist_recent["daily_consumption"].tolist()

        avg_forecast = float(np.mean(preds))
        current_stock = int(hist.iloc[-1]["stock_on_hand"])
        total_predicted_demand = float(np.sum(preds))
        projected_stock = max(0, int(round(current_stock - total_predicted_demand)))
        risk = risk_label(current_stock, avg_forecast, lead_days)
        days_cover = round(current_stock / max(avg_forecast, 0.1), 1)

        return jsonify({
            "medicine": medicine,
            "horizon": horizon,
            "lead_days": lead_days,
            "history": {
                "dates": hist_dates,
                "values": hist_consumption
            },
            "forecast": {
                "dates": future_dates,
                "values": [round(float(p), 1) for p in preds]
            },
            "metrics": {
                "predicted_avg_daily": round(avg_forecast, 1),
                "current_stock": current_stock,
                "projected_stock": projected_stock,
                "total_demand": int(round(total_predicted_demand)),
                "risk": risk,
                "days_cover": days_cover
            }
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/reorder-plan")
def api_reorder_plan():
    try:
        ensure_libs_loaded()
        df = load_data()
        lead_days = int(request.args.get("lead_days", 7))
        stats = get_latest_inventory_stats(lead_days=lead_days)
        latest_inv = stats["inventory"]

        plan = []
        for item in latest_inv:
            med_name = item["medicine"]
            med_hist = df[df["medicine"] == med_name].copy()
            forecast_window = lead_days + 14
            preds = forecast_medicine(med_hist, horizon=forecast_window)
            demand_window = float(np.sum(preds))
            safety = max(10.0, 0.20 * demand_window)
            target = demand_window + safety
            reorder = max(0, int(np.ceil(target - item["stock_on_hand"])))

            plan.append({
                "medicine": med_name,
                "form": item["form"],
                "stock_on_hand": item["stock_on_hand"],
                "avg_daily": item["avg_daily"],
                "forecast_window_days": forecast_window,
                "demand_window": int(round(demand_window)),
                "safety_buffer": int(round(safety)),
                "suggested_reorder": reorder,
                "risk": item["risk"],
                "nearest_expiry": item["nearest_expiry"],
                "urgency": "Urgent" if item["risk"] in ["CRITICAL", "HIGH"] and reorder > 0 else ("Routine" if reorder > 0 else "Adequate")
            })

        return jsonify({"lead_days": lead_days, "plan": plan})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/download-plan.csv")
def download_plan_csv():
    try:
        ensure_libs_loaded()
        df = load_data()
        lead_days = int(request.args.get("lead_days", 7))
        stats = get_latest_inventory_stats(lead_days=lead_days)

        output = io.StringIO()
        writer = csv.writer(output)
        writer.writerow([
            "Medicine",
            "Form",
            "Current Stock",
            "Avg Daily Consumption",
            f"Lead+{14}d Forecast Demand",
            "Safety Buffer (20%)",
            "Suggested Reorder Qty",
            "Stockout Risk",
            "Nearest Expiry Date",
            "Replenishment Urgency"
        ])

        for item in stats["inventory"]:
            med_name = item["medicine"]
            med_hist = df[df["medicine"] == med_name].copy()
            forecast_window = lead_days + 14
            preds = forecast_medicine(med_hist, horizon=forecast_window)
            demand_window = float(np.sum(preds))
            safety = max(10.0, 0.20 * demand_window)
            target = demand_window + safety
            reorder = max(0, int(np.ceil(target - item["stock_on_hand"])))
            urgency = "Urgent" if item["risk"] in ["CRITICAL", "HIGH"] and reorder > 0 else ("Routine" if reorder > 0 else "Adequate")

            writer.writerow([
                med_name,
                item["form"],
                item["stock_on_hand"],
                item["avg_daily"],
                int(round(demand_window)),
                int(round(safety)),
                reorder,
                item["risk"],
                item["nearest_expiry"],
                urgency
            ])

        output.seek(0)
        return Response(
            output.getvalue(),
            mimetype="text/csv",
            headers={"Content-Disposition": f"attachment; filename=medistock_reorder_plan_lead{lead_days}d.csv"}
        )
    except Exception as e:
        return jsonify({"error": str(e)}), 500

HTML_PAGE = """<!DOCTYPE html>
<html lang="en" class="h-full bg-slate-950 text-slate-100">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MediStock AI — Healthcare Inventory & Demand Forecasting</title>
  <meta name="description" content="AI-assisted medicine demand forecasting, stock-out risk detection, and intelligent replenishment planning." />
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#f0fdfa',
              100: '#ccfbf1',
              400: '#2dd4bf',
              500: '#14b8a6',
              600: '#0d9488',
              700: '#0f766e',
              900: '#134e4a',
            }
          }
        }
      }
    }
  </script>
  <style>
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: #0f172a; }
    ::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: #475569; }
    .tab-active {
      border-color: #14b8a6;
      color: #2dd4bf;
      background-color: rgba(20, 184, 166, 0.08);
    }
  </style>
</head>
<body class="min-h-full flex flex-col font-sans antialiased text-slate-200 bg-slate-950">

  <!-- TOP NAVIGATION HEADER -->
  <header class="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-brand-500/20 text-white font-bold text-xl">
          💊
        </div>
        <div>
          <div class="flex items-center space-x-2">
            <h1 class="font-bold text-lg text-white tracking-tight">MediStock AI</h1>
            <span class="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-brand-500/10 text-brand-400 border border-brand-500/30">
              Healthcare AI
            </span>
          </div>
          <p class="text-xs text-slate-400 hidden sm:block">Supply-Chain Resilience & Demand Forecasting System</p>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <div class="hidden md:flex items-center space-x-2 text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Engine: <strong class="text-slate-200">Random Forest Regressor</strong></span>
        </div>
        <div class="text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
          <span>Snapshot: <strong id="snapshot-date" class="text-slate-200">2026-08-28</strong></span>
        </div>
      </div>
    </div>
  </header>

  <!-- MAIN CONTAINER -->
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

    <!-- KPI STATS CARDS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Total Monitored -->
      <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl shadow-sm relative overflow-hidden">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Medicines Monitored</p>
            <h3 id="stat-total-meds" class="text-2xl font-bold text-white mt-1">--</h3>
          </div>
          <span class="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 text-lg">🏥</span>
        </div>
        <p class="text-[11px] text-slate-500 mt-3">Active inventory SKUs tracked</p>
      </div>

      <!-- Critical / High Risk -->
      <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl shadow-sm relative overflow-hidden">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Stockout Risk Alerts</p>
            <h3 id="stat-risk-count" class="text-2xl font-bold text-amber-400 mt-1">--</h3>
          </div>
          <span class="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 text-lg">⚠️</span>
        </div>
        <p id="stat-risk-sub" class="text-[11px] text-amber-400/80 mt-3">Critical & High stockout exposure</p>
      </div>

      <!-- Units in Stock -->
      <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl shadow-sm relative overflow-hidden">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Units in Stock</p>
            <h3 id="stat-total-stock" class="text-2xl font-bold text-emerald-400 mt-1">--</h3>
          </div>
          <span class="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-lg">📦</span>
        </div>
        <p class="text-[11px] text-slate-500 mt-3">Aggregated on-hand inventory</p>
      </div>

      <!-- Expiry Batches -->
      <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl shadow-sm relative overflow-hidden">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Expiry Watch (30d)</p>
            <h3 id="stat-expiry-count" class="text-2xl font-bold text-rose-400 mt-1">--</h3>
          </div>
          <span class="p-2 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 text-lg">⏳</span>
        </div>
        <p class="text-[11px] text-rose-400/80 mt-3">Batches nearing expiration threshold</p>
      </div>
    </div>

    <!-- NAVIGATION TABS -->
    <div class="border-b border-slate-800 flex space-x-2 overflow-x-auto">
      <button onclick="switchTab('tab-command')" id="btn-tab-command" class="tab-btn px-4 py-3 text-sm font-medium border-b-2 border-transparent transition-all flex items-center space-x-2 tab-active">
        <span>📊</span>
        <span>Command Center</span>
      </button>
      <button onclick="switchTab('tab-forecast')" id="btn-tab-forecast" class="tab-btn px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all flex items-center space-x-2">
        <span>🔮</span>
        <span>AI Demand Forecast</span>
      </button>
      <button onclick="switchTab('tab-reorder')" id="btn-tab-reorder" class="tab-btn px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all flex items-center space-x-2">
        <span>📦</span>
        <span>Reorder Plan</span>
      </button>
      <button onclick="switchTab('tab-methodology')" id="btn-tab-methodology" class="tab-btn px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition-all flex items-center space-x-2">
        <span>🧠</span>
        <span>AI Methodology</span>
      </button>
    </div>

    <!-- TAB 1: COMMAND CENTER -->
    <section id="tab-command" class="tab-content space-y-6">
      <!-- Visual Stock Breakdown Chart -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <div>
            <h3 class="font-bold text-white text-base">Current Stock by Medicine</h3>
            <p class="text-xs text-slate-400">Total physical on-hand inventory units per monitored drug</p>
          </div>
          <div class="flex items-center space-x-2 text-xs">
            <span class="inline-block w-3 h-3 rounded-sm bg-teal-500"></span>
            <span class="text-slate-300">Units on Hand</span>
          </div>
        </div>
        <div class="h-64 w-full">
          <canvas id="stockBarChart"></canvas>
        </div>
      </div>

      <!-- Inventory Risk Table with Filters -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h3 class="font-bold text-white text-base">Inventory Risk & Coverage Overview</h3>
            <p class="text-xs text-slate-400">Real-time status based on supplier lead times and consumption velocity</p>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <input type="text" id="inventory-search" oninput="filterInventoryTable()" placeholder="Search medicine..." class="bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500 w-44" />
            <div class="flex items-center space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
              <button onclick="setRiskFilter('ALL')" id="filter-risk-ALL" class="px-2 py-1 rounded bg-slate-800 text-white font-medium">All</button>
              <button onclick="setRiskFilter('CRITICAL')" id="filter-risk-CRITICAL" class="px-2 py-1 rounded text-slate-400 hover:text-white">Critical</button>
              <button onclick="setRiskFilter('HIGH')" id="filter-risk-HIGH" class="px-2 py-1 rounded text-slate-400 hover:text-white">High</button>
              <button onclick="setRiskFilter('MEDIUM')" id="filter-risk-MEDIUM" class="px-2 py-1 rounded text-slate-400 hover:text-white">Medium</button>
              <button onclick="setRiskFilter('LOW')" id="filter-risk-LOW" class="px-2 py-1 rounded text-slate-400 hover:text-white">Low</button>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-800">
          <table class="w-full text-left text-xs border-collapse">
            <thead class="bg-slate-950/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
              <tr>
                <th class="py-3 px-4">Medicine</th>
                <th class="py-3 px-4">Form</th>
                <th class="py-3 px-4 text-right">Stock on Hand</th>
                <th class="py-3 px-4 text-right">Avg Daily</th>
                <th class="py-3 px-4 text-right">Days Cover</th>
                <th class="py-3 px-4 text-center">Risk Level</th>
                <th class="py-3 px-4">Nearest Expiry</th>
                <th class="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody id="inventory-table-body" class="divide-y divide-slate-800/60 text-slate-300">
              <tr><td colspan="8" class="text-center py-8 text-slate-500">Loading inventory data...</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- TAB 2: AI DEMAND FORECAST -->
    <section id="tab-forecast" class="tab-content hidden space-y-6">
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Medicine Selector -->
          <div>
            <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Select Medicine</label>
            <select id="forecast-med-select" onchange="runForecast()" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-500">
            </select>
          </div>

          <!-- Forecast Horizon Slider -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="text-xs font-semibold uppercase tracking-wider text-slate-400">Forecast Horizon</label>
              <span id="label-horizon" class="text-xs font-bold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">14 days</span>
            </div>
            <input type="range" id="slider-horizon" min="7" max="30" value="14" oninput="updateHorizonLabel(this.value)" onchange="runForecast()" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500" />
            <div class="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>7 days</span>
              <span>14 days</span>
              <span>21 days</span>
              <span>30 days</span>
            </div>
          </div>

          <!-- Supplier Lead Time Slider -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="text-xs font-semibold uppercase tracking-wider text-slate-400">Supplier Lead Time</label>
              <span id="label-lead" class="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">7 days</span>
            </div>
            <input type="range" id="slider-lead" min="2" max="21" value="7" oninput="updateLeadLabel(this.value)" onchange="handleLeadTimeChange()" class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
            <div class="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>2 days</span>
              <span>7 days (std)</span>
              <span>14 days</span>
              <span>21 days</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Forecast Outcome Metric Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Predicted Avg/Day</p>
          <h4 id="fc-metric-avg" class="text-2xl font-bold text-brand-400 mt-1">--</h4>
          <p class="text-[11px] text-slate-500 mt-1">Expected daily burn</p>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Current Stock</p>
          <h4 id="fc-metric-current" class="text-2xl font-bold text-white mt-1">--</h4>
          <p class="text-[11px] text-slate-500 mt-1">On-hand at start</p>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Projected Ending Stock</p>
          <h4 id="fc-metric-projected" class="text-2xl font-bold text-white mt-1">--</h4>
          <p class="text-[11px] text-slate-500 mt-1">After forecast horizon</p>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
          <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Calculated Risk</p>
          <div id="fc-metric-risk-container" class="mt-1">
            <span id="fc-metric-risk" class="inline-block px-3 py-1 rounded text-sm font-bold bg-slate-800 text-slate-300">--</span>
          </div>
          <p id="fc-metric-cover" class="text-[11px] text-slate-400 mt-1">-- days of cover</p>
        </div>
      </div>

      <!-- Dynamic AI Forecast Chart -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 id="fc-chart-title" class="font-bold text-white text-base">Historical Consumption vs. AI Predicted Demand</h3>
            <p class="text-xs text-slate-400">Historical records (solid blue) compared with autoregressive Random Forest projection (dashed green)</p>
          </div>
          <div class="flex items-center space-x-3 text-xs">
            <div class="flex items-center space-x-1.5">
              <span class="w-3 h-3 rounded-full bg-blue-500"></span>
              <span class="text-slate-300">Historical Daily</span>
            </div>
            <div class="flex items-center space-x-1.5">
              <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span class="text-slate-300">AI Forecast</span>
            </div>
          </div>
        </div>

        <div class="h-80 w-full relative">
          <div id="forecast-spinner" class="absolute inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center rounded-xl hidden z-10">
            <div class="flex items-center space-x-2 text-brand-400 text-sm font-medium">
              <svg class="animate-spin h-5 w-5 text-brand-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <span>Running Random Forest Regressor...</span>
            </div>
          </div>
          <canvas id="forecastLineChart"></canvas>
        </div>

        <!-- AI Summary Banner -->
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 flex items-start space-x-3">
          <span class="text-xl">💡</span>
          <div>
            <h5 class="text-xs font-semibold text-brand-400 uppercase tracking-wider">AI Demand Estimation Analysis</h5>
            <p id="fc-summary-text" class="text-xs text-slate-300 mt-1 leading-relaxed">
              Evaluating demand trajectory...
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: REORDER PLAN -->
    <section id="tab-reorder" class="tab-content hidden space-y-6">
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h3 class="font-bold text-white text-base">Recommended Replenishment Orders</h3>
            <p class="text-xs text-slate-400">Formula-driven replenishment covering supplier lead time + 14-day operational cycle + 20% safety stock</p>
          </div>
          <div class="flex items-center space-x-3">
            <a id="btn-download-csv" href="/api/download-plan.csv?lead_days=7" class="inline-flex items-center space-x-2 bg-brand-600 hover:bg-brand-500 text-white font-medium text-xs px-4 py-2 rounded-xl transition shadow-sm">
              <span>⬇️</span>
              <span>Export Reorder Plan (.CSV)</span>
            </a>
          </div>
        </div>

        <div class="overflow-x-auto rounded-xl border border-slate-800">
          <table class="w-full text-left text-xs border-collapse">
            <thead class="bg-slate-950/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
              <tr>
                <th class="py-3 px-4">Medicine</th>
                <th class="py-3 px-4">Form</th>
                <th class="py-3 px-4 text-right">Current Stock</th>
                <th class="py-3 px-4 text-right">Avg Daily</th>
                <th class="py-3 px-4 text-right">Demand Window</th>
                <th class="py-3 px-4 text-right">Safety Buffer</th>
                <th class="py-3 px-4 text-right font-bold text-brand-400">Suggested Reorder</th>
                <th class="py-3 px-4 text-center">Risk Level</th>
                <th class="py-3 px-4 text-center">Urgency</th>
              </tr>
            </thead>
            <tbody id="reorder-table-body" class="divide-y divide-slate-800/60 text-slate-300">
              <tr><td colspan="9" class="text-center py-8 text-slate-500">Loading replenishment recommendations...</td></tr>
            </tbody>
          </table>
        </div>

        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 flex items-start space-x-3">
          <span class="text-lg">ℹ️</span>
          <div>
            <span class="font-semibold text-slate-200">Reorder Planning Logic:</span>
            <span> Suggested Reorder = max(0, ⌈(Demand Over Lead Time + 14d) + Safety Buffer (20% min 10) - Current Stock⌉). Orders flagged as Urgent require immediate procurement to prevent stockout during supplier lead duration.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 4: METHODOLOGY & MODEL INFO -->
    <section id="tab-methodology" class="tab-content hidden space-y-6">
      <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
        <div>
          <h3 class="font-bold text-white text-lg">MediStock AI Technical Architecture</h3>
          <p class="text-xs text-slate-400 mt-1">Design and algorithm principles powering healthcare demand forecasting</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div class="text-2xl">🌲</div>
            <h4 class="font-semibold text-sm text-white">Random Forest Regressor</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Ensemble of 150 randomized decision trees minimizing mean squared error. Non-parametric formulation naturally captures non-linear shifts, weekday seasonality, and volume spikes.
            </p>
          </div>

          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div class="text-2xl">📈</div>
            <h4 class="font-semibold text-sm text-white">Autoregressive Feature Engineering</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Features include <code class="text-brand-400">t</code> (time trend), <code class="text-brand-400">dow</code> (day of week: 0-6), <code class="text-brand-400">lag7</code> (weekly cycle), <code class="text-brand-400">lag14</code> (fortnightly lag), and <code class="text-brand-400">roll7</code> (7-day rolling baseline).
            </p>
          </div>

          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div class="text-2xl">🛡️</div>
            <h4 class="font-semibold text-sm text-white">Risk & Safety Buffer</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Risk is evaluated against supplier delivery lead times: <br/>
              <span class="text-rose-400 font-semibold">&lt; lead days:</span> Critical <br/>
              <span class="text-amber-400 font-semibold">&lt; lead + 7d:</span> High <br/>
              <span class="text-yellow-400 font-semibold">&lt; lead + 14d:</span> Medium <br/>
              <span class="text-emerald-400 font-semibold">≥ lead + 14d:</span> Low
            </p>
          </div>
        </div>

        <div class="border-t border-slate-800 pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
          <span>Prototype uses synthetic healthcare inventory data for clinical and operational demonstration.</span>
          <span>Forecasts are decision-support estimates, not medical prescriptions.</span>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="border-t border-slate-800/80 bg-slate-950 py-4 mt-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
      <div>MediStock AI &bull; Healthcare Supply-Chain Resilience Platform</div>
      <div class="flex items-center space-x-4">
        <span>RandomForestRegressor (scikit-learn)</span>
        <span>&bull;</span>
        <span>Flask Web Engine</span>
        <span>&bull;</span>
        <span class="text-emerald-400 font-medium">Port 3000 Healthy</span>
      </div>
    </div>
  </footer>

  <script>
    let currentLeadDays = 7;
    let currentHorizon = 14;
    let currentRiskFilter = 'ALL';
    let rawInventoryData = [];
    let stockBarChart = null;
    let forecastLineChart = null;

    function getRiskBadge(risk) {
      if (risk === 'CRITICAL') {
        return `<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40">CRITICAL</span>`;
      } else if (risk === 'HIGH') {
        return `<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40">HIGH</span>`;
      } else if (risk === 'MEDIUM') {
        return `<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/40">MEDIUM</span>`;
      } else {
        return `<span class="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">LOW</span>`;
      }
    }

    function getUrgencyBadge(urgency) {
      if (urgency === 'Urgent') {
        return `<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">Urgent</span>`;
      } else if (urgency === 'Routine') {
        return `<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">Routine</span>`;
      } else {
        return `<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-400 border border-slate-700">Adequate</span>`;
      }
    }

    function switchTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('tab-active');
        btn.classList.add('text-slate-400');
      });

      const selectedTab = document.getElementById(tabId);
      if (selectedTab) selectedTab.classList.remove('hidden');

      const activeBtn = document.getElementById('btn-' + tabId);
      if (activeBtn) {
        activeBtn.classList.add('tab-active');
        activeBtn.classList.remove('text-slate-400');
      }

      if (tabId === 'tab-reorder') {
        fetchReorderPlan();
      }
    }

    function updateHorizonLabel(val) {
      currentHorizon = parseInt(val);
      document.getElementById('label-horizon').textContent = `${val} days`;
    }

    function updateLeadLabel(val) {
      currentLeadDays = parseInt(val);
      document.getElementById('label-lead').textContent = `${val} days`;
      document.getElementById('btn-download-csv').href = `/api/download-plan.csv?lead_days=${currentLeadDays}`;
    }

    function handleLeadTimeChange() {
      fetchOverview();
      runForecast();
      fetchReorderPlan();
    }

    async function fetchOverview() {
      try {
        const res = await fetch(`/api/overview?lead_days=${currentLeadDays}`);
        const data = await res.json();
        if (data.error) return console.error(data.error);

        document.getElementById('snapshot-date').textContent = data.today;
        document.getElementById('stat-total-meds').textContent = data.total_medicines;
        document.getElementById('stat-risk-count').textContent = data.critical_or_high;
        document.getElementById('stat-total-stock').textContent = data.total_units.toLocaleString();
        document.getElementById('stat-expiry-count').textContent = data.expiring_count;

        rawInventoryData = data.inventory;
        renderInventoryTable(rawInventoryData);
        renderStockBarChart(rawInventoryData);
      } catch (err) {
        console.error("Overview fetch error:", err);
      }
    }

    function renderInventoryTable(items) {
      const tbody = document.getElementById('inventory-table-body');
      if (!items || items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="text-center py-6 text-slate-500">No matching medicines found.</td></tr>`;
        return;
      }

      tbody.innerHTML = items.map(item => `
        <tr class="hover:bg-slate-800/40 transition">
          <td class="py-3 px-4 font-semibold text-white">${item.medicine}</td>
          <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-mono">${item.form}</span></td>
          <td class="py-3 px-4 text-right font-medium">${item.stock_on_hand.toLocaleString()}</td>
          <td class="py-3 px-4 text-right">${item.avg_daily}</td>
          <td class="py-3 px-4 text-right font-mono">${item.days_cover}d</td>
          <td class="py-3 px-4 text-center">${getRiskBadge(item.risk)}</td>
          <td class="py-3 px-4">
            <span class="${item.expiring_soon ? 'text-rose-400 font-semibold' : 'text-slate-400'}">
              ${item.nearest_expiry} ${item.expiring_soon ? '⚠️' : ''}
            </span>
          </td>
          <td class="py-3 px-4 text-center">
            <button onclick="inspectMedicine('${item.medicine}')" class="px-2.5 py-1 text-[11px] rounded bg-slate-800 hover:bg-brand-600 text-slate-200 hover:text-white transition">
              Forecast &rarr;
            </button>
          </td>
        </tr>
      `).join('');
    }

    function setRiskFilter(risk) {
      currentRiskFilter = risk;
      ['ALL', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].forEach(r => {
        const btn = document.getElementById(`filter-risk-${r}`);
        if (r === risk) {
          btn.className = 'px-2 py-1 rounded bg-slate-800 text-white font-medium';
        } else {
          btn.className = 'px-2 py-1 rounded text-slate-400 hover:text-white';
        }
      });
      filterInventoryTable();
    }

    function filterInventoryTable() {
      const q = document.getElementById('inventory-search').value.toLowerCase().trim();
      const filtered = rawInventoryData.filter(item => {
        const matchesQuery = !q || item.medicine.toLowerCase().includes(q) || item.form.toLowerCase().includes(q);
        const matchesRisk = (currentRiskFilter === 'ALL') || (item.risk === currentRiskFilter);
        return matchesQuery && matchesRisk;
      });
      renderInventoryTable(filtered);
    }

    function renderStockBarChart(items) {
      const ctx = document.getElementById('stockBarChart').getContext('2d');
      const labels = items.map(i => i.medicine);
      const data = items.map(i => i.stock_on_hand);

      if (stockBarChart) {
        stockBarChart.data.labels = labels;
        stockBarChart.data.datasets[0].data = data;
        stockBarChart.update();
        return;
      }

      stockBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Stock on Hand',
            data: data,
            backgroundColor: 'rgba(20, 184, 166, 0.75)',
            borderColor: '#14b8a6',
            borderWidth: 1.5,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#0f172a',
              titleColor: '#fff',
              bodyColor: '#94a3b8',
              borderColor: '#334155',
              borderWidth: 1,
              padding: 10
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(51, 65, 85, 0.2)' },
              ticks: { color: '#94a3b8', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(51, 65, 85, 0.2)' },
              ticks: { color: '#94a3b8', font: { size: 11 } }
            }
          }
        }
      });
    }

    async function loadMedicineDropdown() {
      try {
        const res = await fetch('/api/medicines');
        const data = await res.json();
        const select = document.getElementById('forecast-med-select');
        select.innerHTML = data.medicines.map(m => `<option value="${m}">${m}</option>`).join('');
      } catch (err) {
        console.error("Error loading medicines:", err);
      }
    }

    function inspectMedicine(med) {
      const select = document.getElementById('forecast-med-select');
      select.value = med;
      switchTab('tab-forecast');
      runForecast();
    }

    async function runForecast() {
      const select = document.getElementById('forecast-med-select');
      const medicine = select.value;
      if (!medicine) return;

      const spinner = document.getElementById('forecast-spinner');
      spinner.classList.remove('hidden');

      try {
        const res = await fetch(`/api/forecast?medicine=${encodeURIComponent(medicine)}&horizon=${currentHorizon}&lead_days=${currentLeadDays}`);
        const data = await res.json();
        spinner.classList.add('hidden');

        if (data.error) {
          console.error('Forecast error: ' + data.error);
          return;
        }

        document.getElementById('fc-metric-avg').textContent = data.metrics.predicted_avg_daily;
        document.getElementById('fc-metric-current').textContent = data.metrics.current_stock.toLocaleString();
        document.getElementById('fc-metric-projected').textContent = data.metrics.projected_stock.toLocaleString();
        document.getElementById('fc-metric-risk-container').innerHTML = getRiskBadge(data.metrics.risk);
        document.getElementById('fc-metric-cover').textContent = `${data.metrics.days_cover} days of stock cover`;

        document.getElementById('fc-chart-title').textContent = `Demand Forecast — ${data.medicine} (${data.horizon}-Day Horizon)`;
        document.getElementById('fc-summary-text').innerHTML = `
          Estimated consumption of <strong>${data.metrics.total_demand.toLocaleString()} units</strong> over the upcoming <strong>${data.horizon} days</strong>.
          At current velocity, stock cover is <strong>${data.metrics.days_cover} days</strong> vs supplier lead time of <strong>${data.lead_days} days</strong>, resulting in a <strong>${data.metrics.risk}</strong> stockout risk classification.
        `;

        renderForecastChart(data);

      } catch (err) {
        spinner.classList.add('hidden');
        console.error("Forecast run error:", err);
      }
    }

    function renderForecastChart(data) {
      const ctx = document.getElementById('forecastLineChart').getContext('2d');
      const histDates = data.history.dates;
      const histValues = data.history.values;
      const fcDates = data.forecast.dates;
      const fcValues = data.forecast.values;

      const allDates = [...histDates, ...fcDates];
      const histSeries = [...histValues, ...new Array(fcDates.length).fill(null)];

      const lastHistVal = histValues[histValues.length - 1];
      const fcSeries = [
        ...new Array(histValues.length - 1).fill(null),
        lastHistVal,
        ...fcValues
      ];

      if (forecastLineChart) {
        forecastLineChart.destroy();
      }

      forecastLineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: allDates,
          datasets: [
            {
              label: 'Historical Daily Consumption',
              data: histSeries,
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.08)',
              borderWidth: 2,
              pointRadius: 2,
              pointHoverRadius: 5,
              tension: 0.15,
              fill: true
            },
            {
              label: 'Random Forest Forecast',
              data: fcSeries,
              borderColor: '#34d399',
              backgroundColor: 'rgba(52, 211, 153, 0.12)',
              borderWidth: 2.5,
              borderDash: [5, 5],
              pointRadius: 3,
              pointHoverRadius: 6,
              tension: 0.2,
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#0f172a',
              titleColor: '#fff',
              bodyColor: '#cbd5e1',
              borderColor: '#334155',
              borderWidth: 1,
              padding: 10
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(51, 65, 85, 0.15)' },
              ticks: {
                color: '#94a3b8',
                maxTicksLimit: 12,
                font: { size: 10 }
              }
            },
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(51, 65, 85, 0.2)' },
              ticks: { color: '#94a3b8', font: { size: 11 } }
            }
          }
        }
      });
    }

    async function fetchReorderPlan() {
      const tbody = document.getElementById('reorder-table-body');
      try {
        const res = await fetch(`/api/reorder-plan?lead_days=${currentLeadDays}`);
        const data = await res.json();
        if (data.error) return console.error(data.error);

        tbody.innerHTML = data.plan.map(item => `
          <tr class="hover:bg-slate-800/40 transition">
            <td class="py-3 px-4 font-semibold text-white">${item.medicine}</td>
            <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-mono">${item.form}</span></td>
            <td class="py-3 px-4 text-right font-medium">${item.stock_on_hand.toLocaleString()}</td>
            <td class="py-3 px-4 text-right">${item.avg_daily}</td>
            <td class="py-3 px-4 text-right font-mono">${item.demand_window.toLocaleString()}</td>
            <td class="py-3 px-4 text-right font-mono text-slate-400">+${item.safety_buffer.toLocaleString()}</td>
            <td class="py-3 px-4 text-right font-bold ${item.suggested_reorder > 0 ? 'text-brand-400 text-sm' : 'text-slate-500'}">
              ${item.suggested_reorder > 0 ? item.suggested_reorder.toLocaleString() + ' units' : 'None needed'}
            </td>
            <td class="py-3 px-4 text-center">${getRiskBadge(item.risk)}</td>
            <td class="py-3 px-4 text-center">${getUrgencyBadge(item.urgency)}</td>
          </tr>
        `).join('');
      } catch (err) {
        console.error("Reorder plan error:", err);
      }
    }

    window.addEventListener('DOMContentLoaded', async () => {
      await loadMedicineDropdown();
      await fetchOverview();
      await runForecast();
    });
  </script>
</body>
</html>
"""

@app.route("/")
def index():
    return render_template_string(HTML_PAGE)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    host = os.environ.get("HOST", "0.0.0.0")
    print(f"Starting MediStock AI Flask Server on {host}:{port}...", flush=True)
    app.run(host=host, port=port, debug=False)
