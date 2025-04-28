import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import day41 from "../assets/dayimages/4-1.jpg";
import day42 from "../assets/dayimages/4-2.jpg";
import day43 from "../assets/dayimages/4-3.jpg";
import day44 from "../assets/dayimages/4-4.jpg";
import { Link } from "react-router-dom";
import day45 from "../assets/dayimages/4-5.jpg";
import day46 from "../assets/dayimages/4-6.jpg";
import day47 from "../assets/dayimages/4-7.jpg";
import day48 from "../assets/dayimages/4-8.jpg";
import "./day.css";
import FadeInWrapper from "../otherpage/FadeInWrapper";

const Day4 = () => {
  return (
    <div className="day-container">
      <div className="day-page">
        <FadeInWrapper>
          <div className="day-content">
            <div className="text-right">
              <h1>Robotic solutions: Hytec PH</h1>
              <hr />
              <br />
              <p>
                Hytec Power, Incorporated is an innovative company providing products and services to both academic and industrial sectors. As a leading industrial and educational solutions provider in the Philippines, Hytec continues to drive advancements in technology and education.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day41} alt="Electrical Switchboard" effect="blur" />
              <p className="image-description">
                This image features an electrical switchboard and E-learning hardware setup, highlighting essential tools used in modern technical education. The arrangement includes switches, circuit breakers, and wiring panels, with robotic equipment nearby, exemplifying the seamless integration of automation in hands-on learning environments.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day42} alt="PC Control Console" effect="blur" />
              <p className="image-description">
                This image shows a PC connected to an electric control console, designed for robotics applications. The setup demonstrates the intersection of computing and automation, essential for the development of advanced robotics systems in industrial and academic settings.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day43} alt="Voltage Monitor Setup" effect="blur" />
              <p className="image-description">
                This image showcases a sophisticated setup featuring interconnected components, including a pressure monitor for voltage regulation. The precise array of wires and sensors highlights Hytec's cutting-edge solutions for industrial and IT applications, demonstrating their leadership in technology and innovation.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day44} alt="Hytec Modules" effect="blur" />
              <p className="image-description">
                Hytec Power continues to lead in providing innovative solutions for both academic and industrial sectors in the Philippines. Featured here are their advanced modules, including the Digger Module for data excavation and the Button Module for simplified user interaction. These modules form a versatile system tailored to modern IT needs.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day45} alt="Student Projects" effect="blur" />
              <p className="image-description">
                Hytec Power showcases a portable suitcase containing an electrical trainer alongside custom-built projects by previous students. This setup underscores their commitment to hands-on learning and fostering creativity in technical education, providing real-world applications for students to explore.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day46} alt="Medical Prototypes" effect="blur" />
              <p className="image-description">
                Hytec Power is exploring innovative prototypes for medical applications. These devices, designed with precision and cutting-edge technology, aim to enhance healthcare solutions. Their continued focus on advancing medical technology highlights their dedication to addressing critical needs in the healthcare sector.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day47} alt="LAN Trainers & Prototypes" effect="blur" />
              <p className="image-description">
                Hytec Power offers advanced LAN trainers, HDD storage devices, and prototype camera-like equipment. These tools are integral to enhancing IT training and development, reflecting Hytec's commitment to providing state-of-the-art educational solutions in both the academic and industrial domains.
              </p>
            </div>
          </div>
        </FadeInWrapper>

        <br /><hr /><br />

        <FadeInWrapper>
          <div className="day-content">
            <div className="image-block">
              <LazyLoadImage src={day48} alt="Weather Machine" effect="blur" />
              <p className="image-description">
                Hytec Power features an advanced weather machine designed for precise environmental monitoring and analysis. This innovative device underscores their commitment to integrating cutting-edge technology in both academic and industrial applications, playing a vital role in climate-related research and weather pattern studies.
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

export default Day4;
