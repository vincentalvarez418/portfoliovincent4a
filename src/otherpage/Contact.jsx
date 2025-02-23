import React, { useState, useEffect } from 'react';
import './Contact.css';
import githubIcon from '../assets/icons/github.png';

function Contact() {
  const [flippedEmail, setFlippedEmail] = useState(false);
  const [flippedPhone, setFlippedPhone] = useState(false);
  const [flippedGitHub, setFlippedGitHub] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`contact-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="cards-container">
        {}
        <div className={`card ${flippedEmail ? 'flipped' : ''}`} onClick={() => setFlippedEmail(!flippedEmail)}>
          <div className="card-inner">
            <div className="card-front">📧</div>
            <div className="card-back">vincentalvarez418@gmail.com</div>
          </div>
        </div>

        {}
        <div className={`card ${flippedPhone ? 'flipped' : ''}`} onClick={() => setFlippedPhone(!flippedPhone)}>
          <div className="card-inner">
            <div className="card-front">📞</div>
            <div className="card-back">+9854 5616 2544</div>
          </div>
        </div>

        {}
        <div className={`card ${flippedGitHub ? 'flipped' : ''}`} onClick={() => setFlippedGitHub(!flippedGitHub)}>
          <div className="card-inner">
            <div className="card-front">
              <img src={githubIcon} alt="GitHub" className="github-icon" />
            </div>
            <div className="card-back">
              <a href="https://github.com/vincentalvarez418" target="_blank" rel="noopener noreferrer">
                github.com/vincentalvarez418
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
