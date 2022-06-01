import React from "react";
import data from "../../sampleAPIs/CompanyOverview.json";

function Summary({ dailyShares, overview }) {
  const numeral = require("numeral");
  // const overview = data;
  const sharesObj = dailyShares?.["Time Series (Daily)"];
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
      <div style={{ display: "flex", gap: "70px" }}>
        <div
          style={{ display: "flex", gap: "30px", justifyItems: "spaceAround" }}
        >
          <div>
            <p>Previous Close: </p>
            <p>Open:</p>
            <p>Day's Range:</p>
            <p>52-week Range:</p>
            <p>Volume:</p>
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
            <p>{numeral(overview.MarketCapitalization).format("( 0.000 a)")}</p>
            <p>{overview.Beta}</p>
            <p>{overview.TrailingPE}</p>
            <p>{overview.EPS}</p>
            <p>28 Jun 2022 - 04 Jul 2022</p>
            <p>0.40 (0.55%)</p>
            <p>{exDivDate}</p>
            <p>110.42</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
