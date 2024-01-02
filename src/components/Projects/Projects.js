import React, { useState } from "react";
import "./Projects.scss";
import DataCode from "../../data/code.json";

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

  return (
    <div className="Projects">
      {/* List of Projects */}
      <div className="project-list">
        <ul>
          {DataCode.map((project) => (
            <li key={project["item-id"]}>
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
          <h3>{selectedProject.title}</h3>
          <hr />
          <p>{selectedProject.description}</p>

          {/* Tag list */}
          <div className="tags">
            {selectedProject.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Live Site */}
          <div className="links">
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
          <div className="image-wrapper">
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
