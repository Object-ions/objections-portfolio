import React from "react";
import "./Home.scss";
import "animate.css";

const HeaderPart = ({ text, id, special, delay }) => {
  const style = {
    animationDelay: `${delay}s`,
  };

  return (
    <h2
      id={id}
      className={`${
        special ? "special-font" : ""
      } animate__animated animate__fadeInDown`}
      style={style}
    >
      {text}
    </h2>
  );
};

const Home = () => {
  const headerParts = [
    "from",
    "the world",
    "of",
    "industrial",
    "DESIGN",
    "to",
    "the dynamic",
    "realm of",
    "TECHNOLOGY",
    "my journey blends creativity",
    "with tech",
    "expertise.",
  ];

  return (
    <div className="home">
      {headerParts.map((text, index) => (
        <HeaderPart
          key={index}
          text={text}
          id={`header-${index + 1}`}
          special={index === 3 || index === 4 || index === 8}
          delay={0.5 + 0.3 * index}
        />
      ))}
    </div>
  );
};

export default Home;
