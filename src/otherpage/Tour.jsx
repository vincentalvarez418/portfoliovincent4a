import React, { useEffect, useState } from "react";
import { CalendarDays } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import "./Tour.css";
import FadeInWrapper from './FadeInWrapper';
import day1Image1 from "../assets/dayimagespromo/1-1.jpg";
import day1Image2 from "../assets/dayimagespromo/1-2.jpg";
import day1Image3 from "../assets/dayimagespromo/1-3.jpg";
import day2Image1 from "../assets/dayimagespromo/2-1.jpg";
import day2Image2 from "../assets/dayimagespromo/2-2.jpg";
import day2Image3 from "../assets/dayimagespromo/2-3.jpg";
import day3Image1 from "../assets/dayimagespromo/3-1.jpg";
import day3Image2 from "../assets/dayimagespromo/3-2.jpg";
import day3Image3 from "../assets/dayimagespromo/3-3.jpg";
import day4Image1 from "../assets/dayimagespromo/4-1.jpg";
import day4Image2 from "../assets/dayimagespromo/4-2.jpg";
import day4Image3 from "../assets/dayimagespromo/4-3.jpg";
import day5Image1 from "../assets/dayimagespromo/5-1.jpg";
import day5Image2 from "../assets/dayimagespromo/5-2.jpg";
import day5Image3 from "../assets/dayimagespromo/5-3.jpg";
import day6Image1 from "../assets/dayimagespromo/6-1.jpg";
import day6Image2 from "../assets/dayimagespromo/6-2.jpg";
import day6Image3 from "../assets/dayimagespromo/6-3.jpg";
import day7Image1 from "../assets/dayimagespromo/7-1.jpg";
import day7Image2 from "../assets/dayimagespromo/7-2.jpg";
import day7Image3 from "../assets/dayimagespromo/7-3.jpg";

import bg from "../assets/dayimagespromo/BG.jpg";

function Tour() {
  const [fadeIn, setFadeIn] = useState(false);
  const [imageSets, setImageSets] = useState([]);
  const [currentImageIndexes, setCurrentImageIndexes] = useState(Array(7).fill(0));
  const [startTouch, setStartTouch] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingClass, setDraggingClass] = useState("");

  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setImageSets([
      [day1Image1, day1Image2, day1Image3],
      [day2Image1, day2Image2, day2Image3],
      [day3Image1, day3Image2, day3Image3],
      [day4Image1, day4Image2, day4Image3],
      [day5Image1, day5Image2, day5Image3],
      [day6Image1, day6Image2, day6Image3],
      [day7Image1, day7Image2, day7Image3],
    ]);

    const preloadImages = () => {
      const allImages = [
        day1Image1, day1Image2, day1Image3,
        day2Image1, day2Image2, day2Image3,
        day3Image1, day3Image2, day3Image3,
        day4Image1, day4Image2, day4Image3,
        day5Image1, day5Image2, day5Image3,
        day6Image1, day6Image2, day6Image3
      ];

      allImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();

    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const handleSwipeMove = (e) => {
    if (startTouch === null || activeIndex === null) return;

    const currentTouch = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = startTouch - currentTouch;

    if (Math.abs(diff) > 50) {
      const direction = diff > 0 ? 1 : -1;
      handleSwipe(direction, activeIndex);
      setStartTouch(null);
      setActiveIndex(null);
      if (isDragging) setIsDragging(false);
      setDraggingClass("");
    }
  };

  const handleSwipeEnd = () => {
    setStartTouch(null);
    setActiveIndex(null);
    if (isDragging) {
      setIsDragging(false);
      setDraggingClass("");
    }
  };

  const handleSwipeStart = (e, index) => {
    const initialPosition = e.touches ? e.touches[0].clientX : e.clientX;
    setStartTouch(initialPosition);
    setActiveIndex(index);
    setDraggingClass("grabbing");
    if (e.type === "mousedown") setIsDragging(true);
  };

  const handleSwipe = (direction, index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const nextIndex = (newIndexes[index] + direction + imageSets[index].length) % imageSets[index].length;
      newIndexes[index] = nextIndex;
      return newIndexes;
    });
  };

  const tours = [
    { title: "Introduction: Manila", description: "Explore the heart of the Philippines.", day: "1" },
    { title: "City of Bays: Subic Bay", description: "Coastal escape with beaches.", day: "2" },
    { title: "Time Vault: National Museum", description: "Philippine history and heritage.", day: "3" },
    { title: "Robotic Solutions: Hytec PH", description: "Tech innovation hub.", day: "4" },
    { title: "Speed of Manila: LRT", description: "Urban transit experience.", day: "5" },
    { title: "Strawberry City: Baguio", description: "Highland strawberries and pine.", day: "6" },
    { title: "Free Day: Baguio", description: "Relax and Explore before heading home.", day: "7" },
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
  

  const handleCardClick = (day) => {
    navigate(`/day${day}`);
  };

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
                  <div
                    className={`tour-image-container ${draggingClass}`}
                    onTouchStart={(e) => handleSwipeStart(e, index)}
                    onTouchMove={handleSwipeMove}
                    onTouchEnd={handleSwipeEnd}
                    onMouseDown={(e) => handleSwipeStart(e, index)}
                    onMouseMove={isDragging ? handleSwipeMove : null}
                    onMouseUp={handleSwipeEnd}
                    onMouseLeave={handleSwipeEnd}
                  >
                    {imageSets[index] && imageSets[index][currentImageIndexes[index]] && (
                      <img
                        key={currentImageIndexes[index]}
                        src={imageSets[index][currentImageIndexes[index]]}
                        alt={`tour-${index}`}
                        className="tour-image"
                        loading="lazy"
                        style={{
                          filter: "blur(10px)",
                          transition: "filter 0.3s ease-out",
                        }}
                        onLoad={(e) => {
                          e.target.style.filter = "none";
                        }}
                      />
                    )}
                  </div>
                  <p className="tour-description">{tour.description}</p>
                  <p
                    className="tour-date text-sm text-gray-700 dark:text-gray-300"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <CalendarDays size={18} className="text-gray-600 dark:text-gray-300" />
                    {getDateString(index)}
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
