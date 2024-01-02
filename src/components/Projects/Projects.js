import React, { useState, useEffect } from "react";
import "./Projects.scss";
import DataCode from "../../data/code.json";

const ProjectsData = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    setProjectsData(DataCode);
    console.log(DataCode);
  }, []);

  return (
    <div className="Projects">
      <div className="item">
        <h3>{DataCode[0].title}</h3>
        <hr />
        <p>{DataCode[0].description}</p>
        <div className="tags">
          {DataCode[0].tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="links">
          <a href={DataCode[0].github} target="blank" className="github">
            GitHub Repo
          </a>
          <a href={DataCode[0].live} target="blank" className="live-site">
            Live Demo
          </a>
        </div>
        <div className="image-wrapper">
          <a href={DataCode[0].images[0]} target="blank">
            <img
              src={DataCode[0].images[0]}
              alt={DataCode.title}
              className="single-image"
            />
          </a>
          <a href={DataCode[0].images[0]} target="blank">
            <img
              src={DataCode[0].images[0]}
              alt={DataCode.title}
              className="single-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsData;
