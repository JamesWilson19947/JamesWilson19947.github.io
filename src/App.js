import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Contact from './Contact.js'; 
import Portfolio from './Portfolio.js'; 
import Me from "./me.png";
import './App.css';
import './pure-min.css';
import './Parallax.css';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

 
function App() {
  return (
    <BrowserRouter>
<div>
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" type="text/css" />

        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>

      </div>
      <div className="header">
          <div className="Me">
            <img src={Me} alt="James Wilson" />
          </div>
          <h1>James Wilson</h1> 
          <h3>A Cloud Engineer From Bath, England</h3>
          <div className="social">
            <ul>
              <a href="https://www.facebook.com/jamesphilipwilson"><FaFacebook /></a>
              <a href="https://twitter.com/james_wilson21"><FaTwitter /></a>
              <a href="https://github.com/JamesWilson19947"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/jpwilson/"><FaLinkedin /></a>
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
        <p> Made with NodeJs & Reactby me with <FaHeart /> from Bath, Deployed using Travis CI | <a href="https://github.com/JamesWilson19947/JamesWilson19947.github.io/">View the source code</a> </p> 
      </div>

    </BrowserRouter>
  );
}
 
export default App;
