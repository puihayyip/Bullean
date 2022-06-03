import React, { useContext, useEffect } from "react";
import styles from "./Statistics.module.css";
import { stateContext } from "../../App";
import data from "../../sampleAPIs/CompanyStatistics.json";

function Statistics() {
  const [state, setState] = useContext(stateContext);
  const ticker = state.selectedTicker;
  const APIKEY = process.env.REACT_APP_RAPIDAPIKEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
      "X-RapidAPI-Key": `${APIKEY}`,
    },
  };

  async function fetchData() {
    const res = await fetch(
      `https://yh-finance.p.rapidapi.com/stock/v2/get-statistics?symbol=${ticker}&region=US`,
      options
    );
    const data = await res.json();
    setState({ ...state, companySummary: data });
  }

  useEffect(() => {
    setState({ ...state, companySummary: data });
    // fetchData();
  }, []);

  return (
    <>
      <h1>Statistics</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "60px",
        }}
      >
        <div className={styles.LeftSide}>
          <h2>Valuation measures</h2>
          <div>
            <p>Markey cap (intra-day)</p>
            <p>
              {
                state.companySummary?.timeSeries?.trailingMarketCap[0]
                  .reportedValue.fmt
              }
            </p>
          </div>
          <div>
            <p>Enterprise value</p>
            <p>
              {
                state.companySummary?.timeSeries?.trailingEnterpriseValue[0]
                  .reportedValue.fmt
              }
            </p>
          </div>
          <div>
            <p>Trailing P/E</p>
            <p>
              {
                state.companySummary?.timeSeries?.trailingPeRatio[0]
                  .reportedValue.fmt
              }
            </p>
          </div>
          <div>
            <p>Forward P/E</p>
            <p>
              {
                state.companySummary?.timeSeries?.trailingForwardPeRatio[0]
                  .reportedValue.fmt
              }
            </p>
          </div>
          <div>
            <p>PEG Ratio (5 yr expected) </p>
            <p>
              {
                state.companySummary?.timeSeries?.trailingPegRatio[0]
                  .reportedValue.fmt
              }
            </p>
          </div>
          <div>
            <p>Price/sales (ttm) </p>
            <p>
              {
                state.companySummary?.timeSeries?.trailingPsRatio[0]
                  .reportedValue.fmt
              }
            </p>
          </div>
          <div>
            <p>Price/book (mrq) </p>
            <p>
              {
                state.companySummary?.timeSeries?.trailingPbRatio[0]
                  .reportedValue.fmt
              }
            </p>
          </div>
          <div>
            <p>Enterprise value/revenue </p>
            <p>
              {
                state.companySummary?.timeSeries
                  ?.trailingEnterprisesValueRevenueRatio[0]?.reportedValue.fmt
              }
            </p>
          </div>
          <div>
            <p>Enterprise value/EBITDA </p>
            <p>
              {
                state.companySummary?.timeSeries
                  ?.trailingEnterprisesValueEBITDARatio[0]?.reportedValue.fmt
              }
            </p>
          </div>
          <br />
          <h2>Financial highlights</h2>
          <h3>Fiscal year</h3>
          <div>
            <p>Fiscal year ends </p>
            <p>
              {
                state.companySummary?.defaultKeyStatistics?.lastFiscalYearEnd
                  .fmt
              }
            </p>
          </div>
          <div>
            <p>Most-recent quarter (mrq) </p>
            <p>
              {state.companySummary?.timeSeries?.quarterlyPeRatio[0].asOfDate}
            </p>
          </div>
          <h3>Profitability</h3>
          <div>
            <p>Profit margin </p>
            <p>
              {state.companySummary?.defaultKeyStatistics?.profitMargins.fmt}
            </p>
          </div>
          <div>
            <p>Operating margin (ttm) </p>
            <p>{state.companySummary?.financialData?.operatingMargins.fmt}</p>
          </div>
          <h3>Management effectiveness</h3>
          <div>
            <p>Return on assets (ttm) </p>
            <p>{state.companySummary?.financialData?.returnOnAssets.fmt}</p>
          </div>
          <div>
            <p>Return on equity (ttm) </p>
            <p>{state.companySummary?.financialData?.returnOnEquity.fmt}</p>
          </div>
          <h3>Income statement</h3>
          <div>
            <p>Revenue (ttm) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Revenue per share (ttm) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Quarterly revenue growth (yoy) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Gross profit (ttm) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>EBITDA </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Net income avi to common (ttm) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Diluted EPS (ttm) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Quarterly earnings growth (yoy) </p>
            <p>94.05B</p>
          </div>
          <h3>Balance sheet</h3>
          <div>
            <p>Total cash (mrq) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Total cash per share (mrq) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Total debt (mrq) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Total debt/equity (mrq) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Current ratio (mrq) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Book value per share (mrq) </p>
            <p>94.05B</p>
          </div>
          <h3>Cash flow statement</h3>
          <div>
            <p>Operating cash flow</p>
            <p>5.91B</p>
          </div>
          <div>
            <p>Levered free cash flow (ttm) </p>
            <p>94.05B</p>
          </div>
        </div>

        <div className={styles.RightSide}>
          <h2>Trading information</h2>
          <h3>Stock price history</h3>
          <div>
            <p>Beta (5Y monthly) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>52-week change</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>S&P500 52-week change</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>52-week high</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>52-week low</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>50-day moving average</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>200-day moving average</p>
            <p>94.05B</p>
          </div>
          <h3>Share statistics</h3>
          <div>
            <p>Avg vol (3-month)</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Avg vol (10-day)</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Shares outstanding </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Implied shares outstanding</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Float</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>% held by insiders</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>% held by institutions</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Shares short (12 May 2022)</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Short ratio (12 May 2022)</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Short % of float (12 May 2022) </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Short % of shares outstanding (12 May 2022)</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Shares short (prior month 13 Apr 2022)</p>
            <p>94.05B</p>
          </div>
          <h3>Dividends & splits</h3>
          <div>
            <p>Forward annual dividend rate </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Forward annual dividend yield </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Trailing annual dividend rate </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Trailing annual dividend yield</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>5-year average dividend yield</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Payout ratio </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Dividend date </p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Ex-dividend date</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Last split factor</p>
            <p>94.05B</p>
          </div>
          <div>
            <p>Last split date</p>
            <p>94.05B</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
