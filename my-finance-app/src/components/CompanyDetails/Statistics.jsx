import React, { useContext, useEffect, useState } from "react";
import styles from "./Statistics.module.css";
import { stateContext } from "../../App";
import LoadingScreen from "../MainComponents/LoadingScreen";

function Statistics() {
  const [state, setState] = useContext(stateContext);
  const [loading, setLoading] = useState("loading");
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
    const res = await fetch(`https://yh-finance.p.rapidapi.com/stock/v2/get-statistics?symbol=${ticker}&region=US`, options);
    const data = await res.json();
    setState({ ...state, statistics: data });
    setLoading("ran");
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading === "loading") {
    return <LoadingScreen />;
  }

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
            <p>{state.statistics?.timeSeries?.trailingMarketCap.at(-1)?.reportedValue.fmt}</p>
          </div>
          <div>
            <p>Enterprise value</p>
            <p>{state.statistics?.timeSeries?.trailingEnterpriseValue.at(-1)?.reportedValue.fmt}</p>
          </div>
          <div>
            <p>Trailing P/E</p>
            <p>{state.statistics?.timeSeries?.trailingPeRatio.at(-1)?.reportedValue.fmt}</p>
          </div>
          <div>
            <p>Forward P/E</p>
            <p>{state.statistics?.timeSeries?.trailingForwardPeRatio.at(-1)?.reportedValue.fmt}</p>
          </div>
          <div>
            <p>PEG Ratio (5 yr expected) </p>
            <p>{state.statistics?.timeSeries?.trailingPegRatio.at(-1)?.reportedValue.fmt}</p>
          </div>
          <div>
            <p>Price/sales (ttm) </p>
            <p>{state.statistics?.timeSeries?.trailingPsRatio.at(-1)?.reportedValue.fmt}</p>
          </div>
          <div>
            <p>Price/book (mrq) </p>
            <p>{state.statistics?.timeSeries?.trailingPbRatio.at(-1)?.reportedValue.fmt}</p>
          </div>
          <div>
            <p>Enterprise value/revenue </p>
            <p>{state.statistics?.timeSeries?.trailingEnterprisesValueRevenueRatio.at(-1)?.reportedValue.fmt}</p>
          </div>
          <div>
            <p>Enterprise value/EBITDA </p>
            <p>{state.statistics?.timeSeries?.trailingEnterprisesValueEBITDARatio.at(-1)?.reportedValue.fmt}</p>
          </div>
          <br />
          <h2>Financial highlights</h2>
          <h3>Fiscal year</h3>
          <div>
            <p>Fiscal year ends </p>
            <p>{state.statistics?.defaultKeyStatistics?.lastFiscalYearEnd.fmt}</p>
          </div>
          <div>
            <p>Most-recent quarter (mrq) </p>
            <p>{state.statistics?.timeSeries?.quarterlyPeRatio.at(-1)?.asOfDate}</p>
          </div>
          <h3>Profitability</h3>
          <div>
            <p>Profit margin </p>
            <p>{state.statistics?.defaultKeyStatistics?.profitMargins.fmt}</p>
          </div>
          <div>
            <p>Operating margin (ttm) </p>
            <p>{state.statistics?.financialData?.operatingMargins.fmt}</p>
          </div>
          <h3>Management effectiveness</h3>
          <div>
            <p>Return on assets (ttm) </p>
            <p>{state.statistics?.financialData?.returnOnAssets.fmt}</p>
          </div>
          <div>
            <p>Return on equity (ttm) </p>
            <p>{state.statistics?.financialData?.returnOnEquity.fmt}</p>
          </div>
          <h3>Income statement</h3>
          <div>
            <p>Revenue (ttm) </p>
            <p>{state.statistics?.financialData?.totalRevenue.fmt}</p>
          </div>
          <div>
            <p>Revenue per share (ttm) </p>
            <p>{state.statistics?.financialData?.revenuePerShare.fmt}</p>
          </div>
          <div>
            <p>Quarterly revenue growth (yoy) </p>
            <p>{state.statistics?.financialData?.revenueGrowth.fmt}</p>
          </div>
          <div>
            <p>Gross profit (ttm) </p>
            <p>{state.statistics?.financialData?.grossProfits.fmt}</p>
          </div>
          <div>
            <p>EBITDA </p>
            <p>{state.statistics?.financialData?.ebitda.fmt}</p>
          </div>
          <div>
            <p>Net income avi to common (ttm) </p>
            <p>{state.statistics?.defaultKeyStatistics?.netIncomeToCommon?.fmt}</p>
          </div>
          <div>
            <p>Diluted EPS (ttm) </p>
            <p>{state.statistics?.defaultKeyStatistics?.trailingEps.fmt}</p>
          </div>
          <div>
            <p>Quarterly earnings growth (yoy) </p>
            <p>
              {state.statistics?.defaultKeyStatistics?.earningsQuarterlyGrowth.fmt
                ? state.statistics?.defaultKeyStatistics?.earningsQuarterlyGrowth.fmt
                : "N/A"}
            </p>
          </div>
          <h3>Balance sheet</h3>
          <div>
            <p>Total cash (mrq) </p>
            <p>{state.statistics?.financialData?.totalCash.fmt}</p>
          </div>
          <div>
            <p>Total cash per share (mrq) </p>
            <p>{state.statistics?.financialData?.totalCashPerShare.fmt}</p>
          </div>
          <div>
            <p>Total debt (mrq) </p>
            <p>{state.statistics?.financialData?.totalDebt.fmt}</p>
          </div>
          <div>
            <p>Total debt/equity (mrq) </p>
            <p>{state.statistics?.financialData?.debtToEquity.fmt}</p>
          </div>
          <div>
            <p>Current ratio (mrq) </p>
            <p>{state.statistics?.financialData?.currentRatio.fmt}</p>
          </div>
          <div>
            <p>Book value per share (mrq) </p>
            <p>{state.statistics?.defaultKeyStatistics?.bookValue.fmt}</p>
          </div>
          <h3>Cash flow statement</h3>
          <div>
            <p>Operating cash flow</p>
            <p>{state.statistics?.financialData?.operatingCashflow.fmt}</p>
          </div>
          <div>
            <p>Levered free cash flow (ttm) </p>
            <p>{state.statistics?.financialData?.freeCashflow.fmt}</p>
          </div>
        </div>

        <div className={styles.RightSide}>
          <h2>Trading information</h2>
          <h3>Stock price history</h3>
          <div>
            <p>Beta (5Y monthly) </p>
            <p>{state.statistics?.summaryDetail?.beta.fmt}</p>
          </div>
          <div>
            <p>52-week change</p>
            <p>{state.statistics?.defaultKeyStatistics?.["52WeekChange"].fmt}</p>
          </div>
          <div>
            <p>S&P500 52-week change</p>
            <p>{state.statistics?.defaultKeyStatistics?.SandP52WeekChange.fmt}</p>
          </div>
          <div>
            <p>52-week high</p>
            <p>{state.statistics?.summaryDetail?.fiftyTwoWeekHigh.fmt}</p>
          </div>
          <div>
            <p>52-week low</p>
            <p>{state.statistics?.summaryDetail?.fiftyTwoWeekLow.fmt}</p>
          </div>
          <div>
            <p>50-day moving average</p>
            <p>{state.statistics?.summaryDetail?.fiftyDayAverage.fmt}</p>
          </div>
          <div>
            <p>200-day moving average</p>
            <p>{state.statistics?.summaryDetail?.twoHundredDayAverage.fmt}</p>
          </div>
          <h3>Share statistics</h3>
          <div>
            <p>Avg vol (3-month)</p>
            <p>{state.statistics?.summaryDetail?.averageVolume.fmt}</p>
          </div>
          <div>
            <p>Avg vol (10-day)</p>
            <p>{state.statistics?.price?.averageDailyVolume10Day.fmt}</p>
          </div>
          <div>
            <p>Shares outstanding </p>
            <p>{state.statistics?.defaultKeyStatistics?.sharesOutstanding.fmt}</p>
          </div>
          <div>
            <p>Implied shares outstanding</p>
            <p>
              {state.statistics?.defaultKeyStatistics?.impliedSharesOutstanding.fmt
                ? state.statistics?.defaultKeyStatistics?.impliedSharesOutstanding.fmt
                : "N/A"}
            </p>
          </div>
          <div>
            <p>Float</p>
            <p>{state.statistics?.defaultKeyStatistics?.floatShares.fmt}</p>
          </div>
          <div>
            <p>% held by insiders</p>
            <p>{state.statistics?.defaultKeyStatistics?.heldPercentInsiders.fmt}</p>
          </div>
          <div>
            <p>% held by institutions</p>
            <p>{state.statistics?.defaultKeyStatistics?.heldPercentInstitutions.fmt}</p>
          </div>
          <div>
            <p>Shares short (12 May 2022)</p>
            <p>{state.statistics?.defaultKeyStatistics?.sharesShort.fmt}</p>
          </div>
          <div>
            <p>Short ratio (12 May 2022)</p>
            <p>{state.statistics?.defaultKeyStatistics?.shortRatio.fmt}</p>
          </div>
          <div>
            <p>Short % of float (12 May 2022) </p>
            <p>{state.statistics?.defaultKeyStatistics?.shortPercentOfFloat.fmt ? state.statistics?.defaultKeyStatistics?.shortPercentOfFloat.fmt : "N/A"}</p>
          </div>
          <div>
            <p>Short % of shares outstanding (12 May 2022)</p>
            <p>{state.statistics?.defaultKeyStatistics?.sharesPercentSharesOut.fmt}</p>
          </div>
          <div>
            <p>Shares short (prior month 13 Apr 2022)</p>
            <p>{state.statistics?.defaultKeyStatistics?.sharesShortPriorMonth.fmt}</p>
          </div>
          <h3>Dividends & splits</h3>
          <div>
            <p>Forward annual dividend rate </p>
            <p>{state.statistics?.summaryDetail?.dividendRate.fmt ? state.statistics?.summaryDetail?.dividendRate.fmt : "N/A"}</p>
          </div>
          <div>
            <p>Forward annual dividend yield </p>
            <p>{state.statistics?.summaryDetail?.dividendYield.fmt ? state.statistics?.summaryDetail?.dividendYield.fmt : "N/A"}</p>
          </div>
          <div>
            <p>Trailing annual dividend rate </p>
            <p>{state.statistics?.summaryDetail?.trailingAnnualDividendRate.fmt}</p>
          </div>
          <div>
            <p>Trailing annual dividend yield</p>
            <p>{state.statistics?.summaryDetail?.trailingAnnualDividendYield.fmt}</p>
          </div>
          <div>
            <p>5-year average dividend yield</p>
            <p>{state.statistics?.summaryDetail?.fiveYearAvgDividendYield.fmt ? state.statistics?.summaryDetail?.fiveYearAvgDividendYield.fmt : "N/A"}</p>
          </div>
          <div>
            <p>Payout ratio </p>
            <p>{state.statistics?.summaryDetail?.payoutRatio.fmt}</p>
          </div>
          <div>
            <p>Dividend date </p>
            <p>{state.statistics?.calendarEvents?.dividendDate.fmt ? state.statistics?.calendarEvents?.dividendDate.fmt : "N/A"}</p>
          </div>
          <div>
            <p>Ex-dividend date</p>
            <p>{state.statistics?.calendarEvents?.exDividendDate.fmt ? state.statistics?.calendarEvents?.exDividendDate.fmt : "N/A"}</p>
          </div>
          <div>
            <p>Last split factor</p>
            <p>{state.statistics?.defaultKeyStatistics?.lastSplitFactor ? state.statistics?.defaultKeyStatistics?.lastSplitFactor : "N/A"}</p>
          </div>
          <div>
            <p>Last split date</p>
            <p>{state.statistics?.defaultKeyStatistics?.lastSplitDate.fmt ? state.statistics?.defaultKeyStatistics?.lastSplitDate.fmt : "N/A"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
