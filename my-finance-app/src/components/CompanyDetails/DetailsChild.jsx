import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";

function DetailsChild({ data }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const goTo = useNavigate();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    switch (newValue) {
      case 0:
        goTo("/search/Summary");
        break;
      case 1:
        goTo("/search/Chart");
        break;
      case 2:
        goTo("/search/Statistics");
        break;
      case 3:
        goTo("/search/HistoricalData");
        break;
      case 4:
        goTo("/search/Financials");
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedTab} onChange={handleChange} variant="fullWidth">
          <Tab label="Summary" />
          <Tab label="Chart" />
          <Tab label="Statistics" />
          <Tab label="Historical Data" />
          <Tab label="Financials" />
        </Tabs>
      </Box>
      <Outlet />
      {/* {Object.keys(data).map((key, index) => {
        return (
          <p key={index}>
            {key}: {data[key]}
          </p>
        );
      })} */}
    </>
  );
}

export default DetailsChild;
