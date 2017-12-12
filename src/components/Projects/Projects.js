import React, { component } from 'react';
import './Projects.css';
import Displaycube from '../Displaycubes/Displaycube.js';

const Projects = function() {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">
        Projects
      </h2>
      <div className="projects-modules">
        <Displaycube />
        <Displaycube />
        <Displaycube />
      </div>
    </div>
  );
}

export default Projects;
