import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import "animate.css";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/", isExternal: false },
    { name: "About", path: "/about", isExternal: false },
    { name: "Contact", path: "/contact", isExternal: false },
    { name: "Projects", path: "/projects", isExternal: false },
    { name: "Design", path: "/design", isExternal: false },
    {
      name: "GitHub",
      path: "https://github.com/Object-ions",
      isExternal: true,
    },
    { name: "Resume", path: "/resume", isExternal: false },
  ];

  return (
    <div className="Navbar">
      <ul className="site-nav">
        {navItems.map((item, index) => {
          const delay = `${index * 0.1}s`;
          const animationClasses = "animate__animated animate__fadeInLeft";
          const style = { animationDelay: delay };

          return (
            <li key={item.name} className={animationClasses} style={style}>
              {item.isExternal ? (
                <a href={item.path} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
