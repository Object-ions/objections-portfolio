import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Header from './Header';
import Navbar from './Navbar';
import VideoBackground from '../Video/VideoBackground';

const Layout = ({ theme, onToggleTheme }) => {
  return (
    <div className="Layout">
      <VideoBackground />
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
