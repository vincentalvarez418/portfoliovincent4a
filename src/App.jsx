import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ScrollToTop from './misc/ScrollToTop'; 
import Hero from "./hero";
import FollowUpStuff from "./otherpage/FollowUpStuff";
import SkillsAndServices from "./otherpage/SkillsAndServices";
import Contact from "./otherpage/Contact";
import Showcase from "./otherpage/Showcase";
import Tour from "./otherpage/Tour";

import home from "./assets/generalicons/home.png";
import aboutme from "./assets/generalicons/aboutme.png";
import showcase from "./assets/generalicons/showcase.png";
import contact from "./assets/generalicons/contact.png";
import skills from "./assets/generalicons/skills.png";
import tour from "./assets/generalicons/tour.png";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<FollowUpStuff />} />
          <Route path="/skills" element={<SkillsAndServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/tour" element={<Tour />} />
        </Routes>

        <div className="button-container">
          <Link to="/" className="custom-button">
            <span className="icon">
              <img src={home} alt="Home" />
            </span>
            <span className="text">Home</span>
          </Link>
          <Link to="/about" className="custom-button">
            <span className="icon">
              <img src={aboutme} alt="About" />
            </span>
            <span className="text">About Me</span>
          </Link>
          <Link to="/showcase" className="custom-button">
            <span className="icon">
              <img src={showcase} alt="Showcase" />
            </span>
            <span className="text">Showcase</span>
          </Link>
          <Link to="/contact" className="custom-button">
            <span className="icon">
              <img src={contact} alt="Contact" />
            </span>
            <span className="text">Contact</span>
          </Link>
          <Link to="/skills" className="custom-button">
            <span className="icon">
              <img src={skills} alt="Skills" />
            </span>
            <span className="text">Skills</span>
          </Link>
          <Link to="/tour" className="custom-button">
            <span className="icon">
              <img src={tour} alt="Travels" />
            </span>
            <span className="text">Travels</span>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
