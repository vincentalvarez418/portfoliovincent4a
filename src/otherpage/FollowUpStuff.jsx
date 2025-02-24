import React, { useEffect, useState } from "react";
import "./FollowUpStuff.css";
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

function FollowUpStuff() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`follow-up-container ${fadeIn ? "fade-in" : ""}`}>
      <div className="separator">
        <hr className="line" />
        <span className="separator-text">- - / / - - / / - -</span>
        <hr className="line" />
      </div>
      <h1 className="vincent-name">Vincent Alvarez</h1>
      <div className="separator">
        <hr className="line" />
        <span className="separator-text">- - / / - - / / - -</span>
        <hr className="line" />
      </div>
      <br />

      <div className="section">
        <h2>💻 About Me 💻</h2>
        <p>
          I am a passionate Freelance Developer specializing in Machine Learning, with a deep interest in solving complex problems using data-driven techniques. Over the years, I’ve honed my skills in various programming languages, including Python, JavaScript, and more.
        </p>
      </div>

      <div className="section">
        <h2>🏆 Competitions & Contests 🏆</h2>
        <p>
          I love challenging myself and testing my skills. I have participated in several third-party contests where I demonstrated my machine learning expertise. I am currently looking for contests that focus on mobile AI.
        </p>
      </div>

      <div className="section">
        <h2>🛠 Skills & Expertise 🛠</h2>
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

      <div className="section">
        <h2>🗃️ Currently Working On 🗃️</h2>
        <p>
          Right now, I’m working on several machine learning projects, such as image localization. My focus is on making lightweight models capable of running smoothly on multiple platforms.
        </p>
      </div>

      <div className="section">
        <h2>🎯 Career Goals 🎯</h2>
        <p>
          My goal is to work in an IT company focused on machine learning and software development. I’m passionate about building impactful AI-driven applications and continuously growing as a developer.
        </p>
      </div>

      <div className="section">
        <h2>📱 Hobbies 📱</h2>
        <p>
          Beyond coding, I enjoy studying mobile hardware, such as smartphone SoCs.
        </p>
      </div>

      <div className="section">
        <h2>📩 Let’s Connect! 📩</h2>
        <p>
          I’m always open to collaborating on exciting projects. Reach me at my GitHub: <a href="https://github.com/vincentalvarez418">vincentalvarez418</a>.
        </p>
      </div>
    </div>
  );
}

export default FollowUpStuff;
