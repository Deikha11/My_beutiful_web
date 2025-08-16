// src/components/AboutSection.jsx
import React from 'react';
import './AboutSection.css'; // Importing CSS for this component

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <div className="about-image">
          <img
            src="/images/about_team.png" // Path to your generated image
            alt="Our creative team"
            className="team-photo"
          />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to My Beautiful Website, where creativity meets functionality. We are a passionate team of web designers and developers dedicated to crafting unique and engaging online experiences. Our mission is to help businesses and individuals bring their digital visions to life with elegant and effective solutions.
          </p>
          <p>
            With years of experience in the industry, we pride ourselves on our meticulous attention to detail, innovative design approaches, and commitment to client satisfaction. We believe in building long-lasting relationships and delivering results that truly make an impact.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;