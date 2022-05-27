import "./App.css";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/About" element={<About />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
