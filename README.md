# 💊 MediStock AI

### AI-Assisted Medicine Demand Forecasting, Stock-Out Risk Detection & Replenishment Planning

MediStock AI is a high-performance clinical healthcare inventory management web application built with React, TypeScript, Vite, and Tailwind CSS. It is redesigned to help healthcare providers monitor pharmaceutical stocks, forecast multi-day demand, identify stock-out risks before they become critical, flag approaching batch expirations, and generate data-driven replenishment plans.
## 🌐 Live Public Production URL

https://ai.studio/apps/08a753d1-9b04-451c-83f5-72be0ec89481

## 🚀 Key Features

### 📊 Command Center
- **Inventory Risk Overview**: Real-time table displaying current stock on hand, 14-day rolling daily consumption, days of stock cover, classified risk levels, and nearest batch expiration dates.
- **Stock Distribution Chart**: Interactive bar chart displaying on-hand inventory units per monitored medication with risk color coding.
- **Real-time Filtering & Sorting**: Filter and sort medications dynamically by name, stock, consumption rate, or risk status.

### 🔮 AI Forecast
- **Autoregressive Demand Forecasting**: Multi-step regression modeling that accounts for day-of-week consumption patterns, 7-day lags, 14-day lags, and rolling averages.
- **Interactive Horizon Slider**: Adjust forecast horizons from 7 to 30 days and observe predicted demand and projected remaining inventory.
- **Visual Demand Trajectory**: High-clarity line chart illustrating historical consumption leading seamlessly into predicted demand trends.
- **Detailed Schedule Breakdown**: Toggleable day-by-day table of future consumption projections.

### 📦 Reorder Planning
- **Lead-Time Aware Procurement**: Integrates supplier lead times (2–21 days) with a 14-day safety buffer.
- **Automated Target Calculation**: Calculates required replenishment:
  $$\text{Demand Window} = \sum \text{Forecast}(\text{Lead Time} + 14\text{ days})$$
  $$\text{Safety Buffer} = \max(10, 0.20 \times \text{Demand Window})$$
  $$\text{Suggested Reorder} = \max(0, \lceil(\text{Demand Window} + \text{Safety Buffer}) - \text{Stock on Hand}\rceil)$$
- **Export to CSV**: Download the generated procurement schedule as `reorder_plan.csv` for immediate purchasing operations.

## 🛠️ Tech Stack

- **Framework**: React 19 (TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Data Visualization**: Recharts & Lucide Icons
- **Data Parsing**: PapaParse

## 🏃 Running the Application

```bash
npm install
npm run dev
```

The application runs on `http://localhost:3000`.

## 📁 Project Structure

```text
├── index.html
├── metadata.json
├── package.json
├── vite.config.ts
├── tsconfig.json
├── data/
│   └── inventory_history.csv
├── public/
│   └── data/
│       └── inventory_history.csv
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── types.ts
    ├── data/
    │   └── rawInventory.ts
    ├── utils/
    │   ├── forecasting.ts
    │   └── inventory.ts
    └── components/
        ├── Sidebar.tsx
        ├── MetricCards.tsx
        ├── CommandCenterTab.tsx
        ├── ForecastTab.tsx
        └── ReorderPlanTab.tsx
```

> **Note:** The included dataset is synthetic and created for demonstration. Forecasts are decision-support estimates, not medical advice.
