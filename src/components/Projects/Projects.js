import React, { useState } from "react";
import "./Projects.scss";
import DataCode from "../../data/code.json";
import "animate.css";

const ProjectsData = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(
    DataCode[0]["item-id"]
  );

  // Handle clicking on a project title passing its ID
  const handleProjectClick = (itemId) => {
    setSelectedProjectId(itemId);
  };

  // Find the selected project sing project ID
  const selectedProject = DataCode.find(
    (project) => project["item-id"] === selectedProjectId
  );

  const fadeInLeft = "animate__animated animate__fadeInLeft";
  const fadeInRight = "animate__animated animate__fadeInRight";

  return (
    <div className="Projects">
      {/* List of Projects */}
      <div className="project-list">
        <ul>
          {DataCode.map((project, index) => (
            <li
              key={project["item-id"]}
              className={fadeInLeft}
              style={{ animationDelay: `${index * 0.1}s` }} // Delay each li
            >
              <button onClick={() => handleProjectClick(project["item-id"])}>
                {"> "}
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display area */}
      {selectedProject && (
        <div className="item">
          <h3 className={fadeInRight} style={{ animationDelay: "0.1s" }}>
            {selectedProject.title}
          </h3>
          <hr className={fadeInRight} style={{ animationDelay: "0.2s" }} />
          <p className={fadeInRight} style={{ animationDelay: "0.3s" }}>
            {selectedProject.description}
          </p>

          {/* Tag list */}
          <div
            className={`tags ${fadeInRight}`}
            style={{ animationDelay: "0.4s" }}
          >
            {selectedProject.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Live Site */}
          <div
            className={`links ${fadeInRight}`}
            style={{ animationDelay: "0.5s" }}
          >
            {selectedProject["live-site"] && (
              <a
                href={selectedProject["live-site"]}
                target="blank"
                className="live-site"
              >
                (Live Demo)
              </a>
            )}

            {/* Github Repo */}
            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="blank"
                className="github"
              >
                (GitHub Repo)
              </a>
            )}
          </div>

          {/* Image wrapper */}
          <div
            className={`image-wrapper ${fadeInRight}`}
            style={{ animationDelay: "0.6s" }}
          >
            {selectedProject.images.map((image, imgIndex) => (
              <a href={image} target="blank" key={imgIndex}>
                <img
                  src={image}
                  alt={`${selectedProject.title}`}
                  className="single-image"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsData;
