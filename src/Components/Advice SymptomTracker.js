// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css'; 

const Sidebar = () => {
    return (
      <div className="sidebar">
      <h2>Ability Allies</h2>
      <nav>
          <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/login">Log In</Link></li>
          </ul>
      </nav>
  </div>
);
};

export default Sidebar;