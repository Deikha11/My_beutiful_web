// src/components/TestimonialsSection.jsx
import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for this component

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Working with My Beautiful Website was an absolute pleasure. They transformed our vision into a stunning, highly functional website that exceeded all our expectations. Their attention to detail and creative solutions are truly unparalleled.",
      name: "Aisha Mohamed",
      title: "CEO, TechInnovate",
      avatar: "/images/client_avatar1.png"
    },
    {
      quote: "The team delivered an exceptional e-commerce platform that significantly boosted our sales. Their expertise in web development and dedication to our project made all the difference. Highly recommended!",
      name: "Omar Yusuf",
      title: "Founder, GreenMarket",
      avatar: "/images/client_avatar2.png"
    },
    {
      quote: "I was looking for a unique and engaging blog design, and My Beautiful Website delivered beyond my wildest dreams. The site is beautiful, easy to navigate, and perfectly captures my brand's voice. Fantastic work!",
      name: "Fatima Hassan",
      title: "Blogger & Content Creator",
      avatar: "/images/client_avatar3.png"
    }
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="section-description">
          Hear directly from businesses and individuals who have experienced the magic of our web solutions.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">
                <i className="fa-solid fa-quote-right"></i> {/* Font Awesome quote icon */}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="client-info">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="client-avatar"
                />
                <div className="client-details">
                  <p className="client-name">{testimonial.name}</p>
                  <p className="client-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;