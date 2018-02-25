import React from 'react';
import './Profile.css';



const Profile = function() {


  return (
    <div className="profile-container">
      <div className="profile-text">
        <h2 className="profile-title">
          Full Stack JavaScript Developer
        </h2>
        <h4 className="tech-stack">
          Node, Express, React, PostgreSQL, Mocha/Chai, Jest, Git.
        </h4>
        <p>
          Curious by nature, with the grit and humility to find new solutions, dive into the unknown, and work in collaboration with other wonderful folks. I love both the planning stages of a new project and the satisfaction of building it out, piece by piece, rigorously documenting my process. I have created and interpreted wireframes, made ERDs to map out my schema, and set up and worked through project boards on GitHub.
        </p>
        <p>
          I learned to ride a bike as an adult. I taught myself how to code, and then left my old career behind to intensively study and build projects with other new developers for ten months. I am constantly refactoring my life to add new experiences, skills and adventures. Let's work together!
        </p>
      </div>
    </div>
  )
}

export default Profile;
