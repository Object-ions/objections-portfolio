import React from 'react';
import './About.scss';
import Home from '../Home/Home';

const About = () => {
  const paragraphs = [
    'Full-Stack developer and designer. Dynamic and highly-motivated, forward-thinking and adaptable to new technologies with a strong design background. A collaborative team player with excellent problem-solving skills and a sharp eye for detail and accuracy in execution. I thrive in environments where juggling multiple tasks and projects is the norm, and I find motivation in working under pressure. Equipped with diverse work experience, I am a self-starter and eager to expand my knowledge, constantly seeking new challenges and opportunities to grow.',
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
