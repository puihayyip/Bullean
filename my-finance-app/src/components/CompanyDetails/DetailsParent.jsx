import React, { useState } from "react";
import style from "./DetailsParent.module.css";
import { FaCaretRight } from "react-icons/fa";
import DetailsChild from "./DetailsChild";
import $ from "jquery";

function Details({ ticker }) {
  const [data, setData] = useState({});
  const APIKEY = process.env.REACT_APP_APIKEY;
  const URL = `https://www.alphavantage.co/query?apikey=${APIKEY}&function=OVERVIEW&symbol=${ticker}`;

  async function fetchData() {
    const res = await fetch(URL);
    const Data = await res.json();
    setData(Data);
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
        <DetailsChild data={data} />
      </div>
    </div>
  );
}

export default Details;
