import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from './testimonialsData';
import './Testimonials.css';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const total = testimonials.length;

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Autoplay (pauses on hover)
  useEffect(() => {
    if (!isVisible || isHovered) return;
    const timer = setInterval(() => setActive((prev) => (prev + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [isVisible, isHovered, total]);

  // The Math: Determines exactly where each card goes
  const getPos = (index) => {
    if (index === active) return 'center';
    if (index === (active - 1 + total) % total) return 'left';
    if (index === (active + 1) % total) return 'right';
    return 'hidden';
  };

  return (
    <section 
      ref={sectionRef} 
      className={`testimonials-section ${isVisible ? 'show' : ''}`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="testimonials-header">
        <span className="badge">TESTIMONIALS</span>
        <h2>What Our Community<br/>Says</h2>
        <p className="subtitle">
          Hear from restaurant owners, volunteers, NGO partners, and families whose lives<br/>
          have been positively impacted through RescueMeal.
        </p>
      </div>

      <div className="carousel-container">
        {testimonials.map((test, index) => (
          <div key={test.id} className={`testimonial-card ${getPos(index)}`}>
            
            <div className="stars">
              {/* Renders 5 stars */}
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            
            <p className="quote">"{test.quote}"</p>
            
            <div className="author-info">
              <img src={test.image} alt={test.name} className="author-avatar" />
              <div className="author-details">
                <h4 className="author-name">{test.name}</h4>
                <span className="author-title">{test.title}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="nav-arrow" onClick={() => setActive((p) => (p - 1 + total) % total)}>
          ←
        </button>
        
        <div className="nav-dots">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              className={`nav-dot ${i === active ? 'active' : ''}`} 
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        <button className="nav-arrow" onClick={() => setActive((p) => (p + 1) % total)}>
          →
        </button>
      </div>
    </section>
  );
}