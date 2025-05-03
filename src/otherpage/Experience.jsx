import React from "react";
import {
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase
} from "react-icons/fa";
import { SiKotlin } from "react-icons/si"; 
import "./Experience.css";
import FadeInWrapper from "./FadeInWrapper";
import technovistaImage from "../assets/experience/technovista2.png";

function Experience() {
  return (
    <div className="customex-container">
      <FadeInWrapper>
        <div className="customex-content">
          <div className="customex-grid">
            <div className="customex-wrapper">
              <div className="customex-title-container">
                <h2 className="customex-section-title">TechnoVista Ventures</h2>
              </div>
              <div className="customex-card">
                <img
                  src={technovistaImage}
                  alt="TechnoVista Ventures"
                  className="customex-image"
                />
                <div className="customex-content-section">
                  <div className="customex-description">
                    <p>
                      TechnoVista Ventures is a dynamic IT company founded to provide technological innovation and deliver cutting-edge solutions. 
                      Passionate about exploring new vistas in tech, TechnoVista has become a trusted name in excellence and forward-thinking strategies.
                    </p>
                    <p>
                      Established by four visionary students from Western Mindanao State University (WMSU), TechnoVista Ventures was born out of a shared 
                      ambition to innovate and make a meaningful impact in the tech world. Their journey started with developing projects for the local 
                      Google Developer Student Club (GDSC), where they honed their skills and contributed to the growth of the community.
                    </p>
                    <p>
                      As the company continues to navigate the ever-evolving tech landscape, it remains dedicated to pioneering technologies that empower 
                      businesses to thrive in the digital era. Through sustainable and intelligent solutions, TechnoVista Ventures stays ahead in trends, 
                      builds accessible tools, and fosters a culture of continuous learning.
                    </p>

                    <ul className="customex-list">
                      <li>Stay ahead in trends and emerging tech fields.</li>
                      <li>Provide sustainable tech and smart solutions.</li>
                      <li>Build accessible tools for every user’s needs.</li>
                      <li>Encourage a culture of constant learning always.</li>
                    </ul>

                    <div className="customex-role-duration-container">
                      <div className="customex-role-box">
                        Web Backend Developer
                      </div>
                      <div className="customex-role-box">
                        Jan 2024 - April 2025
                      </div>
                    </div>

                    <div className="customex-skills-container">
                      <h3>Skills Obtained</h3>
                      <div className="customex-skills-grid">
                        <div className="customex-skill-item"><FaPhp size={24} color="#777" /> PHP</div>
                        <div className="customex-skill-item"><FaHtml5 size={24} color="#E44D26" /> HTML</div>
                        <div className="customex-skill-item"><FaCss3Alt size={24} color="#2965F1" /> CSS</div>
                        <div className="customex-skill-item"><FaJsSquare size={24} color="#F7DF1E" /> JavaScript</div>
                        <div className="customex-skill-item"><FaDatabase size={24} color="#0F6B28" /> SQL</div>
                        <div className="customex-skill-item"><SiKotlin size={24} color="#7F52FF" /> Kotlin</div>
                      </div>
                    </div>

                  </div>
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
