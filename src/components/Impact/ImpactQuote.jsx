import React from 'react';

const ImpactQuote = ({ isVisible }) => {
  return (
    <div className="impact-quote-section">
      <p 
        className={`impact-quote ${isVisible ? 'animate-reveal' : ''}`}
        style={{ animationDelay: '1.1s' }}
      >
        "One rescued meal does far more than satisfy hunger. It strengthens communities, 
        protects our planet, and inspires kindness."
      </p>
      
      {/* Bottom decorative line */}
      <div 
        className={`bottom-decorative-line ${isVisible ? 'animate-reveal' : ''}`}
        style={{ animationDelay: '1.25s' }}
      ></div>
    </div>
  );
};

export default ImpactQuote;