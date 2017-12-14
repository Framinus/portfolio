import React, { Component } from 'react';
import './Navbar.css';

const Navbar = function() {
  return (
    <div className="navbar-container">

        <div className="navbar-link my-name">
          James McCormack
        </div>
        <div className="navbar-link">
          <a name="#projects">
            Projects
          </a>
        </div>
        <div className="navbar-link">
          <a href="https://medium.com/@thejamesmccormack" target="_blank">
            Medium
          </a>
        </div>
        <div className="navbar-link">
          <a href="https://github.com/Framinus/" target="_blank">
            GitHub
          </a>
        </div>

    </div>
  )
}

export default Navbar;
