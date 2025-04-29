import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tour.css";
import FadeInWrapper from './FadeInWrapper';

const loadImagesForDay = async (day) => {
  const images = [];
  for (let i = 1; i <= 8; i++) {
    try {
      const image = await import(`../assets/dayimagespromo/${day}-${i}.jpg`);
      images.push(image.default);
    } catch (error) {
      console.error(`Image for day ${day}-${i} not found, skipping.`);
    }
  }
  return images;
};

function Tour() {
  const [fadeIn, setFadeIn] = useState(false);
  const [imageSets, setImageSets] = useState([]);
  const [currentImageIndexes, setCurrentImageIndexes] = useState(Array(6).fill(0));
  const [startTouch, setStartTouch] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingClass, setDraggingClass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all([1, 2, 3, 4, 5, 6].map(loadImagesForDay));
      setImageSets(images);
    };

    loadImages();
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
  ];

  const handleCardClick = (day) => {
    navigate(`/day${day}`);
  };

  return (
    <div className={`tour-container ${fadeIn ? "fade-in" : ""}`}>
      <h1 className="my-tours-name">TOUR</h1>
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
                        loading="lazy" // Enable lazy loading
                        style={{
                          filter: "blur(10px)",
                          transition: "filter 0.3s ease-out",
                        }}
                        onLoad={(e) => {
                          e.target.style.filter = "none"; // Remove blur once the image has loaded
                        }}
                      />
                    )}
                  </div>
                  <p className="tour-description">{tour.description}</p>
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
