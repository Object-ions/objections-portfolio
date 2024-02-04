import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const navItems = [
    // { name: '> Home', path: '/', isExternal: false },
    { name: '> About', path: '/about', isExternal: false },
    { name: '> Projects', path: '/projects', isExternal: false },
    // { name: "> Design", path: "/design", isExternal: false },
    // { name: '> Resume', path: '/resume', isExternal: false },
    // { name: '> Contact', path: '/contact', isExternal: false },
  ];

  const externalLinks = [
    {
      name: '(Resume)',
      path: 'https://drive.google.com/file/d/1sXeOtBsyWzf7daNvbpPvVvp1umpgK2nn/view?usp=drive_link',
    },
    { name: '(GitHub)', path: 'https://github.com/Object-ions' },
    { name: '(LinkedIn)', path: 'https://www.linkedin.com/in/moses-a-p/' },
  ];

  return (
    <div className="Navbar">
      <ul className="site-nav">
        {navItems.map((item, index) => (
          <li
            key={item.name}
            className="animate__animated animate__fadeInLeft"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item.isExternal ? (
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
      <ul className="ex-links">
        {externalLinks.map((link, index) => (
          <li
            key={link.name}
            className="animate__animated animate__fadeInLeft"
            style={{ animationDelay: `${(navItems.length + index) * 0.1}s` }}
          >
            <a href={link.path} target="_blank" rel="noopener noreferrer">
              {link.name}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
