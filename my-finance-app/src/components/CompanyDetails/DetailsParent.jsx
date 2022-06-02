import React, { useState, useContext, useEffect } from "react";
import style from "./DetailsParent.module.css";
import { FaCaretRight } from "react-icons/fa";
import DetailsChild from "./DetailsChild";
import $ from "jquery";
import { stateContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Details({ ticker }) {
  const [state, setState] = useContext(stateContext);
  const goTo = useNavigate();

  const APIKEY = process.env.REACT_APP_APIKEY;
  const APIKEY3 = process.env.REACT_APP_APIKEY3;
  const URLOverview = `https://www.alphavantage.co/query?apikey=${APIKEY}&function=OVERVIEW&symbol=${ticker}`;
  const URLDaily = `https://www.alphavantage.co/query?apikey=${APIKEY3}&function=TIME_SERIES_DAILY&symbol=${ticker}`;

  async function fetchData() {
    const res = await fetch(URLOverview);
    const data = await res.json();

    const secondRes = await fetch(URLDaily);
    const secondData = await secondRes.json();
    setState({ ...state, companyData: data, dailyShares: secondData });
  }

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    $("#cards").slideToggle(500);
    $("#companyOverview").css({
      "justify-self": "end",
      "flex-basis": "100%",
    });
    if (show) {
      fetchData();
    }
    goTo("/Summary");
  };

  useEffect(() => {
    fetchData();
  }, []);

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
