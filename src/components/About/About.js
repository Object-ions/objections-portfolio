import React from "react";
import "./About.scss";
import Skills from "../Skills/Skills";

const About = () => {
  const paragraphs = [
    "I'm a Full-Stack Developer with a unique blend of skills in programming and design.",
    "With a Bachelor's degree in Industrial Design, I bring a creative approach to programming.",
    "My proficiency extends to integrating AI solutions, underlining my commitment to innovation in technology. I'm a proven leader, adept at problem-solving and creating impactful technological solutions.",
  ];

  return (
    <div className="About">
      <h3
        className="animate__animated animate__fadeInRight"
        style={{ animationDelay: "0.1s" }}
      >
        Hey, my name is Moses
      </h3>
      {paragraphs.map((content, index) => (
        <p
          key={index}
          className="animate__animated animate__fadeInRight"
          style={{ animationDelay: `${0.1 * (index + 1)}s` }}
        >
          {content}
        </p>
      ))}
      <p
        className="animate__animated animate__fadeInRight"
        style={{ animationDelay: `${0.1 * (paragraphs.length + 1)}s` }}
      >
        My expertise includes:
      </p>
      <Skills />
    </div>
  );
};

export default About;
