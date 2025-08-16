// src/App.jsx
import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection'; // Import the ContactSection component

import TestimonialsSection from './components/TestimonialsSection'; // Import the TestimonialsSection component

// ... import other components as you create them
import './App.css';

function App() {
  // Function to handle scroll animations
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection /> 
        <TestimonialsSection/>
        <ContactSection/>
        {/* Use the PortfolioSection component here */}

        {/* Testimonials Section - Remove inline styles */}
        

        {/* Contact Section - Remove inline styles */}
      </main>

      {/* Footer - Remove inline styles */}
      <footer className="main-footer" style={{backgroundColor: 'var(--primary-color)', color: 'var(--white-color)', padding: '40px 20px', textAlign: 'center'}}>
        <p>&copy; 2025 My Beautiful Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;