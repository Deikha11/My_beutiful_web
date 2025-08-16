// src/components/Header.jsx
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <a href="/">Your **Brand Logo** Here</a>
          {/* Optional: You can put an image logo here */}
          {/* <img src="/images/logo.png" alt="Your Brand Logo" /> */}
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="cta-button">Get Started</button>
      </div>
    </header>
  );
}

export default Header;