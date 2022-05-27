import React from "react";
import styles from "./Cards.module.css";

function Cards({ result }) {
  let innerArr = [];
  let outerArr = [];
  if (result?.["bestMatches"].length === 0) {
    console.log("No related company found");
  } else {
    for (let companies of result?.["bestMatches"]) {
      for (let i = 0; i < 4; i++) {
        innerArr.push(
          <p key={i}>
            {Object.keys(companies)?.[i]}: {Object.values(companies)?.[i]}
          </p>
        );
      }
      outerArr.push(
        <>
          <br />
          <div className={styles.card}>
            <div className={styles.container}>{innerArr}</div>
          </div>
        </>
      );
      innerArr = [];
    }
  }

  return <>{outerArr}</>;
}

export default Cards;
