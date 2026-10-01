# 💊 MediStock-AI

### AI-Assisted Medicine Inventory & Supply-Chain Resilience Dashboard

MediStock-AI is an AI-assisted healthcare inventory management application designed to help monitor medicine stock, forecast demand, identify stock-out risks, detect potential expiry issues, and support data-driven replenishment planning.

## 🚀 Live Demo

https://medistock-ai-dsqkpc4rxqfg8ysruy7lgm.streamlit.app/

## 🎯 Problem

Healthcare providers need to maintain sufficient medicine inventory while avoiding:

- Medicine stock-outs
- Emergency shortages
- Overstocking
- Medicine expiry and wastage
- Difficulties in demand planning

Manual inventory monitoring can make it difficult to identify these risks early.

## 💡 Solution

MediStock-AI provides an early-warning and decision-support layer for healthcare inventory planning.

The application:

- 📊 Monitors medicine inventory
- 🔮 Forecasts short-term demand using a Random Forest model
- 📦 Estimates days of stock cover
- ⚠️ Classifies stock-out risk
- ⏳ Identifies potential expiry batches
- 🔄 Suggests replenishment quantities
- 📥 Provides a downloadable reorder plan

> **Demo note:** The included dataset is synthetic and created only for the hackathon prototype. It does not contain real hospital or patient data.

## 🖥️ Key Features

### 📊 Command Center
Provides a centralized overview of medicine inventory, stock levels, risk indicators, and potential expiry batches.

### 🔮 AI Forecast
Uses historical consumption data and a Random Forest Regression model to estimate future daily medicine demand.

### ⚠️ Inventory Risk Analysis
Evaluates inventory conditions using expected demand, available stock, and supplier lead time to identify potential stock-out risks.

### 📦 Reorder Planning
Generates suggested replenishment quantities based on inventory conditions and expected demand.

### ⏳ Expiry Monitoring
Highlights medicine batches that may require attention because of approaching expiry.

## 🛠️ Tech Stack

- Python
- Streamlit
- Pandas
- NumPy
- Scikit-learn
- Random Forest Regression

## ⚙️ How It Works

1. Historical daily medicine consumption is loaded.
2. Lagged consumption and rolling-average features are created.
3. A Random Forest Regression model forecasts future daily demand.
4. Current inventory is compared with expected demand and supplier lead time.
5. The system evaluates stock-out risk and inventory conditions.
6. Suggested reorder quantities are generated.
7. Results are presented through an interactive dashboard.

## 📁 Project Structure

```text
MediStock-AI/
├── app.py
├── requirements.txt
├── README.md
├── data/
│   └── inventory_history.csv
└── .streamlit/
    └── config.toml
