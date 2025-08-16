// src/components/PortfolioSection.jsx
import React from 'react';
import './PortfolioSection.css'; // Importing CSS for this component

function PortfolioSection() {
  const projects = [
    {
      image: "/images/portfolio_project1.png",
      title: "E-commerce Redesign",
      description: "A sleek and intuitive online store designed for a premium brand.",
      link: "#" // You can add actual project links here
    },
    {
      image: "/images/portfolio_project2.png",
      title: "Interactive Blog Platform",
      description: "A dynamic and user-friendly blog platform for content creators.",
      link: "#"
    },
    {
      image: "/images/portfolio_project3.png",
      title: "Corporate Website",
      description: "Building a professional online presence for a leading firm.",
      link: "#"
    }
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>Our Portfolio</h2>
        <p className="section-description">
          Explore our diverse collection of web projects, showcasing our expertise in design and development.
        </p>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="view-project-button" target="_blank" rel="noopener noreferrer">
                  View Project <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;