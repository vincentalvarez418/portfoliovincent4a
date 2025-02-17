import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/about", { state: { fromHero: true } });
  };

  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            The rise of a new <span className="glitch">developer</span>.
          </h1>
          <p className="hero-subtitle">Learn. Master. Conquer.</p>
          <button className="hero-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
