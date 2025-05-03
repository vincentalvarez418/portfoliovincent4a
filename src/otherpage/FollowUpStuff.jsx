import React, { useEffect, useState } from "react";
import "./FollowUpStuff.css";
import yoloLogo from '../assets/icons/yolo.png';
import pythonLogo from '../assets/icons/python.png';
import phpLogo from '../assets/icons/php.png';
import cssLogo from '../assets/icons/css.png';
import linkedinIcon from "../assets/aboutme/linkedin2.png";
import htmlLogo from '../assets/icons/html.png';
import javaLogo from '../assets/icons/java.png';
import workingon2 from '../assets/aboutme/workingon2.jpg';
import jsLogo from '../assets/icons/javascript.png';
import kotlinLogo from '../assets/icons/kotlin.png';
import workingon from '../assets/aboutme/workingon1.jpg';
import qualcommLogo from '../assets/aboutme/qualcom.png';
import githubAboutMe from '../assets/aboutme/githubaboutme.jpg';
import machineLearningImg from '../assets/aboutme/machinelearning.png';
import vincentPic from '../assets/aboutme/vincent.png';
import framePic from '../assets/aboutme/frame.png';

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
    <div>
      <div className="separator">
        <hr className="line" />
        <span className="separator-text"></span>
        <hr className="line" />
      </div>

      <h1 className="vincent-name">ABOUT ME</h1>

      <div className="vincent-pic-container">
        <div className="frame-container">
          <img 
            src={vincentPic} 
            alt="Vincent Profile" 
            className="vincent-profile-img" 
            loading="lazy" 
          />
          <img 
            src={framePic} 
            alt="Profile Frame" 
            className="vincent-frame-img" 
          />
        </div>
      </div>

      <div className="separator">
        <hr className="line" />
        <span className="separator-text"></span>
        <hr className="line" />
      </div>

      <br />

      <div className={`follow-up-container ${fadeIn ? "fade-in" : ""}`}>
        <div className="about-competitions-container">
          <div className="section about-me">
            <h2>WHO I AM</h2><hr />
            <p>
              Hi, I'm Vincent, a passionate Freelance Developer specializing in Machine Learning, with a deep interest in solving complex problems using data-driven techniques. Over the years, I’ve honed my skills in various programming languages, including Python, JavaScript, and more.
            </p>
          </div>

          <div className="section competitions">
            <h2>COMPETITIONS & CONTESTS</h2><hr />
            <p>
              I love challenging myself and testing my skills. I have participated in several third-party contests where I demonstrated my machine learning expertise. I am currently looking for contests that focuses on Mobile AI, Mobile Development and Mobile Software Optimizations.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>SKILLS AND EXPERTISE</h2><hr />
          <br />
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} Logo`} 
                  className="skill-logo"
                  loading="lazy" 
                  preload="true"
                />
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

        <div className="work-career-container">
          <div className="section working-on">
            <h2>CURRENTLY WORKING ON</h2><hr />
            <p>
            I'm working on machine learning projects, including image localization, focused on developing lightweight models for mobile and embedded systems.
            </p>

            <div className="working-on-image">
            <img 
              src={workingon} 
              alt="Current Project" 
              className="working-on-img" 
              loading="lazy" 
              preload="true" 
            />

            <img 
              src={workingon2} 
              alt="Current Project 2" 
              className="working-on-img children" 
              loading="lazy" 
              preload="true" 
            />

            </div>
          </div>

          <div className="section career-goals">
            <h2>CAREER GOALS</h2><hr />
            <p>
              My goal is to work in an IT company focused on machine learning and software development. 
              I’m passionate about building impactful AI-driven applications and continuously growing as a developer.
            </p>
            <div className="career-logos">
              <img 
                src={machineLearningImg} 
                alt="Machine Learning" 
                className="career-logo" 
                loading="lazy" 
                preload="true"
              />
            </div>
          </div>
        </div>

        <div className="hobbies-connect-container">
          <div className="section hobbies">
            <h2>HOBBIES</h2><hr />
            <p>
              Beyond coding, I enjoy studying mobile hardware, such as smartphone SoCs.
            </p>
            <div className="hobbies-logos">
              <img 
                src={qualcommLogo} 
                alt="Qualcomm Logo" 
                className="hobby-logo" 
                loading="lazy" 
                preload="true"
              />
            </div>
          </div>

          <div className="section lets-connect">
            <h2>LET'S CONNECT!</h2><hr />
            <div className="connect-logo">
              <a href="https://github.com/vincentalvarez418">
                <img 
                  src={githubAboutMe} 
                  alt="GitHub Profile" 
                  className="github-logo" 
                  loading="lazy"
                  preload="true" 
                />
              </a>
            </div>
            <br /><br /><br /><br />
            <div className="connect-logo">
              <a href="https://www.linkedin.com/in/vincent-alvarez-5a4b28359/">
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn Profile" 
                  className="github-logo" 
                  loading="lazy" 
                  preload="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUpStuff;
