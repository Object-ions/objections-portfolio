import React from "react";
import "animate.css";

import resumeData from "../../data/resume.json";

const Skills = () => {
  const { software, programming } = resumeData.skills;

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

  return (
    <div>
      {renderSkills(software, 0)}
      {renderSkills(programming, 0)}
    </div>
  );
};

export default Skills;
