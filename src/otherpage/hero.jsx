import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  const navigate = useNavigate();
  const [showImage, setShowImage] = useState(true);
  const [showCodeEffect, setShowCodeEffect] = useState(false);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(0);

    const draw = () => {
      if (!showCodeEffect) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const randomColor = Math.random() > 0.5 ? "#cb00ce" : "#FFD700";

      ctx.fillStyle = randomColor;
      ctx.font = "18px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = Math.floor(Math.random() * 10);
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    if (showCodeEffect) {
      draw();
    }

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [showCodeEffect]);

  useEffect(() => {
    const cycleEffect = () => {
      setShowImage(true);
      setShowCodeEffect(false);

      setTimeout(() => {
        setShowImage(false);
        setShowCodeEffect(true);
      }, 3000);

      setTimeout(() => {
        setShowCodeEffect(false);
        setShowImage(true);
      }, 16000); 

      setTimeout(cycleEffect, 20000); 
    };

    cycleEffect();
  }, []);

  const handleGetStarted = () => {
    navigate("/about", { state: { fromHero: true } });
  };

  return (
    <div className="hero-container">
      <div className={`hero-image ${showImage ? "visible" : "hidden"}`}></div>
      <canvas ref={canvasRef} className={showCodeEffect ? "visible" : "hidden"}></canvas>
      <div className="hero-section">
        <div className="hero-content">
        <div className="hero-title-container">
        <h3 className="hero-subtitle">THE RISE OF A NEW</h3>
        <h1 className="hero-title">
          <span className="glitch">DEVELOPER</span>
        </h1>
        <h5 className="hero-tagline">ADAPT. LEARN. MASTER.</h5>
      </div>
          <button className="hero-button" onClick={handleGetStarted}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
