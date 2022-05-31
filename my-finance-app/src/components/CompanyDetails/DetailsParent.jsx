import React, { useState, useContext } from "react";
import style from "./DetailsParent.module.css";
import { FaCaretRight } from "react-icons/fa";
import DetailsChild from "./DetailsChild";
import $ from "jquery";
import { stateContext } from "../../App";

function Details({ ticker }) {
  const [state, setState] = useContext(stateContext);

  const [data, setData] = useState({});
  const APIKEY = process.env.REACT_APP_APIKEY;
  const URLOverview = `https://www.alphavantage.co/query?apikey=${APIKEY}&function=OVERVIEW&symbol=${ticker}`;
  const URLDaily = `https://www.alphavantage.co/query?apikey=${APIKEY}&function=TIME_SERIES_DAILY&symbol=${ticker}`;

  async function fetchData() {
    const res = await fetch(URLOverview);
    const Data = await res.json();
    setState({ ...state, companyData: Data });

    const secondRes = await fetch(URLDaily);
    const secondData = await secondRes.json();
    setState({ ...state, dailyShares: secondData });
  }

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    $("#cards").slideToggle(500);
    $("#companyOverview").css({
      "justify-self": "end",
      "flex-basis": "100%",
    });
    fetchData();
  };

  if (show) {
    $("#DetailsComponents").show();
  } else {
    $("#DetailsComponents").hide();
  }

  return (
    <div>
      <div className={style.details__container} onClick={handleClick}>
        <h3>Details</h3>
        <FaCaretRight
          className={show ? style.details__btn__rotate : style.details__btn}
        />
      </div>
      <div id="DetailsComponents">
        <DetailsChild />
      </div>
    </div>
  );
}

export default Details;
