import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Animated Background Mesh */}
      <div className="bg-glow teal-glow"></div>
      <div className="bg-glow blue-glow"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title fade-up-1">
            Rescue Food.<br />
            <span className="text-accent">Feed Hope.</span>
          </h1>
          <p className="hero-subtitle fade-up-2">
            A technology platform connecting restaurants and volunteers to eliminate food waste. Turn surplus into sustenance with a tap.
          </p>
          <div className="hero-actions fade-up-3">
            <Link to="/donate" className="btn-solid">
              Donate Food <span className="arrow">→</span>
            </Link>
            <Link to="/campaigns" className="btn-glass">
              Explore Campaigns
            </Link>
          </div>
        </div>
        
        <div className="hero-illustration-wrapper fade-up-4">
          <div className="floating-illustration">
             {/* 
                Placeholder for the 3D isometric illustration from the design. 
                Using a premium glassmorphic placeholder to match the aesthetic. 
             */}
            <div className="illustration-glass-card">
              <div className="isometric-layer top"></div>
              <div className="isometric-layer middle"></div>
              <div className="isometric-layer bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;