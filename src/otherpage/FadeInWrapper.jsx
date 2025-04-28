import React, { useEffect, useState } from 'react';
import './FadeInWrapper.css';

const FadeInWrapper = ({ children }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-in-wrapper ${fadeIn ? 'fade-in' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInWrapper;
