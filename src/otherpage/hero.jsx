import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(true);
  const [typedDawn, setTypedDawn] = useState("");
  const [typedTitle, setTypedTitle] = useState("");
  const [typedTagline, setTypedTagline] = useState("");
  const [showBrackets, setShowBrackets] = useState(false);
  const [showButton, setShowButton] = useState(false); 

  const dawnText = "THE DAWN OF";
  const titleText = "A NEW ERA";
  const taglineText = "Code. Create. Innovate.";

  useEffect(() => {
    document.body.classList.add("hero-active");
    return () => {
      document.body.classList.remove("hero-active"); 
    };
  }, []);

  
  useEffect(() => {
    setTimeout(() => {
      let i = 0;
      const typeDawn = () => {
        if (i < dawnText.length) {
          setTypedDawn(dawnText.slice(0, i + 1));
          i++;
          setTimeout(typeDawn, 100); 
        } else {
          setTimeout(() => startTitleTyping(), 1200); 
        }
      };
      typeDawn();
    }, 1500);
  }, []);
  
  const startTitleTyping = () => {
    let j = 0;
    const typeTitle = () => {
      if (j < titleText.length) {
        setTypedTitle(titleText.slice(0, j + 1));
        j++;
        setTimeout(typeTitle, 130);
      } else {
        setTimeout(() => startTaglineTyping(), 1000); 
      }
    };
    typeTitle();
  };
  
  const startTaglineTyping = () => {
    let k = 0;
    const typeTagline = () => {
      if (k < taglineText.length) {
        setTypedTagline(taglineText.slice(0, k + 1));
        k++;
        setTimeout(typeTagline, 80); 
      } else {
        setShowBrackets(true);
        setTimeout(() => setShowButton(true), 800);
      }
    };
    typeTagline();
  };
  

  const handleGetStarted = () => {
    setShowImage(false);
    document.querySelector(".hero-container").classList.add("fade");
    document.body.classList.add("hero-active");
    setTimeout(() => {
      navigate("/about", { state: { fromHero: true } });
      document.body.classList.remove("hero-active");
    }, 0);
  };

  return (
    <div className="hero-container">
      <div className={`hero-image ${showImage ? "visible" : "hidden"}`}></div>
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-title-container">
            <h3 className="hero-subtitle">{typedDawn}</h3>
            <h1 className="hero-title">
              <span className="glitch">{typedTitle}</span>
            </h1>
            <h5 className="hero-tagline">
              {showBrackets && <span className="angle-brackets fade-in">&lt;&gt;</span>}
              {typedTagline}
              {showBrackets && <span className="angle-brackets fade-in">&lt;/&gt;</span>}
            </h5>
          </div>
          {showButton && (
            <button className="hero-button fade-in" onClick={handleGetStarted}>
              START
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
