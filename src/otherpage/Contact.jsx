import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [flippedEmail, setFlippedEmail] = useState(false);
  const [flippedPhone, setFlippedPhone] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50); 

    return () => clearTimeout(timer);
  }, []);

  const handleFlipEmail = () => setFlippedEmail(!flippedEmail);
  const handleFlipPhone = () => setFlippedPhone(!flippedPhone);

  return (
    <div className={`contact-container ${fadeIn ? 'fade-in' : ''}`}>
      <div className="cards-container">
        <div
          className={`card ${flippedEmail ? 'flipped' : ''}`}
          onClick={handleFlipEmail}
        >
          <div className="card-inner">
            <div className="card-front">📧</div>
            <div className="card-back">vincentalvarez418@gmail.com</div>
          </div>
        </div>

        <div
          className={`card ${flippedPhone ? 'flipped' : ''}`}
          onClick={handleFlipPhone}
        >
          <div className="card-inner">
            <div className="card-front">📞</div>
            <div className="card-back">+9854 5616 2544</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
