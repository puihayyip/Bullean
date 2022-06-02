import React, { useState } from "react";
import searchResults from "../sampleAPIs/SearchEndpoint.json";

import Cards from "./Cards";
import LoadingScreen from "./LoadingScreen";
import CompanyOverview from "./CompanyOverview";
import ScrollToTopBtn from "./ScrollToTopBtn";

function Search() {
  const APIKEY2 = process.env.REACT_APP_APIKEY2;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({ bestMatches: [] });
  const [loading, setLoading] = useState("");
  const [ticker, setTicker] = useState("");

  async function fetchData() {
    const url = `https://www.alphavantage.co/query?apikey=${APIKEY2}&function=SYMBOL_SEARCH&datatype=json&keywords=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    setResult(data);
    setLoading("ran");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value = "";
    setLoading("loading");
    fetchData();
  };

  if (loading === "loading") {
    return <LoadingScreen />;
  }

  return (
    <div className="bodyContent">
      <h1>Search Company</h1>
      <form action="searchSearch" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="searchSearch">Enter stock Search: </label>
        <input
          placeholder="Company Name / Search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div style={{ display: "flex", gap: "2%", alignItems: "flex-start" }}>
        <div
          style={{
            flexBasis: "40%",
            display: "flex",
            flexDirection: "column",
          }}
          id="cards"
        >
          <Cards result={result} setTicker={setTicker} ticker={ticker} />
        </div>
        <CompanyOverview ticker={ticker} setTicker={setTicker} />
      </div>
      <ScrollToTopBtn />
    </div>
  );
}

export default Search;
