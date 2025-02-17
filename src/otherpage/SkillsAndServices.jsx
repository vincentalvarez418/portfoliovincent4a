import React, { useState, useEffect } from 'react';
import './SkillsAndServices.css';
import yoloLogo from '../assets/icons/yolo.png';
import pythonLogo from '../assets/icons/python.png';
import phpLogo from '../assets/icons/php.png';
import cssLogo from '../assets/icons/css.png';
import htmlLogo from '../assets/icons/html.png';
import javaLogo from '../assets/icons/java.png';
import jsLogo from '../assets/icons/javascript.png';
import kotlinLogo from '../assets/icons/kotlin.png';

const skills = [
  { logo: yoloLogo, name: "YOLO", services: ["Object Detection", "Model Training"] },
  { logo: pythonLogo, name: "Python", services: ["AI & ML Development", "Data Automation"] },
  { logo: phpLogo, name: "PHP", services: ["Backend Development", "API Integration"] },
  { logo: cssLogo, name: "CSS", services: ["Responsive Design", "UI Animations"] },
  { logo: htmlLogo, name: "HTML", services: ["Web Structuring", "SEO Optimization"] },
  { logo: javaLogo, name: "Java", services: ["App Development", "OOP System Design"] },
  { logo: jsLogo, name: "JavaScript", services: ["Interactive Web Apps", "Frontend & Backend"] },
  { logo: kotlinLogo, name: "Kotlin", services: ["Android Development", "Mobile UI/UX"] }
];

function SkillsAndServices() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`skills-services-wrapper ${fadeIn ? 'fade-in' : ''}`}>
      <h2>Skills and Services</h2>
      
      <p>
        Hi, I’m Vincent, a passionate freelance programmer with a strong focus on building innovative systems. I specialize in creating machine learning solutions using frameworks like TensorFlow and YOLO, tackling tasks such as object detection and predictive analytics, plus the several programming technologies listed below.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo"/>
            <h3>{skill.name}</h3>
            <ul>
              {skill.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsAndServices;
