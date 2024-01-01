import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/projects"}>projects</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://github.com/Object-ions" target="blank">
            Code
          </a>
        </li>
        <li>
          <Link to={"/design"}>Design</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={"/resume"}>Online Resume</Link>{" "}
        </li>
        <li>
          <a href="#">Download Resume</a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
