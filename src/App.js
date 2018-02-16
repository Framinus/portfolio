import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Media from './components/Media/Media';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    let imgUrl = './images/whitetexture.jpg'
    let style = {
        root: {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
        }
      }
    return (
      <div className="App" style={style.root}>
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
