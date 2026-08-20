import React from 'react';

const TestimonialCard = ({ testimonial, positionClass }) => {
  return (
    <div className={`testimonial-card ${positionClass}`}>
      <div className="card-content">
        <div className="stars">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <span key={i} className="star">★</span>
          ))}
        </div>
        <p className="quote">"{testimonial.quote}"</p>
        <div className="author-info">
          <img src={testimonial.image} alt={testimonial.name} className="author-image" />
          <div className="author-details">
            <h4 className="author-name">{testimonial.name}</h4>
            <p className="author-title">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;