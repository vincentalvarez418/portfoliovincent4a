import React from "react";
import "./Tour.css"; 

function Tour() {
  return (
    <div className="tour-container">
      <h2>My Travels</h2>
      <p>Explore the places I have visited and the experiences I have gathered along the way!</p>
      
      <div className="tour-list">
        <div className="tour-item">
          <h3>Paris, France</h3>
          <p>A beautiful city with stunning architecture and delicious food.</p>
        </div>

        <div className="tour-item">
          <h3>Kyoto, Japan</h3>
          <p>Rich in history, temples, and breathtaking cherry blossoms.</p>
        </div>

        <div className="tour-item">
          <h3>New York, USA</h3>
          <p>The city that never sleeps, full of energy and iconic landmarks.</p>
        </div>
      </div>
    </div>
  );
}

export default Tour;
