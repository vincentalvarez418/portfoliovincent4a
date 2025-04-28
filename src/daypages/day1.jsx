import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"; 
import day11 from "../assets/dayimages/1-1.jpg";
import day12 from "../assets/dayimages/1-2.jpg";
import day13 from "../assets/dayimages/1-3.jpg";
import day14 from "../assets/dayimages/1-4.jpg";
import day15 from "../assets/dayimages/1-5.jpg";
import day16 from "../assets/dayimages/1-6.jpg";
import day17 from "../assets/dayimages/1-7.jpg";
import { Link } from "react-router-dom";
import day18 from "../assets/dayimages/1-8.jpg";
import "./day.css";
import FadeInWrapper from "../otherpage/FadeInWrapper";

const Day1 = () => {
  return (
    <div className="day-container">
      <div className="day-page">
        <FadeInWrapper>
          <div className="day-content">
            <div className="text-right">
              <h1>Introduction: Manila</h1>
              <hr />
              <br />
              <p>
                Manila, the capital of the Philippines, is a city that blends old-world charm with modern-day vibrancy. Sitting on the west coast of Luzon, it’s not just a bustling urban center but a place filled with stories from the past. Walking through Manila, you’ll find a mix of Spanish-era buildings, high-rise buildings, and colorful street markets, creating a unique atmosphere. The city is constantly evolving, but it never loses touch with its historical roots.
              </p>
              <p>
                With its rich history, diverse culture, and stunning landmarks, Manila offers something for everyone. Whether you're strolling along the beautiful Manila Baywalk or exploring the many museums, historical sites, and lively streets, the city promises to captivate your senses. Here’s a glimpse of what you can experience in the bustling heart of the Philippines.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br />
        <br />
        <br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage
                src={day11}
                alt="City Exploration"
                effect="blur" 
                height="auto"
                width="100%" 
              />
              <p className="image-description">
                The image captures a dynamic view of Manila's streets, as seen from the perspective of a street-level vehicle. The scene is filled with the energy of the city, with the bustling traffic of jeepneys, motorcycles, and cars weaving through the roads. The streets are lined with a mix of old and new buildings, showcasing the contrast between Manila's rich colonial past and its modern urban growth. The juxtaposition of historical structures and contemporary high-rises reflects the city's evolving identity.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br />
        <hr />
        <br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage
                src={day12}
                alt="City Streets"
                effect="blur"
                height="auto"
                width="100%"
              />
              <p className="image-description">
                A view of the city from the streets, featuring lush trees and towering buildings. The scene captures the contrast between the greenery and the high-rise structures, showcasing the blend of nature and urban development in Manila. The trees along the sidewalks offer a breath of fresh air, while the modern skyscrapers provide a glimpse of the city’s thriving economy. Manila’s urban landscape is a beautiful blend of nature and progress, making it a truly unique city to explore.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br />
        <hr />
        <br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage
                src={day13}
                alt="Rizal Park"
                effect="blur"
                height="auto"
                width="100%"
              />
              <p className="image-description">
                A peaceful view of <strong>Rizal Park</strong>, one of Manila's most iconic landmarks. The image showcases the expansive green spaces, well-manicured gardens, and towering monuments dedicated to the Philippine national hero, José Rizal. The park is a blend of nature and history, offering a serene escape in the heart of the city. It serves as a quiet refuge from the hustle and bustle of Manila, where both locals and tourists come to relax, reflect, and appreciate the beauty of the surroundings.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br />
        <hr />
        <br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage
                src={day14}
                alt="Fort Santiago Gate Entrance"
                effect="blur"
                height="auto"
                width="100%"
              />
              <p className="image-description">
                The image shows the grand entrance to <strong>Fort Santiago</strong>, a historic site in Manila. The gate, with its strong stone walls and old-world charm, stands as a reminder of the country’s colonial past. The fort, once a military stronghold, now offers a glimpse into Philippine history, with its preserved architecture and surrounding gardens. Walking through the gates of Fort Santiago is like stepping back in time, where the stories of the country’s struggle for independence come to life.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br />
        <hr />
        <br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage
                src={day15}
                alt="View of Manila from Fort Santiago"
                effect="blur"
                height="auto"
                width="100%"
              />
              <p className="image-description">
                A beautiful view of the city’s skyline, taken from inside <strong>Fort Santiago</strong>. The image captures the contrast between the historic fort and the modern buildings of Manila, with a serene body of water in the foreground, adding to the peaceful ambiance of the scene. The tall buildings rise in the distance, showcasing Manila's modern urban landscape. The contrast of the old and new is a testament to the country’s resilience and rapid growth over the years.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br />
        <hr />
        <br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage
                src={day16}
                alt="Underground Tunnels and Torture Chambers"
                effect="blur"
                height="auto"
                width="100%"
              />
              <p className="image-description">
                This image takes you deep inside Fort Santiago’s underground tunnels, revealing remnants of a dark and painful past. The tunnels, once used for confinement and torture during the colonial period, stand as a stark reminder of the struggles endured by countless prisoners. The stone walls echo the painful history, showing the harsh reality of the struggles faced by Filipinos under foreign rule. These tunnels are a somber yet important part of the Philippines' history, highlighting the sacrifices made for freedom.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br />
        <hr />
        <br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage
                src={day17}
                alt="Globe at MOA"
                effect="blur"
                height="auto"
                width="100%"
              />
              <p className="image-description">
                The <strong>Globe at Mall of Asia (MOA)</strong> is an iconic landmark in Pasay City, Manila. This large, rotating globe is one of the most recognizable structures in the area, often symbolizing the global connection of the Philippines to the rest of the world. The vibrant colors and unique design make it a perfect spot for photos and a popular attraction for locals and tourists alike. Located near Manila Bay, it offers a modern and dynamic contrast to the historical sites of the city.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br />
        <hr />
        <br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage
                src={day18}
                alt="Ferris Wheel near MOA"
                effect="blur"
                height="auto"
                width="100%"
              />
              <p className="image-description">
                This image shows the <strong>Ferris Wheel near Mall of Asia</strong>, one of the largest in the country. The Ferris wheel stands tall against the Manila skyline and offers breathtaking views of Manila Bay. It is a popular attraction for tourists, providing a unique experience of seeing the city from above, especially during sunset when the sky reflects vibrant colors over the water. The Ferris wheel has become a symbol of leisure and joy for both visitors and locals.
              </p>
            </div>
          </div>
        </FadeInWrapper>
      </div>

      <div className="text-center">
        <Link to="/tour">
          <button className="return-button">RETURN</button>
        </Link>
      </div>
    </div>
  );
};

export default Day1;
