import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import '../../scss/_variables.scss';
import Layout from '../Layout/Layout';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Design from '../Design/Design';

const App = () => {
  const [theme] = useState(localStorage.getItem('theme') || 'dark');

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="design" element={<Design />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
