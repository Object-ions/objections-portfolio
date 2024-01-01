import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="site-nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
      </ul>
      <ul className="boxed-portfolio">
        <li>
          <a href="https://github.com/Object-ions" target="blank">
            Code
          </a>
        </li>
        <li>
          <Link to={"/design"}>Design</Link>
        </li>
      </ul>
      <ul className="resume">
        <li>
          <Link to={"/resume"}>Resume</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
