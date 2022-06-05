import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import styles from "./Cards.module.css";
import Button from "@mui/material/Button";

function WatchlistCards({ ticker, setState, state }) {
  const numeral = require("numeral");
  const [details, setDetails] = useState({});
  const APIKEY = process.env.REACT_APP_LOGOAPIKEY;
  const URL = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${APIKEY}`;
  async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json();
    setDetails({ companyName: data.companyName, close: data.close, change: data.change, changePercent: data.changePercent });
  }

  useEffect(() => {
    fetchData();
  }, [state.likedList]);

  const handleClick = () => {
    setState({ ...state, selectedTicker: ticker });
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.gridCard}>
          <p className={styles.name}>{details.companyName}</p>
          <p className={styles.ticker}>{ticker}</p>
          <p className={styles.Change} id="percentageChange" style={details.changePercent > 0 ? { color: "green" } : { color: "red" }}>
            {numeral(details.changePercent).format("0.00%")}
          </p>
          <p className={styles.price}>{details.close}</p>
          {/* <button className={styles.more} onClick={handleClick}>
            More
          </button> */}
          <div className={styles.trash}>
            <Button onClick={handleClick} variant="outlined">
              More
            </Button>
            <AiFillDelete
              onClick={() =>
                setState({
                  likedList: state.likedList.filter((companies) => companies !== ticker),
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchlistCards;
