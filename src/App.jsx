import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./misc/ScrollToTop";
import Hero from "./otherpage/hero";
import FollowUpStuff from "./otherpage/FollowUpStuff";
import Showcase from "./otherpage/Showcase";
import Tour from "./otherpage/Tour";

import home from "./assets/generalicons/home.png";
import aboutme from "./assets/generalicons/aboutme.png";
import showcase from "./assets/generalicons/showcase.png";
import tour from "./assets/generalicons/tour.png";



function Navbar() {
  const location = useLocation();
  if (location.pathname === "/") return null;
  
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/">
            <div className="nav-box">
              <img src={home} alt="Home" className="nav-icon" />
              <span className="nav-text">HOME</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">
            <div className="nav-box">
              <img src={aboutme} alt="About" className="nav-icon" />
              <span className="nav-text">ABOUT ME</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/showcase">
            <div className="nav-box">
              <img src={showcase} alt="Showcase" className="nav-icon" />
              <span className="nav-text">WORKS</span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tour">
            <div className="nav-box">
              <img src={tour} alt="Travels" className="nav-icon" />
              <span className="nav-text">TRAVELS</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<FollowUpStuff />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/tour" element={<Tour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
