import React, { useContext, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import overviewData from "../sampleAPIs/CompanyOverview.json";
import styles from "./Cards.module.css";
import LikeButton from "./LikeButton";
import DetailsParent from "./CompanyDetails/DetailsParent";
import { stateContext } from "../App";

function CompanyOverview({ ticker, setTicker }) {
  const [state, setState] = useContext(stateContext);
  const LOGOAPIKEY = process.env.REACT_APP_LOGOAPIKEY;
  const logoURL = `https://cloud.iexapis.com/stable/stock/${ticker}/logo/quote?token=${LOGOAPIKEY}`;
  const URL = `https://cloud.iexapis.com/stable/stock/${ticker}/company/query?token=${LOGOAPIKEY}`;
  const [overview, setOverview] = useState({});
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState("");
  const [prevTicker, setPrevTicker] = useState("");
  const numeral = require("numeral");

  async function fetchCompanyData() {
    try {
      let res = await fetch(URL);
      let data = await res.json();
      setState({ ...state, selectedTicker: ticker });
      setOverview(data);
      setLoading("ran");
      res = await fetch(logoURL);
      data = await res.json();
      setImg(data);
    } catch (error) {
      alert("No details found");
      setLoading("ran");
      setTicker("");
    }
  }

  if (prevTicker !== ticker) {
    setPrevTicker(ticker);
    // setOverview(overviewData);
    fetchCompanyData();
    setLoading("loading");
  }

  if (loading === "loading") {
    return <LoadingScreen />;
  }

  let arr = [
    <div key={ticker}>
      <p>
        <b>Company Name</b>: {overview.companyName}
      </p>
      <p>
        <b>Symbol</b>: {overview.symbol}
      </p>
      <p>
        <b>Exchange</b>: {overview.exchange}
      </p>
      <p>
        <b>Industry</b>: {overview.industry}
      </p>
      <p>
        <b>Website</b>: {overview.website}
      </p>
      <p>
        <b>Description</b>: {overview.description}
      </p>
      <p>
        <b>CEO</b>: {overview.CEO}
      </p>
      <p>
        <b>Country</b>: {overview.country}
      </p>
      <p>
        <b>Employees</b>: {numeral(overview.employees).format("0,0")}
      </p>
    </div>,
  ];

  if (loading === "ran") {
    return (
      <>
        <div
          className={styles.card}
          id="companyOverview"
          style={{ flexBasis: "58%", fontSize: "1rem" }}
        >
          <div className={styles.container}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  borderBottom: "2px solid black",
                }}
              >
                <LikeButton ticker={ticker} />
                <h2>{overview.companyName}</h2>
                <div style={{ margin: "auto 0" }}>
                  <img src={img.url} alt="" style={{ width: "60px" }} />
                </div>
              </div>

              <div>{arr}</div>
              <DetailsParent ticker={ticker} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CompanyOverview;
