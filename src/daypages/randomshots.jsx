import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import FadeInWrapper from "../otherpage/FadeInWrapper";

import "./randomshots.css";

import randomshot1 from "../assets/dayimages/randomshots/randomshot (1).jpg";
import randomshot2 from "../assets/dayimages/randomshots/randomshot (2).jpg";
import randomshot3 from "../assets/dayimages/randomshots/randomshot (3).jpg";
import randomshot4 from "../assets/dayimages/randomshots/randomshot (4).jpg";
import randomshot5 from "../assets/dayimages/randomshots/randomshot (5).jpg";
import randomshot6 from "../assets/dayimages/randomshots/randomshot (6).jpg";
import randomshot7 from "../assets/dayimages/randomshots/randomshot (7).jpg";
import randomshot8 from "../assets/dayimages/randomshots/randomshot (8).jpg";
import randomshot9 from "../assets/dayimages/randomshots/randomshot (9).jpg";
import randomshot10 from "../assets/dayimages/randomshots/randomshot (10).jpg";
import randomshot11 from "../assets/dayimages/randomshots/randomshot (11).jpg";
import randomshot12 from "../assets/dayimages/randomshots/randomshot (12).jpg";
import randomshot13 from "../assets/dayimages/randomshots/randomshot (13).jpg";
import randomshot14 from "../assets/dayimages/randomshots/randomshot (14).jpg";
import randomshot15 from "../assets/dayimages/randomshots/randomshot (15).jpg";
import randomshot16 from "../assets/dayimages/randomshots/randomshot (16).jpg";
import randomshot17 from "../assets/dayimages/randomshots/randomshot (17).jpg";
import randomshot18 from "../assets/dayimages/randomshots/randomshot (18).jpg";
import randomshot19 from "../assets/dayimages/randomshots/randomshot (19).jpg";
import randomshot20 from "../assets/dayimages/randomshots/randomshot (20).jpg";
import randomshot21 from "../assets/dayimages/randomshots/randomshot (21).jpg";
import randomshot22 from "../assets/dayimages/randomshots/randomshot (22).jpg";
import randomshot23 from "../assets/dayimages/randomshots/randomshot (23).jpg";
import randomshot24 from "../assets/dayimages/randomshots/randomshot (24).jpg";
import randomshot25 from "../assets/dayimages/randomshots/randomshot (25).jpg";
import randomshot26 from "../assets/dayimages/randomshots/randomshot (26).jpg";
import randomshot27 from "../assets/dayimages/randomshots/randomshot (27).jpg";
import randomshot28 from "../assets/dayimages/randomshots/randomshot (28).jpg";
import randomshot29 from "../assets/dayimages/randomshots/randomshot (29).jpg";
import randomshot30 from "../assets/dayimages/randomshots/randomshot (30).jpg";
import randomshot31 from "../assets/dayimages/randomshots/randomshot (31).jpg";
import randomshot32 from "../assets/dayimages/randomshots/randomshot (32).jpg";
import randomshot33 from "../assets/dayimages/randomshots/randomshot (33).jpg";
import randomshot34 from "../assets/dayimages/randomshots/randomshot (34).jpg";
import randomshot35 from "../assets/dayimages/randomshots/randomshot (35).jpg";
import randomshot36 from "../assets/dayimages/randomshots/randomshot (36).jpg";
import randomshot37 from "../assets/dayimages/randomshots/randomshot (37).jpg";
import randomshot38 from "../assets/dayimages/randomshots/randomshot (38).jpg";
import randomshot39 from "../assets/dayimages/randomshots/randomshot (39).jpg";
import randomshot40 from "../assets/dayimages/randomshots/randomshot (40).jpg";
import randomshot41 from "../assets/dayimages/randomshots/randomshot (41).jpg";
import randomshot42 from "../assets/dayimages/randomshots/randomshot (42).jpg";
import randomshot43 from "../assets/dayimages/randomshots/randomshot (43).jpg";
import randomshot44 from "../assets/dayimages/randomshots/randomshot (44).jpg";
import randomshot45 from "../assets/dayimages/randomshots/randomshot (45).jpg";
import randomshot46 from "../assets/dayimages/randomshots/randomshot (46).jpg";
import randomshot47 from "../assets/dayimages/randomshots/randomshot (47).jpg";
import randomshot48 from "../assets/dayimages/randomshots/randomshot (48).jpg";
import randomshot49 from "../assets/dayimages/randomshots/randomshot (49).jpg";
import randomshot50 from "../assets/dayimages/randomshots/randomshot (50).jpg";
import randomshot51 from "../assets/dayimages/randomshots/randomshot (51).jpg";
import randomshot52 from "../assets/dayimages/randomshots/randomshot (52).jpg";
import randomshot53 from "../assets/dayimages/randomshots/randomshot (53).jpg";
import randomshot54 from "../assets/dayimages/randomshots/randomshot (54).jpg";
import randomshot55 from "../assets/dayimages/randomshots/randomshot (55).jpg";
import randomshot56 from "../assets/dayimages/randomshots/randomshot (56).jpg";
import randomshot57 from "../assets/dayimages/randomshots/randomshot (57).jpg";

