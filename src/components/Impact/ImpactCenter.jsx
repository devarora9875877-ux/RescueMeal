import React from 'react';
import logoIcon from '../../assets/logos/rescuemeal-logo.png';

const ImpactCenter = ({ isVisible }) => {
  return (
    <div 
      className={`impact-center-container ${isVisible ? 'animate-reveal' : ''}`}
      style={{ animationDelay: '0.45s' }}
    >
      {/* Very subtle breathing background glow */}
      <div className="center-glow"></div>
      
      {/* Concentric rings */}
      <div className="ripple ripple-1"></div>
      <div className="ripple ripple-2"></div>
      <div className="ripple ripple-3"></div>
      
      {/* Center Logo Hub */}
      <div className="center-hub">
        <img src={logoIcon} alt="RescueMeal Icon" className="center-logo-icon" />
        <h3 className="center-logo-text">RescueMeal</h3>
      </div>
    </div>
  );
};

export default ImpactCenter;