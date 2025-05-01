import React, { useEffect, useState } from "react";
import { CalendarDays } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import "./Tour.css";
import FadeInWrapper from './FadeInWrapper';

import day1Image from "../assets/dayimagespromo/1.jpg";
import day2Image from "../assets/dayimagespromo/2.jpg";
import day3Image from "../assets/dayimagespromo/3.jpg";
import day4Image from "../assets/dayimagespromo/4.jpg";
import day5Image from "../assets/dayimagespromo/5.jpg";
import day6Image from "../assets/dayimagespromo/6.jpg";
import day7Image from "../assets/dayimagespromo/7.jpg";
import randomshots from "../assets/dayimagespromo/randomshots.jpg";
import bg from "../assets/dayimagespromo/BG.jpg";

function Tour() {
  const [fadeIn, setFadeIn] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const navigate = useNavigate();

  const toggleZoom = () => setZoomed(!zoomed);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const tours = [
    { title: "Day 1: Welcome Manila", description: "Explore the heart of the Philippines.", day: "1", image: day1Image },
    { title: "Day 2: City of Bays - Subic Bay", description: "Coastal escape with beaches.", day: "2", image: day2Image },
    { title: "Day 3: Time Vault - National Museum", description: "Philippine history and heritage.", day: "3", image: day3Image },
    { title: "Day 4: Robotic Solutions - Hytec PH", description: "Tech innovation hub.", day: "4", image: day4Image },
    { title: "Day 5: Speed of Manila - LRT", description: "Urban transit experience.", day: "5", image: day5Image },
    { title: "Day 6: Strawberry City - Baguio", description: "Highland strawberries and pine.", day: "6", image: day6Image },
    { title: "Day 7: Epilogue", description: "Relax and Explore before heading home.", day: "7", image: day7Image },
    { title: "Day 8: Random Shots", description: "Snapshots and memories from the journey.", day: "8", image: randomshots } 
  ];

  const getDateString = (dayOffset) => {
    const baseDate = new Date(2025, 3, 7); 
    baseDate.setDate(baseDate.getDate() + dayOffset);
    return baseDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleCardClick = (day) => navigate(day === "8" ? "/randomshots" : `/day${day}`);

  return (
    <div className={`tour-container ${fadeIn ? "fade-in" : ""}`}>
      <h1 className="my-tours-name">TOUR</h1>

      <img
        src={bg}
        alt="Background"
        className={`bg-image ${zoomed ? "zoomed" : ""}`}
        onClick={toggleZoom}
      />

      <div className="separator">
        <hr className="line" />
        <hr className="line" />
      </div>

      <div className="tour-grid">
        {tours.map((tour, index) => (
          <FadeInWrapper key={index}>
            <div className="tour-card-wrapper">
              <div className="tour-title-container">
                <h3 className="tour-title">{tour.title}</h3>
              </div>
              <div className="tour-card">
                <div className="tour-content">
                  <div className="tour-image-container">
                    <img
                      src={tour.image}
                      alt={`tour-${index}`}
                      className="tour-image"
                      loading="lazy"
                      style={{
                        filter: "blur(10px)",
                        transition: "filter 0.3s ease-out"
                      }}
                      onLoad={(e) => { e.target.style.filter = "none"; }}
                    />
                  </div>
                  <p className="tour-description">{tour.description}</p>

                  <p
                    className="tour-date text-sm text-gray-700 dark:text-gray-300"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <CalendarDays size={18} className="text-gray-600 dark:text-gray-300" />
                    {tour.day === "8" ? "April 7 - April 14, 2025" : getDateString(index)}
                  </p>

                  <button
                    className="visit-button"
                    onClick={() => handleCardClick(tour.day)}
                  >
                    VISIT
                  </button>
                </div>
              </div>
            </div>
          </FadeInWrapper>
        ))}
      </div>
    </div>
  );
}

export default Tour;
