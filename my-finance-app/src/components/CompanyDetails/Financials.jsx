import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useNavigate, Outlet } from "react-router-dom";

function Financials() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [period, setPeriod] = useState(0);
  const goTo = useNavigate();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    switch (newValue) {
      case 0:
        goTo("/Financials/IncomeStatement");
        break;
      case 1:
        goTo("/Financials/BalanceSheet");
        break;
      case 2:
        goTo("/Financials/CashFlow");
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h1>Financials</h1>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Tabs value={selectedTab} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
          <Tab label="Income Statement" />
          <Tab label="Balance Sheet" />
          <Tab label="Cash Flow" />
        </Tabs>
        <Tabs
          value={period}
          onChange={(event, newValue) => {
            setPeriod(newValue);
          }}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Annually" />
          <Tab label="Quarterly" />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
}

export default Financials;
