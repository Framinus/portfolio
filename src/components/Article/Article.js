import React from 'react';
import './Article.css'

const Article = function(props) {
  return (
    <div className="article-container">
      <img className="article-pic" src={props.imageUrl} alt="article teaser" />
      <div className="article-text-container">
        <h3 className="article-title">{props.title}</h3>
        <p className="article-blurb">{props.blurb}</p>
      </div>
    </div>
  );
}

export default Article;
