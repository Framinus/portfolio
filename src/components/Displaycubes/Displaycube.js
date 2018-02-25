import React from 'react';
import './Displaycube.css';

const Displaycube = function(props) {
  return (
    <div className="displaycube-container">
      <a href={props.siteLink}>
        <img className="project-teaser" src={props.imageUrl} alt="website screenshot" />
      </a>
      <span className="project-title">
        <p>
          {props.title}
        </p>
      </span>
      <span className="project-script">
        <p>
          {props.description}
        </p>
      </span>
      <span className="project-links">
        <a href={props.siteLink} target="_blank">Site</a> &nbsp; | &nbsp;
        <a href={props.gitLink} target="_blank">GitHub</a>
      </span>
    </div>
  );
}

export default Displaycube;
