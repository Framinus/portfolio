import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Media from './components/Media/Media';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Profile />
        <a name="projects"></a>
        <Projects />
        <a name="media"></a>
        <Media />
        <Footer />
      </div>
    );
  }
}

export default App;
