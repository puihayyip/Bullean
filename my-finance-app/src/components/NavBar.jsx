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
          <h1 className="logo">Logo</h1>
          <ul className="navlinks">
            <li>
              <Link to="/">Home</Link>
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
