import React from "react";
import "./Header.scss";

const Header = ({ onToggleTheme }) => {
  return (
    <div className="Header">
      <div>
        <h1>
          <small>$</small> moses poston
        </h1>
        <h5>{">"} Full-Stack Developer</h5>
        <h5>{">"} Designer</h5>
      </div>
      <div className="mode-control">
        <div
          className="mode-icon mode-icon-dark"
          id="dark-mode"
          onClick={() => onToggleTheme("dark")}
        ></div>
        <div
          className="mode-icon mode-icon-light"
          id="light-mode"
          onClick={() => onToggleTheme("light")}
        ></div>
      </div>
    </div>
  );
};

export default Header;
