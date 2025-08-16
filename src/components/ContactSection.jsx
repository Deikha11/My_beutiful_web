// src/components/ContactSection.jsx
import React from 'react';
import './ContactSection.css'; // Importing CSS for this component

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Halkan waxaad ku dari kartaa logic-ka dirista foomka
    // Tusaale: xogta foomka oo la ururiyo lana diro API
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset(); // Clear the form after submission
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="section-description">
          Have a project in mind or just want to say hello? Fill out the form below or reach out directly!
        </p>
        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button type="submit" className="cta-button">Send Message <i className="fa-solid fa-paper-plane"></i></button>
            </form>
          </div>
          <div className="contact-info-details">
            <h3>Contact Information</h3>
            <p><i className="fa-solid fa-envelope"></i> Email: <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></p>
            <p><i className="fa-solid fa-phone"></i> Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p><i className="fa-solid fa-location-dot"></i> Address: 123 Creative Lane, Web City, WC 90210</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;