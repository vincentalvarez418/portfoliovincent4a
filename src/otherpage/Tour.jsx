import React, { useEffect, useState } from "react";
import "./Tour.css";

function Tour() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50); 

    return () => clearTimeout(timer);
  }, []);

  const tours = [
    {
      title: "Destination 1",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsy6PnfCkBbLtFhNwbDDACYN1_sQFVhWZoQ&s",
      description: "Coming soon!",
    },
    {
      title: "Destination 2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsy6PnfCkBbLtFhNwbDDACYN1_sQFVhWZoQ&s",
      description: "Coming soon!",
    },
    {
      title: "Destination 3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsy6PnfCkBbLtFhNwbDDACYN1_sQFVhWZoQ&s",
      description: "Coming soon!",
    },
    {
      title: "Destination 4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsy6PnfCkBbLtFhNwbDDACYN1_sQFVhWZoQ&s",
      description: "Coming soon!",
    },
    {
      title: "Destination 5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsy6PnfCkBbLtFhNwbDDACYN1_sQFVhWZoQ&s",
      description: "Coming soon!",
    },
    {
      title: "Destination 6",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsy6PnfCkBbLtFhNwbDDACYN1_sQFVhWZoQ&s",
      description: "Coming soon!",
    },
    {
      title: "Destination 7",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsy6PnfCkBbLtFhNwbDDACYN1_sQFVhWZoQ&s",
      description: "Coming soon!",
    },
  ];

  return (
    <div className={`tour-container ${fadeIn ? "fade-in" : ""}`}>
      <br />
      <h1 className="my-tours-name">TOUR OVERVIEW</h1>
      <div className="separator">
        <hr className="line" />
        <hr className="line" />
      </div>
      <div className="tour-grid">
        {tours.map((tour, index) => (
          <div key={index} className="tour-card-wrapper">
            <div className="tour-title-container">
              <h3 className="tour-title">{tour.title}</h3>
            </div>
            <div className="tour-card">
              <div className="tour-content">
                <div className="tour-image-container">
                  <img src={tour.image} alt={tour.title} className="tour-image" />
                </div>
                <p className="tour-description">{tour.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tour;
