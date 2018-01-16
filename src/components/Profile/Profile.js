import React from 'react';
import './Profile.css';

const Profile = function() {
  return (
    <div className="profile-container">
      <div className="profile-pic">
        <img className="james-pic" src="./images/james_bowtie.jpg" alt="james" />
      </div>
      <div className="profile-text">
        <h2 className="profile-title">
          Full Stack JavaScript Developer
        </h2>
        <h4 className="tech-stack">
          Node.js, Express, React, PostgreSQL, Mocha/Chai, HTML and CSS.
        </h4>
        <p>
           I transitioned from self-guided learning to Learners Guild, a full time ten month program in Oakland, CA that dives into all aspects of full stack web development using JavaScript as the primary language. I have built multiple applications and have a solid understanding of RESTful APIs and Test Driven Development.
        </p>
        <p>
          I truly believe that learning is a life long process - I learned to ride a bike in my twenties! Experience matters, but so does the willingness to find unusual answers, solve problems, and most of all, possess the grit and humility to struggle and prevail in unfamiliar territory. I love web development because it constantly changes and will continue to change, affording me the opportunity to grow and change with it!
        </p>
      </div>
    </div>
  )
}

export default Profile;
