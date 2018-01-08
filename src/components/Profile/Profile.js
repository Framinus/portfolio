import React, { Component } from 'react';
import './Profile.css';

const Profile = function() {
  return (
    <div className="profile-container">
      <div className="profile-pic">
        <img className="james-pic" src="http://www.sheffield.com/wp-content/uploads/2013/06/placeholder.png" />
      </div>
      <div className="profile-text">
        <h2>
          Full Stack JavaScript Developer
        </h2>
        <p>
          I am proficient in Node.js, Express, React, PostgreSQL, Mocha/Chai, HTML and CSS. After spending about a year teaching myself JavaScript in the evenings, I decided it was time to commit to this dream and seek out mentors. I joined Learners Guild, a full time ten month program in Oakland, CA that dives into all aspects of full stack web development using JavaScript as the primary language. I have built multiple applications and have a solid understanding of RESTful APIs and Test Driven Development.
        </p>
        <p>
          I sincerely believe that learning is a life long process. I never learned to ride a bicycle as a child, so I swallowed my pride and took a class as an adult. I am now a regular rider with a touring bike and hundreds of miles under my belt. I wanted to know what it was like to travel in an RV across the country, so I bought one, fixed it up, and moved my whole life to the Bay Area over ten years ago. Experience matters, but so does the willingness to find unusual answers, solve problems, and most of all, possess the grit and humility to struggle with and prevail in unfamiliar territory. I love web development because it constantly changes and will continue to change.
        </p>
      </div>
    </div>
  )
}

export default Profile;
