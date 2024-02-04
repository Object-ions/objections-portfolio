import React from 'react';
import 'animate.css';
import './Skills.scss';

import resumeData from '../../data/resume.json';

const Skills = () => {
  const { software } = resumeData.skills;

  const renderSkills = (skills, animationDelayStart) => (
    <div className="tags">
      {skills.map((skill, index) => (
        <span
          key={skill}
          className="tag animate__animated animate__fadeInRight"
          style={{ animationDelay: `${animationDelayStart + 0.1 * index}s` }}
        >
          {skill}
        </span>
      ))}
    </div>
  );

  return <div className="Skills">{renderSkills(software, 0)}</div>;
};

export default Skills;
