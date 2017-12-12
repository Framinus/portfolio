import React, { component } from 'react';
import './Displaycube.css';

const Displaycube = function() {
  return (
    <div className="displaycube-container">
      <img className="project-teaser" src="./images/roam-teaser-2.jpg" />
      <span className="project-title">
        <p>
          Roam
        </p>
      </span>
      <span className="project-script">
        <p>
          A travel review site made with Node, Express, and PostgreSQL.
        </p>
      </span>
    </div>
  );
}

export default Displaycube;
