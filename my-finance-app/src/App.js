import "./App.css";
import React, { useState, createContext } from "react";
import Watchlist from "./components/Watchlist";
import Search from "./components/Search";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
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
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Search />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </likedListContext.Provider>
    </div>
  );
}

export default App;
