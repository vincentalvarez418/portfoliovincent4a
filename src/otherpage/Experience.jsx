import React from "react";
import "./Experience.css";
import technovistaImage from "../assets/experience/technovista2.png";
import FadeInWrapper from "./FadeInWrapper";

function Experience() {
  return (
    <div className="experience-containercustom">
      <FadeInWrapper>
        <div className="experience-content-horizontal">
          <div className="experience-image-section">
            <img
              src={technovistaImage}
              alt="Technovista Ventures"
              className="experience-image"
            />
          </div>

          <div className="experience-text-section">
            <div className="experience-description-text">
              <p className="experience-text description-text">
                TechnoVista Ventures is a dynamic IT company and was founded
                with the goal to provide technological innovation and deliver
                cutting-edge solutions. Passionate to explore new vistas in
                the tech industry, TechnoVista Ventures has become a trusted
                name synonymous with excellence and forward-thinking strategies.
                As the company continues to navigate the ever-evolving tech
                landscape, it will remain dedicated to being a pioneer in
                delivering technological solutions that empower businesses and
                organizations to thrive in the digital era.
              </p>
            </div>
            
            <hr className="experience-divider mobile-only" />

            <div className="experience-list">
  <div className="experience-item">
    <input type="checkbox" id="item1" defaultChecked disabled />
    <label htmlFor="item1">
      Stay ahead in trends and emerging tech fields.
    </label>
  </div>
  <div className="experience-item">
    <input type="checkbox" id="item2" defaultChecked disabled />
    <label htmlFor="item2">
      Provide sustainable tech and smart solutions.
    </label>
  </div>
  <div className="experience-item">
    <input type="checkbox" id="item3" defaultChecked disabled />
    <label htmlFor="item3">
      Build accessible tools for every user’s needs.
    </label>
  </div>
  <div className="experience-item">
    <input type="checkbox" id="item4" defaultChecked disabled />
    <label htmlFor="item4">
      Encourage a culture of constant learning always.
    </label>
  </div>
</div>


            <div className="experience-details">
              <div className="experience-info">
                <div className="experience-role">
                  <span className="experience-text-black">ROLE: BACKEND DEVELOPER</span>
                </div>
                <div className="experience-duration">
                  <span className="experience-text">DURING: 1/2024 - 4/2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInWrapper>
    </div>
  );
}

export default Experience;
