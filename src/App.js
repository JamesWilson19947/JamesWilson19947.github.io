import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Contact from './Contact.js'; 
import Portfolio from './Portfolio.js'; 
import Me from "./me.png";
import './App.css';
import './pure-min.css';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

 
function App() {
  return (
    <BrowserRouter>
      <div className="header">
          <div className="Me">
            <img src={Me} alt="James Wilson" />
          </div>
          <h1>James Wilson</h1> 
          <h3>A Cloud Engineer From Bath, England</h3>
          <center><h5><a href="https://github.com/JamesWilson19947/JamesWilson19947.github.io/">Site crafted using NodeJS/React</a>, Automatically Deployed via Travis <br></br><br></br>
          <a href="https://travis-ci.org/JamesWilson19947/JamesWilson19947.github.io"><img src="https://api.travis-ci.org/JamesWilson19947/JamesWilson19947.github.io.svg?branch=dev" alt="travis"/> </a> 
          <a href="https://www.gnu.org/licenses/gpl-3.0"><img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="license"/> </a>
          <a href="https://github.com/JamesWilson19947/JamesWilson19947.github.io/issues"><img src="https://img.shields.io/github/issues/JamesWilson19947/JamesWilson19947.github.io" alt="issues"/> </a>
          <a href="https://github.com/JamesWilson19947/JamesWilson19947.github.io/commits/dev"><img src="https://img.shields.io/github/last-commit/JamesWilson19947/JamesWilson19947.github.io/dev" alt="issues"/> </a>
          </h5></center>
          <div className="social">
            <ul>
              <a href="https://www.facebook.com/jamesphilipwilson"><li><FaFacebook /></li></a>
              <a href="https://twitter.com/james_wilson21"><li><FaTwitter /></li></a>
              <a href="https://github.com/JamesWilson19947"><li><FaGithub /></li></a>
              <a href="https://www.linkedin.com/in/jpwilson/"><li><FaLinkedin /></li></a>
            </ul>
          </div>
      </div>

      <div id="layout">
        <div className="header">
          <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><Link to="/" className="pure-menu-link">About</Link></li>
              <li className="pure-menu-item"><Link to="/contact" className="pure-menu-link">Contact</Link></li>
            </ul>
          </div>
        </div>         
      </div>

      <Route exact path="/" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      
      <div className="footer">
        <div className="pure-g">
          <center>
            <p> Made with NodeJs & Reactby me with <FaHeart /> from Bath. <br></br>
            Deployed using Travis CI 
            <img src="https://api.travis-ci.org/JamesWilson19947/JamesWilson19947.github.io.svg?branch=dev" alt="new"/>
            <br></br>
            | <a href="https://github.com/JamesWilson19947/JamesWilson19947.github.io/">View the source code</a> </p>
          </center>
        </div>
      </div>

    </BrowserRouter>
  );
}
 
export default App;
