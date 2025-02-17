import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const [loading, setLoading] = useState(true); // Manage loading state
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/about");
  };

  useEffect(() => {
    // Simulate loading state for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className="hero-container">
      {/* Show loading screen until loading is false */}
      {loading ? (
        <div className="loading-screen">
          {/* Example loading animation */}
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          {/* Main content */}
          <div className="hero-section"></div>
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
          <div className="hero-section"></div>
        </>
      )}
    </div>
  );
};

export default Hero;
