import React from "react";
import {
  Route,
  Link,
  Routes,
  useNavigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="header">
            <h1 className="logoText">Bullean</h1>
            <p>Seeking The Truth</p>
          </div>
          <img
            className="logoImg"
            src="https://cdn-icons-png.flaticon.com/512/1606/1606571.png"
            // taken from https://www.flaticon.com/free-icon/bull_1606608?term=bull&related_id=1606608
            alt=""
          />
          <ul className="navlinks">
            <li>
              <Link to="/">Watchlist</Link>
            </li>
            <li>
              <Link to="/Search">Search</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
