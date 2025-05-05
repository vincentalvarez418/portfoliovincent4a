import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
import experienceIcon from "./assets/generalicons/experience.png";
import contactIcon from "./assets/generalicons/contact.png";
import Experience from "./otherpage/Experience";
import Footer from "./otherpage/Footer";
import Contact from "./otherpage/Contact";
import Day1 from "../src/daypages/day1";
import Day2 from "../src/daypages/day2";
import Day3 from "../src/daypages/day3";
import Day4 from "../src/daypages/day4";
import Day5 from "../src/daypages/day5";
import Day6 from "../src/daypages/day6";
import Day7 from "../src/daypages/day7";
import RandomShots from "../src/daypages/randomshots";

function AnimatedTitle() {
  const [text, setText] = useState("");
  const [viewType, setViewType] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const baseText = "Vincent Alvarez | ";
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setViewType("Mobile");
      } else if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
        setViewType("Tab");
      } else if (window.innerWidth >= 1025 && window.innerWidth <= 1142) {
        setViewType("Custom Device");
      } else {
        setViewType("PC");
      }
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  useEffect(() => {
    let i = 0;
    const typeBase = () => {
      if (i <= baseText.length) {
        setText(baseText.slice(0, i));
        i++;
        setTimeout(typeBase, 60);
      } else {
        setTimeout(() => {
          let j = 0;
          const typeSuffix = () => {
            if (j <= viewType.length) {
              setText(baseText + viewType.slice(0, j));
              j++;
              setTimeout(typeSuffix, 60);
            } else {
              setShowCursor(false);
            }
          };
          typeSuffix();
        }, 2000);
      }
    };
    typeBase();
  }, [viewType]);

  return (
    <span>
      {text}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
}

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewType, setViewType] = useState(""); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setViewType("Mobile");
      } else if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
        setViewType("Tab");
      } else if (window.innerWidth >= 1000 && window.innerWidth <= 1141) {
        setViewType("Custom Device");  
      } else {
        setViewType("PC");
        setMenuOpen(false); 
      }
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  useEffect(() => {
    if (viewType === "Mobile") {
      setMenuOpen(false);
    }
  }, [viewType]);

  if (location.pathname === "/") return null;

  const closeModal = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <span className="nav-title">
        <AnimatedTitle />
      </span>

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
              <span className="nav-text">PROJECTS</span>
            </div>
          </Link>
          <span className="horiline">|</span>
          <a href="https://tourblogalvarez.netlify.app/" target="_blank" rel="noopener noreferrer">
            <div className="nav-box">
              <img src={tour} alt="Travels" className="nav-icon" />
              <span className="nav-text">TOUR</span>
            </div>
          </a>
          <span className="horiline">|</span>
          <Link to="/certificates">
            <div className="nav-box">
              <img src={certicon} alt="Certificates" className="nav-icon" />
              <span className="nav-text">CERTIFICATES</span>
            </div>
          </Link>
          <span className="horiline">|</span>
          <Link to="/experience">
            <div className="nav-box">
              <img src={experienceIcon} alt="Experience" className="nav-icon" />
              <span className="nav-text">EXPERIENCE</span>
            </div>
          </Link>
          <span className="horiline">|</span>
          <Link to="/contact">
            <div className="nav-box">
              <img src={contactIcon} alt="Contact" className="nav-icon" />
              <span className="nav-text">CONTACT</span>
            </div>
          </Link>
        </div>

      {(viewType === "Mobile" || viewType === "Tab" || viewType === "Custom Device") && (
        <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
          {"</>"}
        </button>
      )}


      {menuOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Link to="/" onClick={closeModal}>
              <div className="nav-box">
                <span className="modal-text">HOME</span>
              </div>
            </Link>
            <hr className="nav-divider" />
            <Link to="/about" onClick={closeModal}>
              <div className="nav-box">
                <span className="modal-text">ABOUT ME</span>
              </div>
            </Link>
            <hr className="nav-divider" />
            <Link to="/showcase" onClick={closeModal}>
              <div className="nav-box">
                <span className="modal-text">PROJECTS</span>
              </div>
            </Link>
            <hr className="nav-divider" />
            <a href="https://tourblogalvarez.netlify.app/" target="_blank" rel="noopener noreferrer" onClick={closeModal}>
              <div className="nav-box">
                <span className="modal-text">TOUR</span>
              </div>
            </a>
            <hr className="nav-divider" />
            <Link to="/certificates" onClick={closeModal}>
              <div className="nav-box">
                <span className="modal-text">CERTIFICATIONS</span>
              </div>
            </Link>
            <hr className="nav-divider" />
            <Link to="/experience" onClick={closeModal}>
              <div className="nav-box">
                <span className="modal-text">EXPERIENCE</span>
              </div>
            </Link>
            <hr className="nav-divider" />
            <Link to="/contact" onClick={closeModal}>
              <div className="nav-box">
                <span className="modal-text">CONTACT</span>
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
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/day1" element={<Day1 />} />
          <Route path="/day2" element={<Day2 />} />
          <Route path="/day3" element={<Day3 />} />
          <Route path="/day4" element={<Day4 />} />
          <Route path="/day5" element={<Day5 />} />
          <Route path="/day6" element={<Day6 />} />
          <Route path="/day7" element={<Day7 />} />
          <Route path="/randomshots" element={<RandomShots />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
