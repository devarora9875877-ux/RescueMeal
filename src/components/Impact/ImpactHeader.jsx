import React from 'react';

const ImpactHeader = ({ isVisible }) => {
  return (
    <header className="impact-header">
      <div 
        className={`impact-badge ${isVisible ? 'animate-reveal' : ''}`} 
        style={{ animationDelay: '0s' }}
      >
        OUR IMPACT
      </div>
      
      <h2 
        className={`impact-heading ${isVisible ? 'animate-reveal' : ''}`} 
        style={{ animationDelay: '0.15s' }}
      >
        One Meal. <span className="text-teal">Thousands of Lives Changed.</span>
      </h2>
      
      <p 
        className={`impact-subheading ${isVisible ? 'animate-reveal' : ''}`} 
        style={{ animationDelay: '0.3s' }}
      >
        Every rescued meal creates a ripple effect of positive change. We're not just
        feeding people; we're nourishing communities and healing the planet through
        sustainable action.
      </p>
    </header>
  );
};

export default ImpactHeader;