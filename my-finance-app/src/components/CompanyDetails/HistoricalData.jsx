import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

function HistoricalData() {
  const [range, setRange] = useState("1Y");
  const [frequency, setFrequency] = useState("daily");
  const [date, setDate] = useState({
    startDate: "",
    endDate: "",
    disableCheck: false,
  });
  console.log("date", date);

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

  const handleSubmit = () => {
    console.log("clicked");
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com',
        'X-RapidAPI-Key': '6928f5c758msh38e57a42f7a523bp1d55b7jsn77a5edf7efb7'
      }
    };
    
    fetch('https://yh-finance.p.rapidapi.com/stock/v3/get-chart?interval=1d&symbol=AMAT&range=10y&region=US&includePrePost=false&useYfid=true&includeAdjustedClose=true&events=capitalGain%2Cdiv%2Csplit', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };

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
            <MenuItem value={"1D"}>1D</MenuItem>
            <MenuItem value={"5D"}>5D</MenuItem>
            <MenuItem value={"3M"}>3M</MenuItem>
            <MenuItem value={"6M"}>6M</MenuItem>
            <MenuItem value={"YTD"}>YTD</MenuItem>
            <MenuItem value={"1Y"}>1Y</MenuItem>
            <MenuItem value={"5Y"}>5Y</MenuItem>
            <MenuItem value={"10Y"}>10Y</MenuItem>
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
            <MenuItem value={"daily"}>Daily</MenuItem>
            <MenuItem value={"weekly"}>Weekly</MenuItem>
            <MenuItem value={"monthly"}>Monthly</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={handleSubmit} style={{ maxHeight: "35px ", alignSelf: "center" }}>
          Apply
        </Button>
      </div>
    </>
  );
}

export default HistoricalData;
