import React from 'react';
import './Impact.css';
import impactImage from "../../assets/images/impact-image.png";

const Impact = () => {
  const stats = [
    { number: "12,000+", label: "Meals Donated" },
    { number: "350+", label: "Restaurants Joined" },
    { number: "120+", label: "NGO Partners" },
    { number: "8,500 kg", label: "Food Saved" }
  ];

  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-image-wrapper">
          <img src={impactImage} alt="Impact" />
        </div>
        <div className="impact-content">
          <span className="impact-badge">Our Impact</span>
          <h2 className="impact-heading">Making a real difference through food rescue</h2>
          <p className="impact-description">Every day, RescueMeal connects local restaurants with surplus food to community organizations that need it most. By streamlining the rescue process, we drastically reduce food waste while ensuring perfectly good meals reach hungry neighbors instead of landfills.</p>
          <div className="impact-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="impact-stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;