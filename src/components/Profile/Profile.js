import React from 'react';
import './Profile.css';



const Profile = function() {
  return (
    <div className="profile-container">
      <div className="profile-text">
        <h2 className="profile-title">
          Software Engineer.  Writer.  Adventurer.
        </h2>
        <div className="profile-blurbs">
          <p className="tech-stack">
            JavaScript &#8226; Node &#8226; Express &#8226; React &#8226; Redux &#8226; PostgreSQL &#8226; Mocha/Chai &#8226; Jest &#8226; Webpack &#8226; HTML &#8226; CSS &#8226; Git
          </p>
          <div className="profile-story-container">
            <p className="profile-story">
              I began my JavaScript journey in 2016, working for hours on CodeAcademy and freeCodeCamp tutorials. After completing a few projects on CodePen, I realized that I wanted to immerse myself in a community of learners and professional mentors. Over 1,000 GitHub contributions and many projects later, I have developed a love of learning, testing and building within a community.
            </p>
            <p className="profile-story">
             If I don't know how to do something, I study it and master it, endlessly looking for improvements to my technique. Riding a bike for the first time at age 29? No problem. (I now ride a touring bike.) Driving across the country in an old RV? I read all the manuals and <a href="http://crosscountrydolphin.blogspot.com/2008/05/few-pictures.html" target="_blank" rel="noopener noreferrer">lived the tale</a>. Software engineering allows endless possibilities for growth! 
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
