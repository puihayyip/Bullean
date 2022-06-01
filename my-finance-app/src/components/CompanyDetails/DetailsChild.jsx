import React, { useState, useContext } from "react";
import Header from "./Header";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Outlet, useNavigate } from "react-router-dom";

<Header />;
function DetailsChild() {
  const [selectedTab, setSelectedTab] = useState(0);
  const goTo = useNavigate();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    switch (newValue) {
      case 0:
        goTo("/Summary");
        break;
      case 1:
        goTo("/Chart");
        break;
      case 2:
        goTo("/Statistics");
        break;
      case 3:
        goTo("/HistoricalData");
        break;
      case 4:
        goTo("/Financials");
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Header />
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
    </>
  );
}

export default DetailsChild;
