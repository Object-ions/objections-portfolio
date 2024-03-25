import React from 'react';
import './Projects.scss'; // Assuming you have styling here that applies

const SelectedProject = ({ project }) => {
  if (!project) return null; // Don't render anything if there's no project

  const fadeInRight = 'animate__animated animate__fadeInRight';

  return (
    <div className="item">
      <h3 className={fadeInRight} style={{ animationDelay: '0.1s' }}>
        {project.title}
      </h3>
      <hr className={fadeInRight} style={{ animationDelay: '0.2s' }} />
      <p className={fadeInRight} style={{ animationDelay: '0.3s' }}>
        {project.description}
      </p>

      <div className={`tags ${fadeInRight}`} style={{ animationDelay: '0.4s' }}>
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div
        className={`links ${fadeInRight}`}
        style={{ animationDelay: '0.5s' }}
      >
        {project['live'] && (
          <a href={project['live']} target="blank" className="live-site">
            (Live Demo)
          </a>
        )}

        {project.github && (
          <a href={project.github} target="blank" className="github">
            (GitHub Repo)
          </a>
        )}

        {project['videos'] && (
          <a href={project['videos']} target="blank" className="live-site">
            (Video Demo)
          </a>
        )}
      </div>

      <div
        className={`image-wrapper ${fadeInRight}`}
        style={{ animationDelay: '0.6s' }}
      >
        {project.images.map((image, imgIndex) => (
          <a href={image} target="blank" key={imgIndex}>
            <img
              src={image}
              alt={`${project.title}`}
              className="single-image"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SelectedProject;
