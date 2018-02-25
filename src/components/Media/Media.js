import React, { Component } from 'react';
import './Media.css'
import Article from '../Article/Article.js'

class Media extends Component {

  state = {
    articles: [
      {
        imageUrl: "./images/token.png",
        title: <a href="https://medium.com/@thejamesmccormack/server-side-json-web-token-implementation-with-postgresql-and-node-7278eb9dc1b2">Server Side JSON Web Token Implementation with PostgreSQL and Node.</a>,
        blurb: "Follow along with this step-by-step, multi-file process to implement the server side setup of JSON web tokens in a Node, Express and PostgreSQL application."
      },
      {
        imageUrl: "./images/building1.jpg",
        title: <a href="https://medium.com/@thejamesmccormack/deploying-a-node-js-app-with-a-database-to-heroku-for-the-uninitiated-pt-1-66a651ed0f3a">Deploying a Node.js App with a Database to Heroku for the Uninitiated, Part 1</a>,
        blurb: "Get your app production ready by changing hardcoded connection variables into process.ENV variables, checking your paths, and attending to other overlooked details that will derail your process."
      },
      {
        imageUrl: "./images/divein.jpg",
        title: <a href="https://medium.com/@thejamesmccormack/deploying-a-node-js-app-with-a-database-for-the-uninitialized-part-2-9710b639f94f">Deploying a Node.js App With a Database for the Uninitialized, Part 2</a>,
        blurb: "Learn how to go inside your Heroku project using Heroku CLI to get your database up and running! You will learn how to load your schema and seed files from the bash terminal on Heroku's server."
      },
    ]
  }

  render() {
    return (
      <div className="media-container">
        <h2 className="media-title">Media</h2>
        <div className="articles-modules">
          {this.state.articles.map((article, index) => {
            return (
              <Article
                key={index}
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
