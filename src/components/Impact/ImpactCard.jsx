import React from 'react';

const ImpactCard = ({ data, isVisible }) => {
  // Top row: 0.6s, Mid row: 0.75s, Bottom row: 0.9s
  const cardDelay = 0.45 + (data.row * 0.15); 

  return (
    <div 
      className={`impact-card ${data.positionClass} ${isVisible ? 'animate-reveal' : ''}`}
      style={{ animationDelay: `${cardDelay}s` }}
    >
      <div className="card-icon">{data.icon}</div>
      <div className="card-content">
        <h3 className="card-number">{data.number}</h3>
        <h4 className="card-title">{data.title}</h4>
        <p className="card-desc">{data.description}</p>
      </div>
    </div>
  );
};

export default ImpactCard;