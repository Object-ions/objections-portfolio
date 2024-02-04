import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import '../../scss/_variables.scss';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Design from '../Design/Design';
import Resume from '../Resume/Resume';
// import Popup from "../Popup/Popup";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  // const [showPopup, setShowPopup] = useState(true); // State to control the visibility of the popup

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Update local storage with new theme
  };

  // Update the body background color when the theme changes
  useEffect(() => {
    document.body.style.background = theme === 'dark' ? '#111' : '#e0e0e0';
  }, [theme]);

  // Function to handle closing the popup
  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <Router>
      <div className={`App ${theme}`}>
        {/* {showPopup && <Popup onClose={handleClosePopup} />} */}
        <Routes>
          <Route
            path="/"
            element={<Layout theme={theme} onToggleTheme={toggleTheme} />}
          >
            {/* <Route index element={<Home />} /> */}
            <Route index element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="design" element={<Design />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
