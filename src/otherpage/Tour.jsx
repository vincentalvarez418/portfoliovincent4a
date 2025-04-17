import React, { useEffect, useState } from "react";
import "./Tour.css";

import day1 from "../assets/Tour/day1.jpg";
import day2 from "../assets/Tour/day2.jpg";
import day3 from "../assets/Tour/day3.jpg";
import day4 from "../assets/Tour/day4.jpg";
import day5 from "../assets/Tour/day5.jpg";
import day6 from "../assets/Tour/day6.jpg";


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
      title: "Introduction: Manila",
      image: day1,
      description: "Explore the heart of the Philippines with its rich culture and energy.",
    },
    {
      title: "City of Bays: Subic Bay",
      image: day2,
      description: "A coastal escape known for beaches, water sports, and sea breeze.",
    },
    {
      title: "Time Vault: National Museum",
      image: day3,
      description: "Discover Philippine history, art, and natural heritage in one place.",
    },
    {
      title: "Robotic Solutions: Hytec PH",
      image: day4,
      description: "Get inspired by innovation at one of the country’s tech hubs.",
    },
    {
      title: "Speed of Manila: LRT",
      image: day5,
      description: "Experience the hustle of urban transit aboard the LRT system.",
    },
    {
      title: "Strawberry City: Baguio",
      image: day6,
      description: "Chill in the cool highlands and enjoy fresh strawberries and pine trees.",
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
