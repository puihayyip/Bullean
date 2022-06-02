import React, { useEffect, useState, useContext } from "react";
import OneDayChart from "./OneDayChart";
import data from "../../sampleAPIs/CompanyOverview.json";
import { stateContext } from "../../App";

function Summary({ dailyShares, overview }) {
  const numeral = require("numeral");
  const [state, setState] = useContext(stateContext);

  // const overview = data;
  const sharesObj = dailyShares?.["Time Series (Daily)"];

  const ticker = state.selectedTicker;

  const APIKEY = process.env.REACT_APP_LOGOAPIKEY;
  const URL = `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices?token=${APIKEY}`;
  // const URL = `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices?chartInterval=5&token=${APIKEY}`;

  async function fetchData() {
    const res = await fetch(URL);
    const data = await res.json();
    setState({ ...state, intradayData: data });
  }

  useEffect(() => {
    fetchData();
  }, []);
  const intraData = state.intradayData;

  if (sharesObj === null || sharesObj === undefined) {
    return null;
  }

  let exDivDate;
  if (overview.ExDividendDate !== "None") {
    exDivDate = overview.ExDividendDate;
  } else {
    exDivDate = "None";
  }
  return (
    <div className="container">
      <h1>Summary</h1>
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "30px" }}>
          <div>
            <p>Previous Close: </p>
            <p>Open:</p>
            <p>Day's Range:</p>
            <p>52-week Range:</p>
            <p>Volume:</p>
            <p>Market cap</p>
            <p>EPS (TTM)</p>
          </div>
          <div>
            <p>
              {numeral(Object.values(sharesObj)?.[1]?.["4. close"]).format(
                "(0.00)"
              )}
            </p>
            <p>
              {numeral(Object.values(sharesObj)?.[0]?.["1. open"]).format(
                "(0.00)"
              )}
            </p>
            <p>
              {numeral(Object.values(sharesObj)?.[0]?.["3. low"]).format(
                "(0.00)"
              )}{" "}
              -{" "}
              {numeral(Object.values(sharesObj)?.[0]?.["2. high"]).format(
                "(0.00)"
              )}
            </p>
            <p>
              {overview["52WeekLow"]} - {overview["52WeekHigh"]}
            </p>
            <p>{numeral(overview.SharesOutstanding).format("0,0")}</p>
            <p>{numeral(overview.MarketCapitalization).format("( 0.000 a)")}</p>
            <p>{overview.EPS}</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <div>
            <p>Beta (5Y monthly)</p>
            <p>PE ratio (TTM)</p>
            <p>Last Quarter</p>
            <p>Forward dividend & yield</p>
            <p>Ex-dividend date</p>
            <p>1y target est</p>
          </div>
          <div>
            <p>{overview.Beta}</p>
            <p>{overview.TrailingPE}</p>
            <p>{overview.LatestQuarter}</p>
            <p>
              {overview.DividendPerShare} (
              {numeral(overview.DividendYield).format("(0.00%)")})
            </p>
            <p>{exDivDate}</p>
            <p>{overview.AnalystTargetPrice}</p>
          </div>
        </div>
        <div style={{ paddingBottom: "10px" }}>
          <OneDayChart intraData={intraData} />
        </div>
      </div>
    </div>
  );
}

export default Summary;
