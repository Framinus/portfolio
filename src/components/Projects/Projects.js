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
      },
      {
        imageUrl: "./images/simon-teaser-2.jpg",
        title: "Patterns - A Memory Game",
        description: "An interactive game made with JavaScript.",
        siteLink: "https://patterns-memory-game.herokuapp.com/",
        gitLink: "https://github.com/Framinus/simon-game"
      },
      {
        imageUrl: "./images/old-oakland-books.png",
        title: "Old Oakland Books",
        description: "A book catalog site built in React and Express.",
        siteLink: "https://old-oakland-books.herokuapp.com",
        gitLink: "https://github.com/Framinus/old-oakland-books"
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
          {this.state.projects.map((project, index) => {
            return (
              <Displaycube
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              siteLink={project.siteLink}
              gitLink={project.gitLink}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
