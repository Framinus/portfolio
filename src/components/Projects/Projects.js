import React, { Component } from 'react';
import './Projects.css';
import Displaycube from '../Displaycubes/Displaycube.js';

class Projects extends Component {
  state = {
    projects: [
      {
        imageUrl: "./images/roam-teaser-2.jpg",
        title: "Roam",
        description: "A travel review site made with Node, Express, and PostgreSQL.",
        siteLink: "https://roam-travel-site.herokuapp.com/",
        gitLink: "https://github.com/Framinus/roam"
      }
    ]
  }

  render() {
    return (
      <div className="projects-container" id="projects">
        <h2 className="projects-title">
          Projects
        </h2>
        <div className="projects-modules">
          <Displaycube 
            title={this.state.projects[0].title}
            imageUrl={this.state.projects[0].imageUrl}
            description={this.state.projects[0].description}
            siteLink={this.state.projects[0].siteLink}
            gitLink={this.state.projects[0].gitLink}
            />
        </div>
      </div>
    );
  }
}

export default Projects;
