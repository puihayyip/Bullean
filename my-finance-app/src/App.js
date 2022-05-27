import "./App.css";
import HomePage from "./components/HomePage";
import Search from "./components/Search";
import About from "./components/About";
import NavBar from "./components/NavBar";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
