// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Importing CSS for this component

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-overlay"></div> {/* For a subtle overlay effect */}
      <img
        src="/images/hero_background.png" // Path to your generated image
        alt="Beautiful minimalist landscape"
        className="hero-background-image"
      />
      <div className="hero-content container">
        <h1>Welcome to Our Creative World</h1>
        <p>Crafting beautiful and functional web experiences that elevate your brand.</p>
        <button className="cta-button">Explore Our Work</button>
      </div>
    </section>
  );
}

export default HeroSection;