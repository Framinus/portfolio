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
        imageUrl: "./images/dominion-teaser2.jpg",
        title: "Dominion Deck Builder",
        description: "A tool used to select, save and review deck sets for the game Dominion, built in Node.js and Express.",
        siteLink: "https://www.google.com",
        gitLink: "https://github.com/Framinus/dominion-deck"
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
          {this.state.projects.map(project => {
            return (
              <Displaycube
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
