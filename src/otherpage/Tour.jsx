import React, { useState, useEffect } from "react";
import "./Tour.css"; 

function Tour() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`tour-container ${fadeIn ? "fade-in" : ""}`}>
      <h2 className="tour-title">Tour</h2>
      <p className="tour-description">
        Explore the places I have visited and the experiences I have gathered along the way!
      </p>
      
      <div className="tour-list">
        <div className="tour-item">
          <h3 className="tour-location">Placeholder</h3>
          <p className="tour-text">Placeholder.</p>
        </div>

        <div className="tour-item">
          <h3 className="tour-location">Placeholder</h3>
          <p className="tour-text">Placeholder.</p>
        </div>

        <div className="tour-item">
          <h3 className="tour-location">Placeholder</h3>
          <p className="tour-text">Placeholder.</p>
        </div>
      </div>
    </div>
  );
}

export default Tour;
