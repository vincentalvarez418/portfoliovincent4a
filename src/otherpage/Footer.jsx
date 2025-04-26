import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} Vincent Alvarez. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/vincentalvarez418" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/vincent-anthony-alvarez-5a4b28359/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="mailto:vincentalvarez418@gmail.com">GMAIL</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
