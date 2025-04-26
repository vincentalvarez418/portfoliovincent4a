import React from "react";
import "./Experience.css";
import technovistaImage from "../assets/experience/technovista2.png";

function Experience() {
  return (
    <div className="experience-containercustom">
      
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

          <div className="experience-list">
            <div className="experience-item">
              <input type="checkbox" id="item1" defaultChecked />
              <label htmlFor="item1">
                To stay ahead in industry trends and emerging technologies.
              </label>
            </div>
            <div className="experience-item">
              <input type="checkbox" id="item2" defaultChecked />
              <label htmlFor="item2">
                To offer sustainable technologies and solutions.
              </label>
            </div>
            <div className="experience-item">
              <input type="checkbox" id="item3" defaultChecked />
              <label htmlFor="item3">
                To develop accessible technology solutions for all.
              </label>
            </div>
            <div className="experience-item">
              <input type="checkbox" id="item4" defaultChecked />
              <label htmlFor="item4">
                To foster a culture of continuous learning.
              </label>
            </div>
          </div>

          <div className="experience-details">
            <div className="experience-info">
              <div className="experience-role">
                <span className="experience-text">Role: Backend Developer</span>
              </div>
              <div className="experience-duration">
                <span className="experience-text">Duration: 1/2024 - 4/2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
