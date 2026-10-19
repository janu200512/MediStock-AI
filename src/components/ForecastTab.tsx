import React, { useMemo, useState } from 'react';
import { InventoryRecord } from '../types';
import { forecastMedicine } from '../utils/forecasting';
import { getRiskLabel, getRiskBadgeClasses } from '../utils/inventory';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { Sparkles, TrendingUp, Package, ShieldCheck, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface ForecastTabProps {
  medicine: string;
  records: InventoryRecord[];
  horizon: number;
  leadDays: number;
}

export const ForecastTab: React.FC<ForecastTabProps> = ({
  medicine,
  records,
  horizon,
  leadDays,
}) => {
  const [showTable, setShowTable] = useState(false);
  const [historyWindow, setHistoryWindow] = useState<number>(30); // Show last 30 or 60 or all days

  // Filter history for selected medicine
  const medHistory = useMemo(() => {
    return records
      .filter((r) => r.medicine === medicine)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [records, medicine]);

  // Compute forecasts using Random Forest
  const { preds, futureDates, chartData, currentStock, avgForecast, projectedStock, risk } =
    useMemo(() => {
      if (medHistory.length === 0) {
        return {
          preds: [],
          futureDates: [],
          chartData: [],
          currentStock: 0,
          avgForecast: 0,
          projectedStock: 0,
          risk: 'LOW' as const,
        };
      }

      const predictions = forecastMedicine(medHistory, horizon);
      const lastRow = medHistory[medHistory.length - 1];
      const lastDate = new Date(lastRow.date);

      const fDates: { dateStr: string; dow: string; pred: number }[] = [];
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      for (let i = 0; i < horizon; i++) {
        const d = new Date(lastDate);
        d.setDate(lastDate.getDate() + (i + 1));
        const dateStr = d.toISOString().split('T')[0];
        fDates.push({
          dateStr,
          dow: daysOfWeek[d.getDay()],
          pred: Math.round(predictions[i]),
        });
      }

      // Slice historical data for display so chart is readable and clear
      const visibleHistory =
        historyWindow === 0 ? medHistory : medHistory.slice(-historyWindow);

      const data: any[] = [];

      // Historical records
      visibleHistory.forEach((r, idx) => {
        const isLastHist = idx === visibleHistory.length - 1;
        data.push({
          date: r.date,
          displayDate: r.date.slice(5),
          historical: r.dailyConsumption,
          forecast: isLastHist ? r.dailyConsumption : undefined, // Connect the lines
          isForecast: false,
        });
      });

      // Forecast records
      fDates.forEach((f) => {
        data.push({
          date: f.dateStr,
          displayDate: `${f.dateStr.slice(5)} (${f.dow})`,
          historical: undefined,
          forecast: f.pred,
          isForecast: true,
        });
      });

      const current = lastRow.stockOnHand;
      const totalPred = predictions.reduce((sum, v) => sum + v, 0);
      const avg = totalPred / (predictions.length || 1);
      const proj = Math.max(0, current - totalPred);
      const riskLevel = getRiskLabel(current, avg, leadDays);

      return {
        preds: predictions,
        futureDates: fDates,
        chartData: data,
        currentStock: current,
        avgForecast: avg,
        projectedStock: proj,
        risk: riskLevel,
      };
    }, [medHistory, horizon, leadDays, historyWindow]);

  const totalPredictedConsumption = useMemo(() => {
    return Math.round(preds.reduce((acc, v) => acc + v, 0));
  }, [preds]);

  const badge = getRiskBadgeClasses(risk);

  return (
    <div className="space-y-6">
      {/* Tab Header with Controls */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md">
                <Sparkles className="w-4 h-4" />
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Demand forecast — {medicine}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Multi-step autoregressive Random Forest regression modeling day-of-week seasonality, lag-7, lag-14, and rolling averages
            </p>
          </div>

          {/* History window selector */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">History range:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
              <button
                type="button"
                onClick={() => setHistoryWindow(14)}
                className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition ${
                  historyWindow === 14
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                14d
              </button>
              <button
                type="button"
                onClick={() => setHistoryWindow(30)}
                className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition ${
                  historyWindow === 30
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                30d
              </button>
              <button
                type="button"
                onClick={() => setHistoryWindow(60)}
                className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition ${
                  historyWindow === 60
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                60d
              </button>
              <button
                type="button"
                onClick={() => setHistoryWindow(0)}
                className={`px-2.5 py-1 rounded text-xs font-medium cursor-pointer transition ${
                  historyWindow === 0
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All (120d)
              </button>
            </div>
          </div>
        </div>

        {/* 4 Metric Columns matching Streamlit: a,b,c,d=st.columns(4) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 border-b border-slate-100">
          <div className="bg-slate-50/70 p-3.5 rounded-lg border border-slate-200/60">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
              Predicted avg/day
            </span>
            <p className="text-xl font-bold font-mono text-slate-900 mt-1">
              {avgForecast.toFixed(1)}
            </p>
            <span className="text-[11px] text-slate-400">units/day expected</span>
          </div>

          <div className="bg-slate-50/70 p-3.5 rounded-lg border border-slate-200/60">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-blue-500" />
              Current stock
            </span>
            <p className="text-xl font-bold font-mono text-slate-900 mt-1">
              {currentStock.toLocaleString()}
            </p>
            <span className="text-[11px] text-slate-400">units currently in storage</span>
          </div>

          <div className="bg-slate-50/70 p-3.5 rounded-lg border border-slate-200/60">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              Projected stock
            </span>
            <p className={`text-xl font-bold font-mono mt-1 ${
              projectedStock === 0 ? 'text-red-600' : 'text-slate-900'
            }`}>
              {projectedStock.toLocaleString()}
            </p>
            <span className="text-[11px] text-slate-400">after {horizon} days demand</span>
          </div>

          <div className="bg-slate-50/70 p-3.5 rounded-lg border border-slate-200/60 flex flex-col justify-between">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              Risk
            </span>
            <div>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold border ${badge.bg} ${badge.border}`}
              >
                <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
                {risk}
              </span>
            </div>
            <span className="text-[11px] text-slate-400">lead time: {leadDays}d</span>
          </div>
        </div>

        {/* AI Info Callout matching st.info(...) */}
        <div className="mt-4 p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-900 text-sm flex items-start gap-3">
          <div className="p-1 bg-blue-100 rounded text-blue-700 mt-0.5 shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="font-semibold text-blue-950">AI Demand Estimation</p>
            <p className="text-xs text-blue-800 mt-0.5">
              AI estimate: approximately <strong className="font-bold text-blue-950">{totalPredictedConsumption.toLocaleString()} units</strong> may be consumed over the next {horizon} days.
            </p>
          </div>
        </div>

        {/* Main Forecast Line Chart */}
        <div className="mt-6 pt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-700">Daily Demand Consumption &amp; Projected Horizon</span>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-blue-600" />
                <span className="text-slate-600">Historical Consumption</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-indigo-600 border-t border-dashed border-indigo-600" />
                <span className="text-indigo-700 font-semibold">AI Forecast</span>
              </div>
            </div>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 15, right: 20, left: 0, bottom: 25 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis
                  dataKey="displayDate"
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  interval="preserveStartEnd"
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: '#64748b' }}
                  tickLine={false}
                  domain={['dataMin - 10', 'dataMax + 10']}
                />
                <Tooltip
                  formatter={(value: any, name: any) => [
                    `${Math.round(Number(value))} units`,
                    name === 'historical' ? 'Historical Consumption' : 'AI Forecast Demand',
                  ]}
                  labelFormatter={(_label, payload) => {
                    if (payload && payload[0]) {
                      return `Date: ${payload[0].payload.date}`;
                    }
                    return '';
                  }}
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '12px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                />
                <Legend />
                {chartData.find((d) => d.forecast !== undefined) && (
                  <ReferenceLine
                    x={chartData.find((d) => d.forecast !== undefined)?.displayDate}
                    stroke="#6366f1"
                    strokeDasharray="3 3"
                    label={{
                      value: 'Forecast start',
                      position: 'insideTopLeft',
                      fill: '#6366f1',
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  />
                )}
                <Line
                  type="monotone"
                  dataKey="historical"
                  name="Historical Consumption"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={{ r: 2, fill: '#2563eb' }}
                  activeDot={{ r: 5 }}
                  connectNulls={false}
                />
                <Line
                  type="monotone"
                  dataKey="forecast"
                  name="AI Forecast"
                  stroke="#7c3aed"
                  strokeWidth={2.5}
                  strokeDasharray="4 4"
                  dot={{ r: 3, fill: '#7c3aed' }}
                  activeDot={{ r: 6 }}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Toggleable Day-by-Day Forecast Breakdown Table */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setShowTable(!showTable)}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            <span>{showTable ? 'Hide' : 'Show'} day-by-day forecast table</span>
            {showTable ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showTable && (
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-2">Day #</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Day of Week</th>
                    <th className="px-4 py-2 font-mono">Predicted Demand</th>
                    <th className="px-4 py-2">Cumulative Demand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {futureDates.map((item, idx) => {
                    const cumulative = futureDates
                      .slice(0, idx + 1)
                      .reduce((sum, d) => sum + d.pred, 0);
                    return (
                      <tr key={item.dateStr} className="hover:bg-slate-50">
                        <td className="px-4 py-1.5 text-slate-500 font-sans">Day {idx + 1}</td>
                        <td className="px-4 py-1.5 text-slate-800">{item.dateStr}</td>
                        <td className="px-4 py-1.5 text-slate-600 font-sans">{item.dow}</td>
                        <td className="px-4 py-1.5 font-bold text-indigo-700">{item.pred} units</td>
                        <td className="px-4 py-1.5 text-slate-500">{cumulative} units</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
