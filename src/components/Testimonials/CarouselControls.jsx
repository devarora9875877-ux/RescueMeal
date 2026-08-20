import React from 'react';

const CarouselControls = ({ total, activeIndex, onNext, onPrev, onDotClick }) => {
  return (
    <div className="carousel-controls reveal-item delay-7">
      <button className="nav-arrow" onClick={onPrev} aria-label="Previous testimonial">
        &larr;
      </button>
      
      <div className="nav-dots">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button className="nav-arrow" onClick={onNext} aria-label="Next testimonial">
        &rarr;
      </button>
    </div>
  );
};

export default CarouselControls;