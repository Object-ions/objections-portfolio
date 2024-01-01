import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import "../../scss/_variables.scss";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Design from "../Design/Design";
import Resume from "../Resume/Resume";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  // Update the body background color when the theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.background = theme === "dark" ? "#1c1c1c" : "#e0e0e0";
  }, [theme]);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Routes>
          <Route
            path="/"
            element={<Layout theme={theme} onToggleTheme={toggleTheme} />}
          >
            <Route index element={<Home />} />
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
