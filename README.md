<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:111827,45:2563EB,100:22C55E&text=Clutch%20Swing%20Dashboard&fontColor=FFFFFF&fontSize=44&fontAlignY=38&desc=Investment%20strategy%20dashboard%20for%20backtesting%2C%20signals%2C%20and%20risk%20insight&descSize=16&descAlignY=58" alt="Clutch Swing Dashboard" />
</p>

<p align="center">
  <a href="https://clutchswing.com/"><img src="https://img.shields.io/badge/Live%20Dashboard-clutchswing.com-22C55E?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Dashboard" /></a>
  <a href="https://github.com/khchoi2023/Dashboard_Clutchswing"><img src="https://img.shields.io/badge/GitHub-Repository-111827?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" /></a>
</p>

## Overview

**Clutch Swing Dashboard** is an investment strategy dashboard that visualizes backtest performance, price movement, trade signals, and risk-related return metrics across multiple assets.

The dashboard is built around the idea of reducing exposure when an asset's return trend starts to weaken. It helps users compare a Clutch Swing strategy against simple holding behavior through charts, signal views, and historical performance summaries.

## Supported Assets

| Category | Assets |
|---|---|
| Stocks | Apple, NVIDIA |
| Commodities | Gold |
| Crypto | Bitcoin, Ethereum, Ethereum Classic, Ripple, Dogecoin |

## Key Features

- **Backtest visualization** for comparing strategy return and hold return.
- **Price and volume charts** for reviewing market movement.
- **Latest Signal** and **Latest Signal Date** views for strategy interpretation.
- **MLR and MGR charts** for loss/gain behavior by annual, monthly, and weekly periods.
- **Final return comparison** showing trade return, hold return, and differential return.
- **Multi-period views** including recent 1, 3, 5, 7, and 9 year backtests.
- **Documentation page** explaining chart concepts and dashboard usage.

## Dashboard Flow

```text
select asset
    |
    v
review price / volume
    |
    v
check backtest performance
    |
    v
compare risk and return metrics
    |
    v
read latest strategy signal
```

## Metrics Explained

| Metric | Meaning |
|---|---|
| Backtest | Historical simulation of the Clutch Swing strategy using daily chart data. |
| MLR | Maximum Loss Return, used to compare downside behavior between holding and the strategy. |
| MGR | Maximum Gain Return, used to compare upside behavior between holding and the strategy. |
| Final Return | Total return over the full selected period. |
| Differential Return | Difference between strategy return and hold return. |

## Update Policy

The dashboard is based on daily chart data and is designed around a once-per-day update cycle. Users should always check the latest signal date before interpreting the dashboard.

## Tech Focus

<p>
  <img src="https://img.shields.io/badge/Dashboard-111827?style=for-the-badge&logo=plotly&logoColor=22C55E" alt="Dashboard" />
  <img src="https://img.shields.io/badge/Data%20Visualization-111827?style=for-the-badge&logo=chartdotjs&logoColor=22C55E" alt="Data Visualization" />
  <img src="https://img.shields.io/badge/Backtesting-111827?style=for-the-badge&logo=python&logoColor=22C55E" alt="Backtesting" />
  <img src="https://img.shields.io/badge/Investment%20Signals-111827?style=for-the-badge&logo=tradingview&logoColor=22C55E" alt="Investment Signals" />
</p>

## Links

- Live dashboard: [clutchswing.com](https://clutchswing.com/)
- Repository: [khchoi2023/Dashboard_Clutchswing](https://github.com/khchoi2023/Dashboard_Clutchswing)

## Disclaimer

This project is for research, visualization, and strategy review purposes only. It is not financial advice. Investment decisions and losses are the sole responsibility of the user.
