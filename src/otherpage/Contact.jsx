import React from "react";
import "./Contact.css";
import linkedinIcon from "../assets/contact/linkedin.png";
import githubIcon from "../assets/contact/github.png";
import gmailIcon from "../assets/contact/gmail.png";
import cvPreview from "../assets/contact/cv.png";
import cvDownload from "../assets/files/cv.pdf";
import FadeInWrapper from "./FadeInWrapper";

function Contact() {
  return (
    <div className="experience-container">
      <FadeInWrapper>
        <h1 className="experience-title">Connect With Me</h1>
        <div className="experience-content">
          <div className="experience-grid">
            <div className="experience-wrapper">
              <div className="experience-title-container">
                <h2 className="experience-section-title">Social Media Links</h2>
              </div>
              <div className="experience-card">
                <div className="experience-content-section">
                  <div className="experience-description">
                    <p>
                      Click below to visit my social media profiles or to
                      download my CV.
                    </p>
                  </div>
                  <div className="experience-links">
                    <a
                      href="https://www.linkedin.com/in/vincent-anthony-alvarez-5a4b28359/"
                      className="experience-link"
                    >
                      <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className="experience-link-icon"
                      />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/vincentalvarez418"
                      className="experience-link"
                    >
                      <img
                        src={githubIcon}
                        alt="GitHub"
                        className="experience-link-icon"
                      />
                      GitHub
                    </a>
                    <a
                      href="mailto:vincentalvarez418@gmail.com"
                      className="experience-link"
                    >
                      <img
                        src={gmailIcon}
                        alt="Gmail"
                        className="experience-link-icon"
                      />
                      Gmail
                    </a>
                    <a href={cvDownload} download className="experience-link">
                      <img
                        src={cvPreview}
                        alt="Download CV"
                        className="experience-link-icon"
                      />
                      CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInWrapper>
    </div>
  );
}

export default Contact;
