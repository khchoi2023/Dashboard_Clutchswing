<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:111827,45:2563EB,100:22C55E&text=Clutch%20Swing%20Dashboard&fontColor=FFFFFF&fontSize=44&fontAlignY=38&desc=Investment%20strategy%20dashboard%20for%20backtesting%2C%20signals%2C%20and%20risk%20insight&descSize=16&descAlignY=58" alt="Clutch Swing Dashboard" />
</p>

<p align="center">
  <a href="https://clutchswing.com/"><img src="https://img.shields.io/badge/Live%20Dashboard-clutchswing.com-22C55E?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Dashboard" /></a>
  <a href="https://github.com/khchoi2023/Dashboard_Clutchswing"><img src="https://img.shields.io/badge/GitHub-Repository-111827?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" /></a>
</p>

## Overview

**Clutch Swing Dashboard** is an investment strategy dashboard that visualizes backtest performance, price movement, trade signals, and risk-related return metrics across multiple assets.

Compare the historical performance of Clutch Swing with buying and holding the same asset through charts, signal views, and period-by-period return summaries.

## Supported Assets

| Category | Assets |
|---|---|
| Stocks | [Apple (AAPL)](https://clutchswing.com/apple/), [NVIDIA (NVDA)](https://clutchswing.com/nvidia/) |
| Commodities | [Gold (GLD)](https://clutchswing.com/gold/) |
| Crypto | [Bitcoin (BTC)](https://clutchswing.com/bitcoin/), [Ethereum (ETH)](https://clutchswing.com/ethereum/), [Ethereum Classic (ETC)](https://clutchswing.com/ethereum-classic/), [XRP](https://clutchswing.com/ripple/), [Dogecoin (DOGE)](https://clutchswing.com/dogecoin/) |

## Key Features

- **Backtest visualization** for comparing strategy return and hold return.
- **Price and volume charts** for reviewing market movement.
- **Latest Signal** and **Latest Signal Date** views for strategy interpretation.
- **MLR and MGR charts** for loss/gain behavior by annual, monthly, and weekly periods.
- **Final return comparison** showing trade return, hold return, and differential return.
- **Multi-period views** including recent 1, 3, 5, 7, and 9 year backtests.
- **Period return tables** showing strategy and buy-and-hold returns, their difference, and the actual analysis dates.
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

## Reading the Charts and Tables

- **Cumulative return charts:** Values show the total gain or loss over the displayed period, not an annualized return. A value of +50% means a 50% gain; -20% means a 20% loss.
- **Logarithmic charts:** The asset index starts at 100. An index of 150 represents a 50% gain, while 80 represents a 20% loss. The logarithmic scale changes how values are spaced, not the underlying returns.
- **Period return tables:** Compare the strategy and buy-and-hold results for the 1, 3, 5, 7, and 9 year views. The actual date range identifies the observations included in each result.
- **Return difference:** Strategy return minus buy-and-hold return, expressed in percentage points (pp). For example, +25% versus +18% gives a difference of +7 pp. Displayed values are rounded independently to two decimal places.
- **Incomplete history:** Unavailable portions of the requested period remain blank in the charts. Use the actual dates in the table to understand how much history is included.

## Interpretation and Limitations

Each period compares results from the same starting asset value. Gold results use GLD price data. The results exclude transaction fees and slippage, and actual investment outcomes may differ. Historical performance does not guarantee future returns.

## Update Policy

The dashboard is based on daily chart data and is designed around a once-per-day update cycle. Users should always check the latest signal date and the price-data date shown above each return table before interpreting the dashboard.

## Links

- Live dashboard: [clutchswing.com](https://clutchswing.com/)
- Chart guide: [Documents](https://clutchswing.com/methodology/)
- Contact and social profiles: [Contact](https://clutchswing.com/about/)
- Repository: [khchoi2023/Dashboard_Clutchswing](https://github.com/khchoi2023/Dashboard_Clutchswing)

## Disclaimer

This project is for research, visualization, and strategy review purposes only. It is not financial advice. Investment decisions and losses are the sole responsibility of the user.
