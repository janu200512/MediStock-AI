# 💊 MediStock AI

AI-assisted healthcare inventory and supply-chain resilience dashboard.

## Problem
Healthcare providers can face medicine stock-outs, emergency shortages, and wastage from overstocking/expiry. MediStock AI provides an early-warning layer for inventory planning.

## Solution
The prototype:
- monitors medicine inventory
- forecasts short-term demand using a Random Forest model
- estimates days of stock cover
- classifies stock-out risk
- suggests replenishment quantities
- provides a downloadable reorder plan

> **Demo note:** The included dataset is synthetic and created only for the hackathon prototype. It is not real hospital/patient data.

## Tech stack
- Python
- Streamlit
- Pandas / NumPy
- Scikit-learn
- Random Forest Regression

## Project structure
```text
MediStock-AI/
├── app.py
├── requirements.txt
├── README.md
├── data/
│   └── inventory_history.csv
└── .streamlit/
    └── config.toml
```

## Run locally
```bash
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

pip install -r requirements.txt
streamlit run app.py
```

## How it works
1. Historical daily consumption is loaded.
2. Lagged consumption and rolling-average features are created.
3. A Random Forest model predicts future daily demand.
4. Current inventory is compared with expected demand and supplier lead time.
5. The dashboard flags risk and generates a suggested reorder quantity.

## Deployment
The app can be deployed from a public GitHub repository using Streamlit Community Cloud. Add the repository, select `app.py` as the entry point, and use the included `requirements.txt`.

## Hackathon track
**Track 3 — Smart Health & Supply Chain Resilience**

## Future scope
- real hospital/pharmacy ERP integration
- supplier reliability scoring
- multi-location inventory balancing
- cold-chain monitoring with IoT
- medicine expiry optimization
- Gemini/LLM-generated explanations and procurement summaries
- role-based access and audit logs

## Disclaimer
This is a hackathon prototype for supply-chain decision support. It does not provide diagnosis, treatment, or clinical recommendations.
