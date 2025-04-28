import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(true);

  const handleGetStarted = () => {
    setShowImage(false);
    document.querySelector('.hero-container').classList.add('fade');
    document.body.classList.add('hero-active');
    setTimeout(() => {
      navigate("/about", { state: { fromHero: true } });
      document.body.classList.remove('hero-active');
    }, 0);
};


  return (
    <div className="hero-container">
      <div className={`hero-image ${showImage ? "visible" : "hidden"}`}></div>
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-title-container">
            <h3 className="hero-subtitle">THE DAWN OF</h3>
            <h1 className="hero-title">
              <span className="glitch">A NEW ERA</span>
            </h1>
            <h5 className="hero-tagline">
            <span class="angle-brackets">&lt;&gt;</span>
            Code. Create. Innovate.
            <span class="angle-brackets">&lt;/&gt;</span>
          </h5>

          </div>
          <button className="hero-button" onClick={handleGetStarted}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
