import React, { useEffect, useState } from "react";
import "./FollowUpStuff.css";

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
      <h1 className="vincent-name">Hello, I am Vincent</h1>
      <div className="separator">
        <hr className="line" />
        <span className="separator-text">- - / / - - / / - -</span>
        <hr className="line" />
      </div>

      <br />

      <div>
        <p className="follow-up-stuff">
          <span className="glowing-text">
            I am a passionate Freelance Developer specializing in Machine Learning, with a deep interest in solving complex problems using data-driven techniques. Over the years, I’ve honed my skills across several programming languages, including Python, JavaScript, and others. As a versatile developer, I thrive in both independent and collaborative environments, always focusing on delivering high-quality solutions. My ability to critically analyze problems and think creatively has been key to my success in building innovative solutions for clients. I am always eager to learn new technologies and take on challenges that push me to grow.
          </span>
        </p>
      </div>
      <br />
      <br />
    </div>
  );
}

export default FollowUpStuff;
