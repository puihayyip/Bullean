import React, { useState, useEffect } from "react";
import searchResults from "../sampleAPIs/SearchEndpoint.json";
import Cards from "./Cards";
import LoadingScreen from "./LoadingScreen";

function Search() {
  const APIKEY = process.env.REACT_APP_APIKEY;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({ bestMatches: [] });
  const [loading, setLoading] = useState("");

  //Actual API call
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async function fetchData() {
    try {
      const url = `https://www.alphavantage.co/query?apikey=${APIKEY}&function=SYMBOL_SEARCH&datatype=json&keywords=${search}`;
      const res = await fetch(url);
      const data = await res.json();
      setResult(data);
      setLoading("ran");
    } catch (error) {
      alert(error);
    }
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value = "";
    fetchData();
    setLoading("loading");
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
      <Cards result={result} />
    </div>
  );
}

export default Search;
