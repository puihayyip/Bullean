import "./App.css";
import React, { useState, createContext } from "react";
import Watchlist from "./components/Watchlist";
import Search from "./components/Search";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Summary from "./components/CompanyDetails/Summary";
import Chart from "./components/CompanyDetails/Chart";
import Statistics from "./components/CompanyDetails/Statistics";
import HistoricalData from "./components/CompanyDetails/HistoricalData";
import Financials from "./components/CompanyDetails/Financials";

import {
  Route,
  Link,
  Routes,
  useNavigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";

export const likedListContext = createContext();

function App() {
  const [likedList, setLikedList] = useState([]);
  console.log(likedList);

  return (
    <div className="App">
      <likedListContext.Provider value={[likedList, setLikedList]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />}>
              <Route path="Summary" element={<Summary />} />
              <Route path="Chart" element={<Chart />} />
              <Route path="Statistics" element={<Statistics />} />
              <Route path="HistoricalData" element={<HistoricalData />} />
              <Route path="Financials" element={<Financials />} />
            </Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </likedListContext.Provider>
    </div>
  );
}

export default App;
