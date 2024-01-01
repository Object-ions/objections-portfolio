import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ theme, onToggleTheme }) => {
  return (
    <div className="Layout">
      <Header onToggleTheme={onToggleTheme} />
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
