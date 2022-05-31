import React from "react";

function Summary({ companyData, dailyShares }) {
  const sharesObj = dailyShares?.["Time Series (Daily)"];

  return (
    <div className="container">
      <h1>Summary</h1>
      <div style={{ display: "flex" }}>
        <div>
          <p>Open: {Object.values(sharesObj)?.[1]?.["4. close"]}</p>
          <p>Open: {Object.values(sharesObj)?.[0]?.["1. open"]}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Summary;
