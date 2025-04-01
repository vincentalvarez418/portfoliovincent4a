import React, { useState, useEffect, useCallback } from "react";
import "./Certificates.css";
import linkedinIcon from "../assets/icons/linkedin.png";

import CopilotImage from "../assets/certificates/Copilot.jpg";
import GoogleBertImage from "../assets/certificates/GoogleBert.jpg";
import CloudSecImage from "../assets/certificates/CloudSec.jpg";
import MSCopilotImage from "../assets/certificates/MSCopilot.jpg";
import CybercrimeImage from "../assets/certificates/Cybercrime.jpg";
import GenerativeAIImage from "../assets/certificates/GenerativeAI.jpg";
import PythonMLImage from "../assets/certificates/PythonML.jpg";

function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const certificates = [
    { image: CopilotImage },
    { image: GoogleBertImage },
    { image: CloudSecImage },
    { image: MSCopilotImage },
    { image: CybercrimeImage },
    { image: GenerativeAIImage },
    { image: PythonMLImage },
  ];

  const openModal = (image) => {
    if (!isMobile) {
      setModalImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className="certificates-container">
      <h1 className="my-certificates-name">CERTIFICATIONS</h1>
      <div className="separator">
        <hr className="line" />
        <hr className="line" />
      </div>
      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="certificates-card-wrapper"
            onClick={() => openModal(certificate.image)}
          >
            <div className="certificates-card">
              <div className="certificates-content">
                <div className="certificates-image-container">
                  <img
                    src={certificate.image}
                    alt={`Certificate ${index + 1}`}
                    className="certificates-image"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="linkedin-section">
        <div className="linkedin-container">
          <a
            href="https://www.linkedin.com/in/vincent-alvarez-5a4b28359/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="linkedin-image" />
          </a>
          <span className="linkedin-text">More Certificates on my LinkedIn</span>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal open" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Zoomed Certificate" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
