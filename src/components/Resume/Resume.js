import React from "react";
import "./Resume.scss";
import resumeData from "../../data/resume.json";
import Skills from "../Skills/Skills";

const Resume = () => {
  const { about, education, experience } = resumeData;

  return (
    <div className="Resume">
      <div className="resume-header">
        <h2>Moshe Atia Poston</h2>
        <p>Portland, OR, USA</p>
      </div>

      <h3>About</h3>
      <hr />
      {about.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <h3>Education</h3>
      <hr />
      {education.map((edu, index) => (
        <div key={index}>
          <h4>{edu.title}</h4>
          <p>
            {edu.institution} ({edu.duration})
          </p>
          <ul>
            {edu.details.map((detail, dIndex) => (
              <li key={dIndex}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>Professional Experience</h3>
      <hr />
      {experience.map((exp, index) => (
        <div key={index}>
          <h4>{exp.title}</h4>
          <p>
            {exp.company} ({exp.duration})
          </p>
          <ul>
            {exp.details.map((detail, dIndex) => (
              <li key={dIndex}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="skills">
        <h3>Skills</h3>
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
