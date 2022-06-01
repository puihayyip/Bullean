import React from "react";

function Summary({ companyData, dailyShares }) {
  const sharesObj =
    dailyShares == null ? [] : dailyShares?.["Time Series (Daily)"];
  const numeral = require("numeral");

  return (
    <div className="container">
      <h1>Summary</h1>
      <div style={{ display: "flex", gap: "70px" }}>
        <div
          style={{ display: "flex", gap: "30px", justifyItems: "spaceAround" }}
        >
          <div>
            <p>Previous Close: </p>
            <p>Open:</p>
            <p>Bid: </p>
            <p>Ask: </p>
            <p>Day's Range:</p>
            <p>52-week Range:</p>
            <p>Volume:</p>
            <p>Avg. Volume:</p>
          </div>
          <div>
            <p>{Object.values(sharesObj)?.[1]?.["4. close"]}</p>
            <p> {Object.values(sharesObj)?.[0]?.["1. open"]}</p>
            <p> 72.28 x 1800</p>
            <p> 72.30 x 1000</p>
            <p> 71.93 - 73.40</p>
            <p>
              {companyData["52WeekLow"]} - {companyData["52WeekHigh"]}
            </p>
            <p> 2,659,088</p>
            <p> 22,302,193</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyItems: "spaceAround" }}>
          <div>
            <p>Market cap</p>
            <p>Beta (5Y monthly)</p>
            <p>PE ratio (TTM)</p>
            <p>EPS (TTM)</p>
            <p>Earnings date</p>
            <p>Forward dividend & yield</p>
            <p>Ex-dividend date</p>
            <p>1y target est</p>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <p>
              {numeral(companyData.MarketCapitalization).format("($ 0.00 a)")}
            </p>
            <p>{companyData.Beta}</p>
            <p>{companyData.TrailingPE}</p>
            <p>$ {companyData.EPS}</p>
            <p>28 Jun 2022 - 04 Jul 2022</p>
            <p>0.40 (0.55%)</p>
            <p>{Date(companyData.ExDividendDate)}</p>
            <p>110.42</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
