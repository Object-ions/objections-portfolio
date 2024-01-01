import React from "react";
import "./Header.scss";
import "animate.css";

const Header = ({ onToggleTheme }) => {
  const animationClass = "animate__animated animate__fadeInUp";

  // Animate the header with 0.1 sec delay
  const getAnimationDelay = (delaySec) => {
    const style = { animationDelay: `${delaySec}s` };
    return { className: animationClass, style };
  };

  return (
    <div className="Header">
      <div>
        <h1 {...getAnimationDelay(0)}>
          <small>$</small> moses poston
        </h1>
        <h5 {...getAnimationDelay(0.1)}>{">"} Full-Stack Developer</h5>
        <h5 {...getAnimationDelay(0.2)}>{">"} Designer</h5>
      </div>
      <div
        {...getAnimationDelay(0.3)}
        className={`mode-control ${animationClass}`}
      >
        <div
          className="mode-icon mode-icon-dark"
          id="dark-mode"
          onClick={() => onToggleTheme("dark")}
        ></div>
        <p>Dark</p>
        <div
          className="mode-icon mode-icon-light"
          id="light-mode"
          onClick={() => onToggleTheme("light")}
        ></div>
        <p>Light</p>
      </div>
    </div>
  );
};

export default Header;
