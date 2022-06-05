import React from "react";
import { Route, Link, Routes, useNavigate, Outlet, BrowserRouter } from "react-router-dom";

function NavBar() {
  const goTo = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="header">
            <a
              href="https://www.youtube.com/watch?v=2Ik51943WQE&t=1368s
              "
              target="_blank"
              style={{ cursor: "not-allowed" }}
            >
              <h1 className="logoText">Bullean</h1>
              <p>Seeking The Truth</p>
            </a>
          </div>
          <img
            className="logoImg"
            src="https://cdn-icons-png.flaticon.com/512/1606/1606571.png"
            // taken from https://www.flaticon.com/free-icon/bull_1606608?term=bull&related_id=1606608
            alt=""
            style={{ cursor: "not-allowed" }}
            onClick={() => goTo("/scampage")}
          />
          <ul className="navlinks">
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/">Search</Link>
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
