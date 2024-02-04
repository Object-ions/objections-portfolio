import React from 'react';
import './About.scss';
import Home from '../Home/Home';

const About = () => {
  const paragraphs = [
    "I'm a Full-Stack Developer with a blend of skills in programming and design.",
    "With a Bachelor's degree in Industrial Design, I bring a creative approach to programming.",
    "My proficiency extends to integrating AI solutions, underlining my commitment to innovation in technology. I'm a proven leader, adept at problem-solving and creating impactful technological solutions.",
  ];

  return (
    <div className="meta-about">
      <Home />
      <div
        className="About animate__animated animate__fadeInDown"
        style={{ animationDelay: '2.5s' }}
      >
        <h3>Hi, my name is Moses</h3>
        {paragraphs.map((content) => (
          <p>{content}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
