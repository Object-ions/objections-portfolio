import React from "react";
import "./Resume.scss";
import resumeData from "../../data/resume.json";
import Skills from "../Skills/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const { education } = resumeData;
  // const { about, education, experience } = resumeData;

  const getAnimationClass = (index) => ({
    className: "animate__animated animate__fadeInRight",
    style: { animationDelay: `${index * 0.1}s` },
  });

  return (
    <div className="Resume">
      <div className="resume-header" {...getAnimationClass(0)}>
        <h2>Moshe Atia Poston</h2>
        <p>Portland, OR, USA</p>
      </div>

      {/* About */}
      {/* <div className="about">
        <h3>About</h3>
        <hr />
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div> */}

      {/* Education */}
      <div className="education" {...getAnimationClass(1)}>
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
      </div>

      {/* Experience */}
      {/* <div className="experience">
        <h3>Professional Experience</h3>
        <hr />
        {experience.map((exp, index) => (
          <div key={index}>
            <div className="company-duration">
              <h4>{exp.title}</h4>

              <p>
                {exp.company} ({exp.duration})
              </p>
            </div>
            <ul>
              {exp.details.map((detail, dIndex) => (
                <li key={dIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}

      {/* Skills */}
      <div className="skills" {...getAnimationClass(2)}>
        <h3>Skills</h3>
        <hr />
        <Skills />
      </div>

      <div
        className="resume animate__animated animate__fadeInUp"
        style={{ animationDelay: `${(education.length + 3) * 0.1}s` }}
      >
        <a href="https://drive.google.com/file/d/1sXeOtBsyWzf7daNvbpPvVvp1umpgK2nn/view?usp=drive_link">
          Download Full Resume
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
    </div>
  );
};

export default Resume;
