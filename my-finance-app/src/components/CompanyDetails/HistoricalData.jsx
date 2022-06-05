import React, { useEffect, useState, useContext } from "react";
import { stateContext } from "../../App";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import HistoricalDataCards from "./HistoricalDataCards";
import LoadingScreen from "../MainComponents/LoadingScreen";
import { data } from "jquery";

function HistoricalData() {
  const [loading, setLoading] = useState("");
  const [state, setState] = useContext(stateContext);
  const ticker = state.selectedTicker;
  const [range, setRange] = useState("1y");
  const [frequency, setFrequency] = useState("1d");
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
    disableCheck: false,
  });

  let today = new Date();
  today.setDate(today.getDate() + 1);
  today = today.toISOString().split("T")[0];

  useEffect(() => {
    if (date.startDate !== "" && date.endDate !== "") {
      setDate({ ...date, disableCheck: true });
    } else {
      setDate({ ...date, disableCheck: false });
    }
  }, [date.endDate]);

  const APIKEY = process.env.REACT_APP_RAPIDAPIKEY;
  const fetchData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        "X-RapidAPI-Key": `${APIKEY}`,
      },
    };

    if (!date.disableCheck) {
      fetch(
        `https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=${frequency}&symbol=${ticker}&range=${range}&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit`,
        options
      )
        .then((response) => response.json())
        .then((response) => setState({ ...state, historicalData: response }))
        .catch((err) => console.error(err));
    } else {
      let period1 = new Date(date.startDate);
      period1 = period1.getTime() / 1000;
      let period2 = new Date(date.endDate);
      period2 = period2.getTime() / 1000;
      fetch(
        `https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=${frequency}&symbol=${ticker}&period1=${period1}&period2=${period2}&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit`,
        options
      )
        .then((response) => response.json())
        .then((response) => setState({ ...state, historicalData: response }))
        .catch((err) => console.error(err));
    }
    setLoading("ran");
  };

  const handleSubmit = () => {
    setLoading("loading");
    fetchData();
  };

  if (loading === "loading") {
    return <LoadingScreen />;
  }

  return (
    <>
      <h1>HistoricalData</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }} disabled={date.disableCheck}>
          <InputLabel variant="standard">Time Period:</InputLabel>

          <Select
            value={range}
            onChange={(e) => {
              setRange(e.target.value);
            }}
          >
            <MenuItem value={"1d"}>1D</MenuItem>
            <MenuItem value={"5d"}>5D</MenuItem>
            <MenuItem value={"3mo"}>3M</MenuItem>
            <MenuItem value={"6mo"}>6M</MenuItem>
            <MenuItem value={"ytd"}>YTD</MenuItem>
            <MenuItem value={"1y"}>1Y</MenuItem>
            <MenuItem value={"5y"}>5Y</MenuItem>
            <MenuItem value={"10y"}>10Y</MenuItem>
          </Select>
        </FormControl>
        <h4>Or</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "space-around" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
            <label htmlFor="">Start </label>
            <input
              type="date"
              onChange={(e) => {
                setDate({ ...date, startDate: e.target.value });
              }}
              max={today}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
            <label htmlFor="">End </label>
            <input
              type="date"
              onChange={(e) => {
                setDate({ ...date, endDate: e.target.value });
              }}
              max={today}
              min={date.startDate}
            />
          </div>
        </div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
          <InputLabel variant="standard">Frequency:</InputLabel>

          <Select
            value={frequency}
            onChange={(e) => {
              setFrequency(e.target.value);
            }}
          >
            <MenuItem value={"1d"}>Daily</MenuItem>
            <MenuItem value={"1wk"}>Weekly</MenuItem>
            <MenuItem value={"1mo"}>Monthly</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={handleSubmit} style={{ maxHeight: "35px ", alignSelf: "center" }}>
          Apply
        </Button>
      </div>
      <br />
      <div>
        <HistoricalDataCards data={state.historicalData} />
      </div>
    </>
  );
}

export default HistoricalData;
