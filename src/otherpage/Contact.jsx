import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import linkedinIcon from "../assets/contact/linkedin.png";
import githubIcon from "../assets/contact/github.png";
import gmailIcon from "../assets/contact/gmail.png";
import cvPreview from "../assets/contact/cv.png";
import cvDownload from "../assets/files/cv.pdf";
import FadeInWrapper from "./FadeInWrapper";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const userEmail = formData.get("user_email");
    const userMessage = formData.get("message");
    const formattedMessage = `Hello, My email is ${userEmail}. \n\n${userMessage}`;

    emailjs
      .send(
        "service_r4pdjdb",
        "template_8o7nbuq",
        {
          user_email: userEmail,
          message: formattedMessage,
        },
        "lMmJum_t0HO1lZzjo"
      )
      .then(
        (result) => {
          setAlertMessage("Email sent successfully!");
          setAlertType("success");
        },
        (error) => {
          setAlertMessage("Oops! Something went wrong. Please try again.");
          setAlertType("error");
        }
      );

    setShowModal(false);
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 2000);

      const fadeTimer = setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
        setFadeOut(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
      };
    }
  }, [alertMessage]);

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
                    <p>Click below to visit my social media profiles or to download my CV.</p>
                  </div>
                  <div className="experience-links">
                    <button className="experience-link" onClick={() => window.open("https://www.linkedin.com/in/vincent-anthony-alvarez-5a4b28359/", "_blank")}>
                      <img src={linkedinIcon} alt="LinkedIn" className="experience-link-icon" />
                      LinkedIn
                    </button>
                    <button className="experience-link" onClick={() => window.open("https://github.com/vincentalvarez418", "_blank")}>
                      <img src={githubIcon} alt="GitHub" className="experience-link-icon" />
                      GitHub
                    </button>
                    <button className="experience-link" onClick={() => setShowModal(true)}>
                      <img src={gmailIcon} alt="Gmail" className="experience-link-icon" />
                      Gmail
                    </button>
                    <button className="experience-link" onClick={() => window.open(cvDownload, "_blank")}>
                      <img src={cvPreview} alt="Download CV" className="experience-link-icon" />
                      CV
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInWrapper>

      {showModal && (
        <div className="email-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="email-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="email-modal-title">Send Me a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="email-modal-form">
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required />
              <button type="submit">Send</button>
            </form>
            <button className="email-modal-close" onClick={() => setShowModal(false)}>
              X
            </button>
          </div>
        </div>
      )}

      {alertMessage && (
        <div className={`custom-alert ${alertType} ${fadeOut ? "fade-out" : ""}`}>
          <span>{alertMessage}</span>
        </div>
      )}
    </div>
  );
}

export default Contact;
