// src/components/ServicesSection.jsx
import React from 'react';
import './ServicesSection.css'; // Importing CSS for this component

function ServicesSection() {
  const services = [
    {
      iconClass: "fa-solid fa-palette",
      title: "Creative Web Design",
      description: "We craft visually stunning and user-friendly websites that capture your brand's essence and engage your audience."
    },
    {
      iconClass: "fa-solid fa-code",
      title: "Robust Web Development",
      description: "From front-end to back-end, we build scalable, secure, and high-performance web applications tailored to your needs."
    },
    {
      iconClass: "fa-solid fa-bullhorn",
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility and reach your target audience with our comprehensive search engine optimization and digital marketing strategies."
    },
    {
      iconClass: "fa-solid fa-cart-shopping",
      title: "E-commerce Solutions",
      description: "Launch and grow your online store with our bespoke e-commerce platforms, designed for seamless shopping experiences."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-description">
          We offer a wide range of web solutions, from captivating designs to powerful functionalities, ensuring your online presence stands out.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <i className={`service-icon ${service.iconClass}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;