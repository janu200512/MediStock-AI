import streamlit as st
import pandas as pd
import numpy as np
from pathlib import Path
from sklearn.ensemble import RandomForestRegressor
from datetime import timedelta

st.set_page_config(page_title="MediStock AI", page_icon="💊", layout="wide")

DATA_PATH = Path(__file__).parent / "data" / "inventory_history.csv"

@st.cache_data
def load_data():
    df = pd.read_csv(DATA_PATH, parse_dates=["date", "nearest_expiry"])
    return df.sort_values(["medicine", "date"])

def forecast_medicine(hist, horizon=14):
    x = hist[["date","daily_consumption"]].copy().sort_values("date")
    if len(x) < 30:
        return np.repeat(x["daily_consumption"].tail(7).mean(), horizon)
    x["t"] = np.arange(len(x))
    x["dow"] = x["date"].dt.dayofweek
    x["lag7"] = x["daily_consumption"].shift(7)
    x["lag14"] = x["daily_consumption"].shift(14)
    x["roll7"] = x["daily_consumption"].shift(1).rolling(7).mean()
    train=x.dropna()
    model=RandomForestRegressor(n_estimators=250, random_state=42, min_samples_leaf=2)
    model.fit(train[["t","dow","lag7","lag14","roll7"]], train["daily_consumption"])
    history=list(x["daily_consumption"].astype(float))
    preds=[]
    for i in range(horizon):
        t=len(x)+i
        future_date=x["date"].max()+pd.Timedelta(days=i+1)
        lag7=history[-7] if len(history)>=7 else np.mean(history)
        lag14=history[-14] if len(history)>=14 else np.mean(history)
        roll7=np.mean(history[-7:])
        p=model.predict(pd.DataFrame([{"t":t,"dow":future_date.dayofweek,
                                       "lag7":lag7,"lag14":lag14,"roll7":roll7}]))[0]
        p=max(0,float(p))
        preds.append(p); history.append(p)
    return np.array(preds)

def risk_label(stock, avg_daily, lead_days=7):
    days_cover = stock/max(avg_daily,0.1)
    if days_cover < lead_days: return "CRITICAL"
    if days_cover < lead_days+7: return "HIGH"
    if days_cover < lead_days+14: return "MEDIUM"
    return "LOW"

df=load_data()
today=df["date"].max()
st.title("💊 MediStock AI")
st.caption("AI-assisted medicine demand forecasting, stock-out risk detection and reorder planning")

# Sidebar
st.sidebar.header("Controls")
medicine=st.sidebar.selectbox("Select medicine", sorted(df["medicine"].unique()))
horizon=st.sidebar.slider("Forecast horizon (days)", 7, 30, 14)
lead_days=st.sidebar.slider("Supplier lead time (days)", 2, 21, 7)

latest=df.groupby("medicine",as_index=False).tail(1).copy()
latest["avg_daily"]=latest["medicine"].map(
    df.groupby("medicine")["daily_consumption"].rolling(14).mean().groupby(level=0).last()
)
latest["days_cover"]=latest["stock_on_hand"]/latest["avg_daily"].clip(lower=0.1)
latest["risk"]=latest.apply(lambda r:risk_label(r["stock_on_hand"],r["avg_daily"],lead_days),axis=1)

c1,c2,c3,c4=st.columns(4)
c1.metric("Medicines monitored",len(latest))
c2.metric("Critical / High risk",int(latest["risk"].isin(["CRITICAL","HIGH"]).sum()))
c3.metric("Units in stock",f'{int(latest["stock_on_hand"].sum()):,}')
c4.metric("Potential expiry batches",int((latest["nearest_expiry"] <= today+pd.Timedelta(days=30)).sum()))

tab1,tab2,tab3=st.tabs(["📊 Command Center","🔮 AI Forecast","📦 Reorder Plan"])

with tab1:
    st.subheader("Inventory risk overview")
    display=latest[["medicine","stock_on_hand","avg_daily","days_cover","risk","nearest_expiry"]].copy()
    display.columns=["Medicine","Stock","Avg/day","Days cover","Risk","Nearest expiry"]
    st.dataframe(display, use_container_width=True, hide_index=True)
    st.subheader("Current stock")
    chart=latest.set_index("medicine")["stock_on_hand"]
    st.bar_chart(chart)

with tab2:
    hist=df[df["medicine"]==medicine].copy()
    preds=forecast_medicine(hist,horizon)
    future_dates=pd.date_range(hist["date"].max()+pd.Timedelta(days=1), periods=horizon)
    fc=pd.DataFrame({"date":future_dates,"forecast":preds})
    st.subheader(f"Demand forecast — {medicine}")
    st.line_chart(pd.concat([
        hist[["date","daily_consumption"]].rename(columns={"date":"index","daily_consumption":"value"}).set_index("index"),
        fc.rename(columns={"date":"index","forecast":"value"}).set_index("index")
    ]))
    avg_forecast=float(preds.mean())
    current=int(hist.iloc[-1]["stock_on_hand"])
    projected=max(0, current-preds.sum())
    risk = risk_label(current, avg_forecast, lead_days)
    a,b,c=st.columns(3)
    a.metric("Predicted avg/day",f"{avg_forecast:.1f}")
    b.metric("Current stock",f"{current:,}")
    c.metric("Risk",risk)
    st.info(f"AI estimate: approximately **{preds.sum():,.0f} units** may be consumed over the next {horizon} days.")

with tab3:
    st.subheader("Recommended replenishment")
    plan=[]
    for _,r in latest.iterrows():
        hist=df[df["medicine"]==r["medicine"]]
        p=forecast_medicine(hist,lead_days+14)
        demand_window=p.sum()
        safety=max(10, 0.20*demand_window)
        target=demand_window+safety
        reorder=max(0, int(np.ceil(target-r["stock_on_hand"])))
        plan.append([r["medicine"],int(r["stock_on_hand"]),round(float(r["avg_daily"]),1),
                     int(round(demand_window)),reorder,r["risk"]])
    plan=pd.DataFrame(plan,columns=["Medicine","Current stock","Avg/day","Lead+14d demand","Suggested reorder","Risk"])
    st.dataframe(plan,use_container_width=True,hide_index=True)
    st.download_button("⬇️ Download reorder plan",plan.to_csv(index=False).encode(),"reorder_plan.csv","text/csv")

st.divider()
st.caption("Prototype uses synthetic data for demonstration. Forecasts are decision-support estimates, not medical advice.")
