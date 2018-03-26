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
              I am an avid coder with a non-traditional background and a story to tell. I got my B.A. in <a href="http://qcpages.qc.cuny.edu/Political_Science/" target="_blank" rel="noopener noreferrer">Political Science</a>, can hold a great conversation about resource distribution, and have worked in the real world, solving problems and training leaders for years.
            </p>
            <p className="profile-story">
              I am a queer and trans man who has shaped and reshaped his own life. If I don't know how to do something, I study it and master it, endlessly looking for improvements to my technique. Riding a bike for the first time at age 29? No problem. (I now ride a touring bike.) Driving across the country in an old RV? I read all the manuals and <a href="http://crosscountrydolphin.blogspot.com/2008/05/few-pictures.html" target="_blank" rel="noopener noreferrer">lived the tale</a>. Picking up a JavaScript tutorial and deciding this was an essential part of my life? That was me, two years ago. I am ready to write the next chapter!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
