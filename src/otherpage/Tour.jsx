import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tour.css";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes(prev =>
        prev.map((index, i) => {
          const nextIndex = (index + 1) % imageSets[i]?.length;
          return imageSets[i] && imageSets[i][nextIndex] ? nextIndex : index;
        })
      );
    }, 3000); 
    return () => clearInterval(interval);
  }, [imageSets]);

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
      <br />
      <h1 className="my-tours-name">TOUR</h1>
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
                  {imageSets[index] && imageSets[index][currentImageIndexes[index]] && (
                    <img
                      key={currentImageIndexes[index]}
                      src={imageSets[index][currentImageIndexes[index]]}
                      alt={`tour-${index}`}
                      className="tour-image"
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
        ))}
      </div>
    </div>
  );
}

export default Tour;
