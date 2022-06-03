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
        goTo("/Chart/OneDayChart");
        break;
      case 1:
        goTo("/Chart/FiveDayChart");
        break;
      case 2:
        goTo("/Chart/OneMonthChart");
        break;
      case 3:
        goTo("/Chart/ThreeMonthChart");
        break;
      case 4:
        goTo("/Chart/SixMonthChart");
        break;
      case 5:
        goTo("/Chart/YTDChart");
        break;
      case 6:
        goTo("/Chart/OneYearChart");
        break;
      case 7:
        goTo("/Chart/TwoYearChart");
        break;
      case 8:
        goTo("/Chart/FiveYearChart");
        break;
      case 9:
        goTo("/Chart/MaxChart");
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
          display: "inline-flex",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="1D" />
          <Tab label="5D" />
          <Tab label="1M" />
          <Tab label="3M" />
          <Tab label="6M" />
          <Tab label="YTD" />
          <Tab label="1Y" />
          <Tab label="2Y" />
          <Tab label="5Y" />
          <Tab label="Max" />
        </Tabs>
      </Box>
      <Outlet />
    </>
  );
}

export default Chart;
