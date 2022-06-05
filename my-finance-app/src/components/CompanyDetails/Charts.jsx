import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Chart() {
  const goTo = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    switch (newValue) {
      case 0:
        goTo("OneDayChart");
        break;
      case 1:
        goTo("FiveDayChart");
        break;
      case 2:
        goTo("OneMonthChart");
        break;
      case 3:
        goTo("ThreeMonthChart");
        break;
      case 4:
        goTo("SixMonthChart");
        break;
      case 5:
        goTo("YTDChart");
        break;
      case 6:
        goTo("OneYearChart");
        break;
      case 7:
        goTo("TwoYearChart");
        break;
      case 8:
        goTo("FiveYearChart");
        break;
      case 9:
        goTo("MaxChart");
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h1>Charts</h1>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs value={selectedTab} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
          <Tab label="1D" />
          <Tab label="5D" />
          <Tab label="1M" />
          <Tab label="3M" />
          <Tab label="6M" />
          <Tab label="YTD" />
          <Tab label="1Y" />
          <Tab label="2Y" />
          <Tab label="5Y" />
          <Tab label="15Y" />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
}

export default Chart;
