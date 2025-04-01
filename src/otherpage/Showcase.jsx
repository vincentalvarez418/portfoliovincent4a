import React, { useEffect, useState } from "react";
import "./Showcase.css";
import GraphicDesign from "../assets/showcases/GraphicDesign.png";
import App1 from "../assets/showcases/app1.png";
import App2 from "../assets/showcases/app2.png";
import gdsc1 from "../assets/showcases/Gdsc.png";
import gdsc2 from "../assets/showcases/Gdsc2.png";

function Showcase() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50); 

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Silence of the Owls",
      image: GraphicDesign,
      description: "An Oppression poster that depicts the current state of the media and press freedom.",
    },
    {
      title: "Aquasnap: Fish Identification App",
      images: [App1, App2],
      description: "A fish identification app powered by YOLO and is capable of running fully offline.",
    },
    {
      title: "Gdsc Event Portal",
      images: [gdsc1, gdsc2],
      description: "GDSC Event Management system for the WMSU GDSC Branch, featuring Events and Exclusive Dynamic Certificates.",
    },
  ];

  return (
    <div className={`showcase-container ${fadeIn ? "fade-in" : ""}`}>
    <br></br>
    <div className="separator">
    <hr className="line" />
    <hr className="line" />
      </div>
      <h1 className="my-works-name">My Works</h1>
      <div className="separator">
        <hr className="line" />
        <hr className="line" />
      </div>
        <div className="showcase-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-wrapper">
          <div className="project-title-container">
            <h3 className="project-title">{project.title}</h3>
          </div>
          <div className="project-card">
            <div className="project-content">
              {project.title === "Aquasnap: Fish Identification App" ? (
                <div className="aquasnap-container">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`${project.title} - ${i + 1}`} className="aquasnap-image" />
                  ))}
                </div>
              ) : project.title === "Gdsc Event Portal" ? (
                <div className="gdsc-container">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`${project.title} - ${i + 1}`} className="gdsc-image" />
                  ))}
                </div>
              ) : (
                <div className="other-projects-container">
                  {Array.isArray(project.images) ? (
                    project.images.map((img, i) => (
                      <img key={i} src={img} alt={`${project.title} - ${i + 1}`} className="other-project-image" />
                    ))
                  ) : (
                    <img src={project.image} alt={project.title} className="other-project-image" />
                  )}
                </div>
              )}
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    );
  }

export default Showcase;
