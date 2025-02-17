// src/Contact.jsx

import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [flippedEmail, setFlippedEmail] = useState(false);
  const [flippedPhone, setFlippedPhone] = useState(false);

  const handleFlipEmail = () => setFlippedEmail(!flippedEmail);
  const handleFlipPhone = () => setFlippedPhone(!flippedPhone);

  return (
    <div className="contact-container">
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
