import React, { useEffect, useState } from "react";
import "./Showcase.css";
import GraphicDesign from "../assets/showcases/GraphicDesign.png";
import App1 from "../assets/showcases/app1.png";
import App2 from "../assets/showcases/app2.png";
import gdsc1 from "../assets/showcases/Gdsc.png";
import gdsc2 from "../assets/showcases/Gdsc2.png";
import pokemonSpinel from "../assets/showcases/PokemonSpinel.png";
import calculatorImg from "../assets/showcases/calculator.png";
import githubIcon from "../assets/showcases/github.png";
import hostlinkIcon from "../assets/showcases/hostlink.png";
import FadeInWrapper from './FadeInWrapper';

function Showcase() {
  const [loading, setLoading] = useState(true);

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
    {
      title: "Pokemon Spinel",
      image: pokemonSpinel,
      description: "A fan-made Pokemon game inspired by the original series, featuring unique mechanics and an engaging story.",
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
        repo: "https://github.com/vincentalvarez418/calculator",
      }
    }
  ];

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="showcase-container">
      <br />
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
          <FadeInWrapper key={index}>
            <div className="project-wrapper">
              <div className="project-title-container">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-card">
                <div className="project-content">
                  {project.images ? (
                    <div className={`${project.title.includes("Aquasnap") ? "aquasnap-container" : "gdsc-container"}`}>
                      {project.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${project.title} - ${i + 1}`}
                          className={`${
                            project.title.includes("Aquasnap") ? "aquasnap-image" : "gdsc-image"
                          } ${loading ? "blurred" : ""}`}
                          onLoad={handleImageLoad}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className={`${project.title === "Pokemon Spinel" ? "pokemon-container" : project.title === "Calculator" ? "calculator-container" : "other-projects-container"}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`${project.title === "Pokemon Spinel" ? "pokemon-image" : project.title === "Calculator" ? "calculator-image" : "other-project-image"} ${loading ? "blurred" : ""}`}
                        onLoad={handleImageLoad}
                      />
                    </div>
                  )}
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
        ))}
      </div>
    </div>
  );
}

export default Showcase;
