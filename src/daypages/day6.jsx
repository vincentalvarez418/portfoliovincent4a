import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import day61 from "../assets/dayimages/6-1.jpg";
import day62 from "../assets/dayimages/6-2.jpg";
import day63 from "../assets/dayimages/6-3.jpg";
import day64 from "../assets/dayimages/6-4.jpg";
import day65 from "../assets/dayimages/6-5.jpg";
import { Link } from "react-router-dom";
import day66 from "../assets/dayimages/6-6.jpg";
import day67 from "../assets/dayimages/6-7.jpg";
import day68 from "../assets/dayimages/6-8.jpg";
import "./day.css";
import FadeInWrapper from "../otherpage/FadeInWrapper"; // Assuming you have this component available.

const Day6 = () => {
  return (
    <div className="day-container">
      <div className="day-page">
        <FadeInWrapper>
          <div className="day-content">
            <div className="text-right">
              <h1>Strawberry City: Baguio</h1>
              <hr />
              <br />
              <p>
                Baguio, often called the "Summer Capital of the Philippines," is a scenic city nestled in the mountains of the Cordillera region. Known for its cool climate and lush landscapes, Baguio attracts tourists year-round. The city is famous for its vibrant strawberry farming industry, which is why it is lovingly called "Strawberry City." This nickname highlights the city's long history of strawberry cultivation, especially in nearby La Trinidad, where the fields bloom with strawberries in vibrant hues during the harvest season.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day61} alt="Baguio City Scenic View" effect="blur" />
              <p className="image-description">
                The image shows a picturesque view of Baguio City, with the majestic mountains forming a backdrop to the sprawling urban houses nestled on the hillside. The vibrant greenery of the mountains contrasts beautifully with the rooftops of the homes, which are scattered across the terrain. The city’s unique blend of urban and natural landscapes is evident, as the houses are perched in varying elevations, showcasing the natural topography of the area. The cool mist and fresh air from the mountains further enhance the scenic beauty, encapsulating the essence of Baguio as a city surrounded by nature yet filled with the bustling energy of urban life.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day62} alt="Indigenous Tribes of Baguio" effect="blur" />
              <p className="image-description">
                The image showcases a vibrant display of indigenous tribes in Baguio, with local tribes offering an immersive cultural experience for tourists. The scene features tribal members dressed in traditional attire, demonstrating their customs and practices. In the foreground, horses are prominently featured as a major tourist attraction, allowing visitors to interact with them, take rides, and learn about their significance in the tribe's heritage. The horses, often used in the region for transportation and ceremonial purposes, add to the charm of the cultural showcase.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day63} alt="Loyalty Statue at PMA" effect="blur" />
              <p className="image-description">
                The image features the Loyalty Statue located within the Philippine Military Academy (PMA) in Baguio City. The statue is a significant landmark, symbolizing the values of honor, duty, and loyalty upheld by the academy.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day64} alt="Military Aircrafts at PMA" effect="blur" />
              <p className="image-description">
                The image showcases various military airplanes displayed within the Philippine Military Academy (PMA) camp in Baguio City. These aircraft are part of an exhibit that highlights the history and development of the Philippine aviation industry. The planes, often retired or decommissioned, are displayed as a tribute to the country’s aviation milestones.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day65} alt="Melchor Hall at PMA" effect="blur" />
              <p className="image-description">
                The image presents a frontal view of Melchor Hall, the oldest academic building at the Philippine Military Academy (PMA) in Baguio City. Completed in 1949, it was designated a National Historical Landmark by the National Historical Commission of the Philippines on May 21, 2019. The building's façade is characterized by its clean white walls, symmetrical design, and classical architectural elements. A prominent feature is the inscription "PHILIPPINE MILITARY ACADEMY" above the entrance, flanked by sculpted figures representing the academy's values.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day66} alt="Panoramic View from Bell Tower" effect="blur" />
              <p className="image-description">
                The image shows a stunning panoramic view from the Bell Tower in Baguio City, showcasing the unique blend of urban housing and the surrounding mountainous landscape. From this vantage point, you can see the densely packed houses scattered across the hilly terrain, typical of Baguio's urban sprawl. The vibrant greenery of the mountains contrasts beautifully with the structures below, highlighting the city's position amidst nature. The misty, cool climate often gives the mountains a hazy, serene look, enhancing the view's peaceful and picturesque atmosphere. The Bell Tower itself stands as a historical landmark, adding a cultural touch to the scenic view of Baguio's natural beauty.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day67} alt="Pathway to Bell Tower" effect="blur" />
              <p className="image-description">
                The image shows a view from above the Bell Tower, looking down the pathway that leads visitors to the top. The pathway is lined with steps and flanked by lush greenery, adding to the natural beauty of the area. The climb offers a gradual ascent through the scenic surroundings, with trees and plants adding to the fresh, cool atmosphere typical of Baguio. From this perspective, the pathway appears winding and serene, leading to the tower’s elevated position that offers a sweeping view of the city and the mountains beyond. The perspective emphasizes both the effort of reaching the top and the reward of the breathtaking view that awaits.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day68} alt="Sunrise Over Strawberry Farm" effect="blur" />
              <p className="image-description">
                The image captures the early morning sunrise, casting a warm golden glow over the landscape. The path ahead leads towards the famous strawberry farm in Baguio, with the soft light highlighting the lush, green fields. The atmosphere is calm and peaceful, as the first rays of the sun illuminate the surrounding mountains and valleys. This serene scene reflects the promise of a day filled with the excitement of visiting the strawberry farm, where visitors can enjoy the fresh air, vibrant colors, and the experience of picking strawberries. The sunrise adds a sense of tranquility, setting the perfect mood for a visit to the farm.
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

export default Day6;
