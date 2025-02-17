import React from "react";
import "./Showcase.css";
import GraphicDesign from "../assets/showcases/GraphicDesign.png";
import App1 from "../assets/showcases/app1.png";
import App2 from "../assets/showcases/app2.png";

function Showcase() {
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
      title: "Placeholder",
      image: "https://via.placeholder.com/300",
      description: "Add later",
    },
  ];

  return (
    <div className="showcase-container">
      <h1 className="showcase-title">Showcase</h1>
      <p className="showcase-subtitle">
        Explore some of my featured projects and creative work.
      </p>

      <div className="showcase-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-wrapper">
            <div className="project-title-container">
              <h3 className="project-title">{project.title}</h3>
            </div>
            <div className="project-card">
              <div className="project-content">
                {Array.isArray(project.images) ? (
                  <div className="multi-image-container">
                    {project.images.map((img, i) => (
                      <img key={i} src={img} alt={`${project.title} - ${i + 1}`} className="project-image" />
                    ))}
                  </div>
                ) : (
                  <img src={project.image} alt={project.title} className="project-image" />
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
