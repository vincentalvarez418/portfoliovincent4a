import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import day31 from "../assets/dayimages/3-1.jpg";
import day32 from "../assets/dayimages/3-2.jpg";
import day33 from "../assets/dayimages/3-3.jpg";
import { Link } from "react-router-dom";
import day34 from "../assets/dayimages/3-4.jpg";
import day35 from "../assets/dayimages/3-5.jpg";
import day36 from "../assets/dayimages/3-6.jpg";
import day37 from "../assets/dayimages/3-7.jpg";
import day38 from "../assets/dayimages/3-8.jpg";
import "./day.css";

const Day3 = () => {
  return (
    <div className="day-container">
      <div className="day-page">
        <div className="day-content">
          <div className="text-right">
            <h1>Time Vault: Museum</h1>
            <hr />
            <br />
            <p>
              Located right across Quezon Park, the National Museum of the Philippines stands as a gateway to the country’s rich heritage. The museum not only showcases the nation's history but also features the legacy of Manuel L. Quezon, the first President of the Commonwealth of the Philippines. It's a place where art, history, and culture collide, offering an educational journey through time.
            </p>
          </div>
        </div>

        <br /><hr /><br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day31} alt="Museum Entrance" effect="blur" />
            <p className="image-description">
              The grand entrance of the National Museum of the Philippines stands proudly with its towering neoclassical columns and wide stone steps. This majestic structure welcomes visitors with a sense of timeless grandeur, inviting them to explore the rich cultural history housed within.
            </p>
          </div>
        </div>

        <br /><hr /><br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day32} alt="Museum Atrium" effect="blur" />
            <p className="image-description">
              Inside the National Museum, a sleek and modern elevator-like structure rises within the grand atrium. Its glass walls reflect the surrounding architectural details, offering a striking contrast between the museum’s classic design and contemporary touches. It’s a visual symbol of the museum's effort to blend tradition with modernity.
            </p>
          </div>
        </div>

        <br /><hr /><br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day33} alt="Museum Interior" effect="blur" />
            <p className="image-description">
              The interior of the National Museum is a captivating blend of elegance and history. Spacious galleries with high ceilings showcase an array of artistic and cultural exhibits, from historical artifacts to contemporary masterpieces. The space itself serves as a work of art, providing the perfect setting to immerse yourself in the beauty of Philippine culture.
            </p>
          </div>
        </div>

        <br /><hr /><br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day34} alt="Spiral Staircase" effect="blur" />
            <p className="image-description">
              The semi-spiral staircase, seen from above, offers a stunning architectural view. Its elegant curves lead visitors from one level to another, with the sleek design emphasizing both functionality and beauty. This staircase not only provides access to the museum's upper levels but also adds to the grandeur of the building's aesthetic.
            </p>
          </div>
        </div>

        <br /><hr /><br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day35} alt="Quezon Office" effect="blur" />
            <p className="image-description">
              This image showcases the former office of Manuel L. Quezon, the first president of the Commonwealth of the Philippines. Preserved to reflect the era, the office exudes a sense of history, with vintage furniture and carefully curated artifacts that bring you closer to the personal space of a leader who helped shape the nation's future.
            </p>
          </div>
        </div>

        <br /><hr /><br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day36} alt="Flag Pathway" effect="blur" />
            <p className="image-description">
              This image features a scenic pathway lined with multiple flags, likely located near Quezon Park. The flags flutter in the wind, symbolizing the Philippines’ rich history and the strong national pride that resonates throughout the country. It’s a beautiful reminder of the sacrifices made for the nation’s independence and identity.
            </p>
          </div>
        </div>

        <br /><hr /><br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day37} alt="Presidential Car" effect="blur" />
            <p className="image-description">
              This image showcases one of the cars once used by a former president of the Philippines. The classic vehicle stands as a symbol of the country's political history, offering a glimpse into the past and the life of a leader. The elegance and craftsmanship of the car reflect the era's prestige and the status of those who once occupied it.
            </p>
          </div>
        </div>

        <br /><hr /><br />

        <div className="day-content">
          <div className="image-block">
            <LazyLoadImage src={day38} alt="Sperm Whale Skeleton" effect="blur" />
            <p className="image-description">
              This image features the skeleton of a sperm whale, displayed prominently inside the museum. The massive structure serves as a fascinating reminder of the ocean's vast and mysterious wildlife. With its sheer size, the skeleton captivates visitors and sparks curiosity about the natural world, leaving an indelible impression on all who witness it.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
                <Link to="/tour">
                  <button className="return-button">RETURN</button>
                </Link>
              </div>
              
    </div>
  );
};

export default Day3;
