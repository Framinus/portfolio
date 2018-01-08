import React, { Component } from 'react';
import './Navbar.css';

const Navbar = function() {
  return (
    <div className="navbar-container">
      <div className="nav-bar-left">
        <div className="navbar-link" id="my-name">
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
      <div className="navbar-icons">
        <i className="fa fa-envelope" aria-hidden="true"></i>
        <a href="https://www.linkedin.com/in/james-mccormack-185b0a99/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
      </div>
    </div>
  )
}

export default Navbar;
