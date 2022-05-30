import React from "react";
import styles from "./Cards.module.css";
import ScrollToTopBtn from "./ScrollToTopBtn";

function Cards({ result, setTicker }) {
  const handleClick = (e) => {
    const parentID = e.target.parentNode.id;
    setTicker(parentID);
  };

  let innerArr = [];
  let outerArr = [];
  if (result?.["bestMatches"].length === 0) {
    // console.log("No related company found");
  } else {
    // setTicker(result?.["bestMatches"][0]["1. symbol"]);
    for (let companies of result?.["bestMatches"]) {
      for (let i = 0; i < 4; i++) {
        let text = "";
        switch (i) {
          case 0:
            text = "Symbol";
            break;
          case 1:
            text = "Name";
            break;
          case 2:
            text = "Type";
            break;
          case 3:
            text = "Region";
            break;
          default:
            return;
        }
        innerArr.push(
          <p key={i}>
            <b>{text}</b>: {Object.values(companies)?.[i]}
          </p>
        );
      }
      outerArr.push(
        <div key={Object.values(companies)?.[0]}>
          <div
            className={styles.card}
            onClick={(e) => handleClick(e)}
            id={Object.values(companies)?.[0]}
          >
            <div
              className={styles.container}
              id={Object.values(companies)?.[0]}
            >
              {innerArr}
            </div>
          </div>
          <br />
        </div>
      );
      innerArr = [];
    }
  }

  return (
    <>
      {outerArr}
      <ScrollToTopBtn />
    </>
  );
}

export default Cards;
