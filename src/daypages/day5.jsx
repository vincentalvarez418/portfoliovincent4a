import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import day51 from "../assets/dayimages/5-1.jpg";
import day52 from "../assets/dayimages/5-2.jpg";
import day53 from "../assets/dayimages/5-3.jpg";
import day54 from "../assets/dayimages/5-4.jpg";
import { Link } from "react-router-dom";
import day55 from "../assets/dayimages/5-5.jpg";
import day56 from "../assets/dayimages/5-6.jpg";
import day57 from "../assets/dayimages/5-7.jpg";
import day58 from "../assets/dayimages/5-8.jpg";
import "./day.css";
import FadeInWrapper from "../otherpage/FadeInWrapper";

const Day5 = () => {
  return (
    <div className="day-container">
      <div className="day-page">
        <FadeInWrapper>
          <div className="day-content">
            <div className="text-right">
              <h1>Manila Transportation Foundations</h1>
              <hr />
              <br />
              <p>
                LRTA (Light Rail Transit Authority) oversees the planning, construction, operation, and maintenance of light rail systems in the Philippines. Its role is pivotal in developing mass transit solutions aimed at reducing urban congestion and enhancing public transportation efficiency.
                <br /><br />
                MMDA (Metropolitan Manila Development Authority) is responsible for traffic management, flood control, urban development, and public safety across Metro Manila. By coordinating with local government units, the MMDA ensures the smooth movement of people and vehicles, playing a key role in the region's infrastructural efficiency.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day51} alt="LRT Train Docking Bay" effect="blur" preload="true" />
              <p className="image-description">
                This image captures a quiet LRT train docking bay, showcasing a solitary train resting on its tracks within a large maintenance facility. The scene highlights the critical role of operational support and maintenance in keeping the city's rail systems functional and efficient.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day52} alt="LRT CCTV Control Center" effect="blur" preload="true" />
              <p className="image-description">
                Inside the LRTA operation center, rows of CCTV monitors track live footage from across the network. This setup reflects the real-time monitoring efforts to ensure the safety and efficient operation of Metro Manila's transit lines, essential for maintaining smooth service.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day53} alt="Empty Train Rails in Warehouse" effect="blur" preload="true" />
              <p className="image-description">
                The stillness of empty train rails in a dimly lit warehouse evokes a sense of anticipation. The quiet expanse of unused tracks underscores the downtime between active service, awaiting the return of trains to bring the system back to life.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day54} alt="LRT Multiple Track Lines" effect="blur" preload="true" />
              <p className="image-description">
                A sprawling view of multiple track lines outside an LRT docking facility illustrates the complex and intricate nature of the urban transit system. This wide-open yard represents the scale of Metro Manila's mass transit logistics, showcasing how these rail systems intertwine across the city.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day55} alt="Inactive LRT Interior" effect="blur" preload="true" />
              <p className="image-description">
                The interior of a powered-down LRT train offers a quiet, reflective ambiance. The empty seats and shadowy poles convey a sense of calm, contrasting with the usual hustle and bustle of daily commuters.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day56} alt="Government Compound Buildings" effect="blur" preload="true" />
              <p className="image-description">
                A government compound featuring several structured buildings showcases the administrative heart of Metro Manila's transit efforts. The open paths and orderly design of the compound emphasize the efficiency and organization required to manage the capital's transportation network.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day57} alt="Active LRT Interior" effect="blur" preload="true" />
              <p className="image-description">
                The well-lit interior of an active LRT train highlights a peaceful ride with minimal passengers. This serene image exemplifies the role of public transportation as a reliable, comfortable, and efficient mode of travel for daily commuters in Metro Manila.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day58} alt="MMDA Briefing Table" effect="blur" preload="true" />
              <p className="image-description">
                A briefing room at the MMDA facility shows officials gathered around a table filled with documents, laptops, and communication tools. This scene represents the behind-the-scenes coordination necessary for improving Metro Manila's traffic, safety, and urban planning efforts.
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

export default Day5;
