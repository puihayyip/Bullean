import React, { useState, useEffect } from "react";
import searchResults from "../sampleAPIs/SearchEndpoint.json";

function Search() {
  const APIKEY = process.env.REACT_APP_APIKEY;
  const [ticker, setTicker] = useState("");

  //Actual API call
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // async function fetchData() {
  //   try {
  //     const url = `https://www.alphavantage.co/query?apikey=${APIKEY}&function=OVERVIEW&symbol=${ticker}`;
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="content">
      <h1>Search Company</h1>
      <form
        action="searchTicker"
        onSubmit={(e) => {
          e.preventDefault();
          e.target[0].value = "";
        }}
      >
        <label htmlFor="searchTicker">Enter stock ticker: </label>
        <input
          placeholder="Company Name / Ticker"
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Search;
