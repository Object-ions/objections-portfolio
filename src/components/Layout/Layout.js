import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`Layout ${theme}`}>
      <Header onToggleTheme={toggleTheme} />
      <div className="content">
        <Navbar />
        <div className="page">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
