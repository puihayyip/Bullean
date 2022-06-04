import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

function HistoricalData() {
  const [range, setRange] = useState("1Y");

  const handleChange = (event) => {
    setRange(event.target.value);
  };

  return (
    <>
      <h1>HistoricalData</h1>

      {/* <Box sx={{ minWidth: 15 }}> */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <InputLabel variant="standard">Time Period:</InputLabel>

        <Select value={range} onChange={handleChange}>
          <MenuItem value={"1D"}>1D</MenuItem>
          <MenuItem value={"5D"}>5D</MenuItem>
          <MenuItem value={"3M"}>3M</MenuItem>
          <MenuItem value={"6M"}>6M</MenuItem>
          <MenuItem value={"YTD"}>YTD</MenuItem>
          <MenuItem value={"1Y"}>1Y</MenuItem>
          <MenuItem value={"5Y"}>5Y</MenuItem>
          <MenuItem value={"15Y"}>15Y</MenuItem>
        </Select>
      </FormControl>
      {/* </Box> */}
    </>
  );
}

export default HistoricalData;