const imageData = [
  { src: randomshot1, alt: "Random Shot 1" },
  { src: randomshot2, alt: "Random Shot 2" },
  { src: randomshot3, alt: "Random Shot 3" },
  { src: randomshot4, alt: "Random Shot 4" },
  { src: randomshot5, alt: "Random Shot 5" },
  { src: randomshot6, alt: "Random Shot 6" },
  { src: randomshot7, alt: "Random Shot 7" },
  { src: randomshot8, alt: "Random Shot 8" },
  { src: randomshot9, alt: "Random Shot 9" },
  { src: randomshot10, alt: "Random Shot 10" },
  { src: randomshot11, alt: "Random Shot 11" },
  { src: randomshot12, alt: "Random Shot 12" },
  { src: randomshot13, alt: "Random Shot 13" },
  { src: randomshot14, alt: "Random Shot 14" },
  { src: randomshot15, alt: "Random Shot 15" },
  { src: randomshot16, alt: "Random Shot 16" },
  { src: randomshot17, alt: "Random Shot 17" },
  { src: randomshot18, alt: "Random Shot 18" },
  { src: randomshot19, alt: "Random Shot 19" },
  { src: randomshot20, alt: "Random Shot 20" },
  { src: randomshot21, alt: "Random Shot 21" },
  { src: randomshot22, alt: "Random Shot 22" },
  { src: randomshot23, alt: "Random Shot 23" },
  { src: randomshot24, alt: "Random Shot 24" },
  { src: randomshot25, alt: "Random Shot 25" },
  { src: randomshot26, alt: "Random Shot 26" },
  { src: randomshot27, alt: "Random Shot 27" },
  { src: randomshot28, alt: "Random Shot 28" },
  { src: randomshot29, alt: "Random Shot 29" },
  { src: randomshot30, alt: "Random Shot 30" },
  { src: randomshot31, alt: "Random Shot 31" },
  { src: randomshot32, alt: "Random Shot 32" },
  { src: randomshot33, alt: "Random Shot 33" },
  { src: randomshot34, alt: "Random Shot 34" },
  { src: randomshot35, alt: "Random Shot 35" },
  { src: randomshot36, alt: "Random Shot 36" },
  { src: randomshot37, alt: "Random Shot 37" },
  { src: randomshot38, alt: "Random Shot 38" },
  { src: randomshot39, alt: "Random Shot 39" },
  { src: randomshot40, alt: "Random Shot 40" },
  { src: randomshot41, alt: "Random Shot 41" },
  { src: randomshot42, alt: "Random Shot 42" },
  { src: randomshot43, alt: "Random Shot 43" },
  { src: randomshot44, alt: "Random Shot 44" },
  { src: randomshot45, alt: "Random Shot 45" },
  { src: randomshot46, alt: "Random Shot 46" },
  { src: randomshot47, alt: "Random Shot 47" },
  { src: randomshot48, alt: "Random Shot 48" },
  { src: randomshot49, alt: "Random Shot 49" },
  { src: randomshot50, alt: "Random Shot 50" },
  { src: randomshot51, alt: "Random Shot 51" },
  { src: randomshot52, alt: "Random Shot 52" },
  { src: randomshot53, alt: "Random Shot 53" },
  { src: randomshot54, alt: "Random Shot 54" },
  { src: randomshot55, alt: "Random Shot 55" },
  { src: randomshot56, alt: "Random Shot 56" },
  { src: randomshot57, alt: "Random Shot 57" },
];

const RandomShots = () => {
  return (
    <div className="day-container">
      <div className="day-page">
        <FadeInWrapper>
          <div className="day-content">
            <h1>Random Shots</h1>
            <hr />
            <p>
            Our tour may have come to an end, but the memories are forever preserved in these random shots from throughout the trip. These pictures, taken without a particular order or plan, capture the spontaneous moments and hidden gems that often go unnoticed—the quiet corners of bustling cities, candid moments with fellow travelers, and the fleeting beauty of places we passed through.
            </p>
          </div>
        </FadeInWrapper>

        {/* Grid of images */}
        <div className="image-grid">
          {imageData.map((image, index) => (
            <FadeInWrapper key={index}>
              <div className="image-tile">
                <LazyLoadImage
                  src={image.src}
                  alt={image.alt}
                  effect="blur"
                  preload="true"
                />
              </div>
            </FadeInWrapper>
          ))}
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

export default RandomShots;
