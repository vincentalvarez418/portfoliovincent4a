import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import ScrollToTop from "./misc/ScrollToTop";
import Hero from "./otherpage/hero";
import FollowUpStuff from "./otherpage/FollowUpStuff";
import Showcase from "./otherpage/Showcase";
import Tour from "./otherpage/Tour";
import Certificates from "./otherpage/Certificates";
import certicon from "./assets/generalicons/Certificate.png";
import home from "./assets/generalicons/home.png";
import aboutme from "./assets/generalicons/aboutme.png";
import showcase from "./assets/generalicons/showcase.png";
import tour from "./assets/generalicons/tour.png";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  if (location.pathname === "/") return null;  

  const closeModal = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <span className="nav-title">Vincent Alvarez</span>

      <div className="nav-buttons">
        <Link to="/">
          <div className="nav-box">
            <img src={home} alt="Home" className="nav-icon" />
            <span className="nav-text">HOME</span>
          </div>
        </Link>
        <span className="horiline">|</span>
        <Link to="/about">
          <div className="nav-box">
            <img src={aboutme} alt="About Me" className="nav-icon" />
            <span className="nav-text">ABOUT ME</span>
          </div>
        </Link>
        <span className="horiline">|</span>
        <Link to="/showcase">
          <div className="nav-box">
            <img src={showcase} alt="Showcase" className="nav-icon" />
            <span className="nav-text">WORKS</span>
          </div>
        </Link>
        <span className="horiline">|</span>
        <Link to="/tour">
          <div className="nav-box">
            <img src={tour} alt="Travels" className="nav-icon" />
            <span className="nav-text">TRAVELS</span>
          </div>
        </Link>
        <span className="horiline">|</span>
        <Link to="/certificates">
          <div className="nav-box">
            <img src={certicon} alt="Certificates" className="nav-icon" />
            <span className="nav-text">CERTIFICATES</span>
          </div>
        </Link>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
        ☰
      </button>

      {menuOpen && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <Link to="/" onClick={closeModal}>
        <div className="nav-box">
          <span className="nav-text">HOME</span>
        </div>
      </Link>
      <hr className="nav-divider" />
      <Link to="/about" onClick={closeModal}>
        <div className="nav-box">
          <span className="nav-text">ABOUT ME</span>
        </div>
      </Link>
      <hr className="nav-divider" />
      <Link to="/showcase" onClick={closeModal}>
        <div className="nav-box">
          <span className="nav-text">WORKS</span>
        </div>
      </Link>
      <hr className="nav-divider" />
      <Link to="/tour" onClick={closeModal}>
        <div className="nav-box">
          <span className="nav-text">TRAVELS</span>
        </div>
      </Link>
      <hr className="nav-divider" />
      <Link to="/certificates" onClick={closeModal}>
        <div className="nav-box">
          <span className="nav-text">CERTIFICATIONS</span>
        </div>
      </Link>
    </div>
  </div>
)}
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
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
