import "./App.css";
import React, { useState, createContext } from "react";
import ScamPage from "./components/MainComponents/ScamPage";
import Watchlist from "./components/MainComponents/Watchlist";
import Search from "./components/MainComponents/Search";
import About from "./components/MainComponents/About";
import NavBar from "./components/MainComponents/NavBar";
import Footer from "./components/MainComponents/Footer";
import Summary from "./components/CompanyDetails/Summary";
import Charts from "./components/CompanyDetails/Charts";
import OneDayChart from "./components/CompanyDetails/ChartComponents/OneDayChart";
import FiveDayChart from "./components/CompanyDetails/ChartComponents/FiveDayChart";
import OneMonthChart from "./components/CompanyDetails/ChartComponents/OneMonthChart";
import ThreeMonthChart from "./components/CompanyDetails/ChartComponents/ThreeMonthChart";
import SixMonthChart from "./components/CompanyDetails/ChartComponents/SixMonthChart";
import YTDChart from "./components/CompanyDetails/ChartComponents/YTDChart";
import OneYearChart from "./components/CompanyDetails/ChartComponents/OneYearChart";
import TwoYearChart from "./components/CompanyDetails/ChartComponents/TwoYearChart";
import FiveYearChart from "./components/CompanyDetails/ChartComponents/FiveYearChart";
import MaxChart from "./components/CompanyDetails/ChartComponents/MaxChart";
import Statistics from "./components/CompanyDetails/Statistics";
import HistoricalData from "./components/CompanyDetails/HistoricalData";
import Financials from "./components/CompanyDetails/Financials";

import { Route, Routes, BrowserRouter } from "react-router-dom";

export const stateContext = createContext();

function App() {
  const [state, setState] = useState({
    likedList: [],
    selectedTicker: "",
    companyData: {},
    dailyShares: {},
    chartData: {},
  });
  console.log(state);

  return (
    <div className="App">
      <stateContext.Provider value={[state, setState]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/scampage" element={<ScamPage />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Search />}>
              <Route
                path="Summary"
                element={
                  <Summary
                    overview={state.companyData}
                    dailyShares={state.dailyShares}
                  />
                }
              />
              <Route path="Chart" element={<Charts />}>
                <Route path="OneDayChart" element={<OneDayChart />} />
                <Route path="FiveDayChart" element={<FiveDayChart />} />
                <Route path="OneMonthChart" element={<OneMonthChart />} />
                <Route path="ThreeMonthChart" element={<ThreeMonthChart />} />
                <Route path="SixMonthChart" element={<SixMonthChart />} />
                <Route path="YTDChart" element={<YTDChart />} />
                <Route path="OneYearChart" element={<OneYearChart />} />
                <Route path="TwoYearChart" element={<TwoYearChart />} />
                <Route path="FiveYearChart" element={<FiveYearChart />} />
                <Route path="MaxChart" element={<MaxChart />} />
              </Route>
              <Route path="Statistics" element={<Statistics />} />
              <Route path="HistoricalData" element={<HistoricalData />} />
              <Route path="Financials" element={<Financials />} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </stateContext.Provider>
    </div>
  );
}

export default App;
