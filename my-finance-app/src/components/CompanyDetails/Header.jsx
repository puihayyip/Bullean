import React, { useContext } from "react";
import { stateContext } from "../../App";
import $ from "jquery";

function Header() {
  const numeral = require("numeral");
  const [state, setState] = useContext(stateContext);
  const sharesObj = state?.dailyShares?.["Time Series (Daily)"];
  if (sharesObj === null || sharesObj === undefined) {
    return null;
  }
  const priceDiff =
    Object.values(sharesObj)?.[0]?.["4. close"] -
    Object.values(sharesObj)?.[1]?.["4. close"];

  if (priceDiff > 0) {
    $("#priceChange").css("color", "green");
    $("#percentagePriceChange").css("color", "green");
  } else {
    $("#priceChange").css("color", "red");
    $("#percentagePriceChange").css("color", "red");
  }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <h3 id="sharePrice">
        Share Price:{" "}
        {numeral(Object.values(sharesObj)[0]["4. close"])?.format("0,0.00")}
      </h3>
      <h3 id="priceChange">{numeral(priceDiff)?.format("0.00")}</h3>
      <h3 id="percentagePriceChange">
        ({" "}
        {numeral(priceDiff / Object.values(sharesObj)[1]["4. close"])?.format(
          "0.00%"
        )}
        )
      </h3>
    </div>
  );
}

export default Header;
