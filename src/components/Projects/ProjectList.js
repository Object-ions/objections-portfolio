import React from 'react';
import './Projects.scss'; // Assuming you have styling here that applies

const ProjectList = ({ projects, onProjectClick }) => {
  const fadeInRight = 'animate__animated animate__fadeInRight';

  return (
    <div className="project-list">
      <h2 className={fadeInRight}>Programming Projects:</h2>
      <ul>
        {projects.map((project, index) => (
          <li
            key={project['item-id']}
            className={fadeInRight}
            style={{ animationDelay: `${index * 0.1}s` }} // Delay each li
          >
            <button onClick={() => onProjectClick(project['item-id'])}>
              {'> '}
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
