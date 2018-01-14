import React, { Component } from 'react';
import './Media.css'
import Article from '../Article/Article.js'

class Media extends Component {

  state = {
    articles: [
      {
        imageUrl: "./images/building1.jpg",
        title: <a href="https://medium.com/@thejamesmccormack/deploying-a-node-js-app-with-a-database-to-heroku-for-the-uninitiated-pt-1-66a651ed0f3a">Deploying a Node.js App with a Database to Heroku for the Uninitiated, Part 1</a>,
        blurb: "Getting your app production ready by changing hardcoded connection variables into process.ENV variables, checking your paths, and other overlooked details that will derail your process."
      },
      {
        imageUrl: "./images/divein.jpg",
        title: <a href="https://medium.com/@thejamesmccormack/deploying-a-node-js-app-with-a-database-for-the-uninitialized-part-2-9710b639f94f">Deploying a Node.js App With a Database for the Uninitialized, Part 2</a>,
        blurb: "How to go inside your Heroku project using Heroku CLI to get your database up and running!"
      }
    ]
  }

  render() {
    return (
      <div className="media-container">
        <h2 className="media-title">Media</h2>
        <div className="articles-modules">
          {this.state.articles.map(article => {
            return (
              <Article
                imageUrl={article.imageUrl}
                title={article.title}
                blurb={article.blurb}
              />
            )
          })}
        </div>
      </div>
    );
  }

}

export default Media;
