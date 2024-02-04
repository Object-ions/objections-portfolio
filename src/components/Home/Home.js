import React from 'react';
import './Home.scss';

const HeaderPart = ({ text, id, special, delay }) => {
  const style = {
    animationDelay: `${delay}s`,
  };

  return (
    <h2
      id={id}
      className={`${
        special ? 'special-font' : ''
      } animate__animated animate__fadeInDown`}
      style={style}
    >
      {text}
    </h2>
  );
};

const Home = () => {
  const headerParts = [
    'from',
    'DESIGN',
    'to',
    'TECHNOLOGY.',
    'I am a full-stack developer',
    'with a sharp eye for details.',
  ];

  return (
    <div className="Home">
      {headerParts.map((text, index) => (
        <HeaderPart
          key={index}
          text={text}
          id={`header-${index + 1}`}
          delay={0.5 + 0.3 * index}
        />
      ))}
    </div>
  );
};

export default Home;
