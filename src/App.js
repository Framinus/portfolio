import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Media from './components/Media/Media';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Profile />
        <Projects />
        <Media />
      </div>
    );
  }
}

export default App;
