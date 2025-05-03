import React, { useState, useEffect } from "react";
import "./Showcase.css";
import App1 from "../assets/showcases/app1.jpg";
import App2 from "../assets/showcases/app2.jpg";
import gdsc1 from "../assets/showcases/Gdsc.jpg";
import pokemonSpinel from "../assets/showcases/PokemonSpinel.jpg";
import calculatorImg from "../assets/showcases/calculator.jpg";
import githubIcon from "../assets/showcases/github.png";
import hostlinkIcon from "../assets/showcases/hostlink.png";
import FadeInWrapper from './FadeInWrapper';

function Showcase() {
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  const [zoomed, setZoomed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const projects = [
    {
      title: "Aquasnap: Fish Identification",
      image: App1,
      description: "Gallery of Aquasnap: Showing the description of a local fish.",
      links: {
        repo: "https://github.com/vincentalvarez418/aquasnap"
      }
    },
    {
      title: "Aquasnap: Fish Identification",
      image: App2,
      description: "Main feature of Aquasnap: Identification of local fish species.",
      links: {
        repo: "https://docs.ultralytics.com/"
      }
    },
    {
      title: "Gdsc Event Portal",
      images: [gdsc1],
      description: "GDSC Event Management system for the WMSU GDSC Branch, featuring Events and Exclusive Dynamic Certificates.",
    },
    {
      title: "Pokemon Spinel",
      image: pokemonSpinel,
      description: "A fan-made Pokemon game inspired by the original series.",
      links: {
        host: "https://pokemonsgen1.netlify.app/",
        repo: "https://github.com/vincentalvarez418/pokemon-gba",
      }
    },
    {
      title: "Calculator",
      image: calculatorImg,
      description: "A simple calculator built using HTML, CSS, and JavaScript.",
      links: {
        host: "https://tulabingalvarezcalculator.netlify.app/",
        docs: "https://docs.ultralytics.com/",
      }
    }
  ];

  const handleImageLoad = () => {
    setLoading(false);
  };

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="showcase-container">
      <br />
      <div className="separator">
        <hr className="line" />
        <hr className="line" />
      </div>
      <h1 className="my-works-name">PROJECTS</h1>
      <div className="separator">
        <hr className="line" />
        <hr className="line" />
      </div>
      <div className="showcase-grid">
        <div className="project-row">
          {projects.map((project, index) => {
            if (["Aquasnap: Fish Identification", "Aquasnap: Fish Identification"].includes(project.title)) {
              return (
                <FadeInWrapper key={index}>
                  <div className="project-wrapper half-width calculator-container">
                    <div className="project-title-container">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <div className="project-card">
                      <div className="project-content">
                        <div className="calculator-container">
                          <img src={project.image} alt={project.title} className="calculator-image" onLoad={handleImageLoad} />
                        </div>
                        <p className="project-description">{project.description}</p>
                        {project.links && (
                          <div className="project-links">
                            {project.links.host && (
                              <a href={project.links.host} target="_blank" rel="noopener noreferrer" className="project-link">
                                <img src={hostlinkIcon} alt="Host Link" className="link-icon" />
                                View Project
                              </a>
                            )}
                            {project.links.repo && (
                              <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                                <img
                                  src={
                                    project.links.repo.includes("ultralytics.com") ? hostlinkIcon : githubIcon
                                  }
                                  alt={project.links.repo.includes("ultralytics.com") ? "Documentation" : "GitHub Repository"}
                                  className="link-icon"
                                />
                                {project.links.repo.includes("ultralytics.com") ? "View YOLO Docs" : "View Repository"}
                              </a>
                            )}
                            {project.links.docs && (
                              <a href={project.links.docs} target="_blank" rel="noopener noreferrer" className="project-link">
                                <img src={hostlinkIcon} alt="Documentation" className="link-icon" />
                                View YOLO Docs
                              </a>
                            )}
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </FadeInWrapper>
              );
            }
          })}
        </div>

        {!isMobile && projects.map((project, index) => {
          if (project.title === "Gdsc Event Portal") {
            return (
              <FadeInWrapper key={index}>
                <div className="project-wrapper full-width">
                  <div className="project-title-container">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div className="project-card">
                    <div className="project-content">
                      <div className="gdsc-container">
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className={`gdsc-image ${loading ? "blurred" : ""} ${zoomed ? "zoomed" : ""}`}
                          onLoad={handleImageLoad}
                          onClick={toggleZoom}
                        />
                      </div>
                      <p className="project-description">{project.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInWrapper>
            );
          }
        })}

        <div className="project-row">
          {projects.map((project, index) => {
            if (["Pokemon Spinel", "Calculator"].includes(project.title)) {
              return (
                <FadeInWrapper key={index}>
                  <div className="project-wrapper half-width">
                    <div className="project-title-container">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <div className="project-card">
                      <div className="project-content">
                        <div className={`${project.title === "Pokemon Spinel" ? "pokemon-container" : "calculator-container"}`}>
                          <img src={project.image} alt={project.title} className={`${project.title === "Pokemon Spinel" ? "pokemon-image" : "calculator-image"} ${loading ? "blurred" : ""}`} onLoad={handleImageLoad} />
                        </div>
                        <p className="project-description">{project.description}</p>
                        {project.links && (
                          <div className="project-links">
                            <a href={project.links.host} target="_blank" rel="noopener noreferrer" className="project-link">
                              <img src={hostlinkIcon} alt="Host Link" className="link-icon" />
                              View Project
                            </a>
                            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="project-link">
                              <img src={githubIcon} alt="GitHub Repository" className="link-icon" />
                              View Repository
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeInWrapper>
              );
            }
          })}
        </div>

      </div>
    </div>
  );
}

export default Showcase;
