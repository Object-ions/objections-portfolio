import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (newTheme) => {
    setTheme(newTheme); // Fixed to use newTheme instead of "newTheme"
  };

  return (
    <div className={`Layout ${theme}`}>
      <Header onToggleTheme={toggleTheme} />
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
