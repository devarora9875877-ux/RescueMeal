import React from 'react';
import './Features.css';
// Importing icons from react-icons
import { 
  FaUtensils, 
  FaTruck, 
  FaBuilding, 
  FaMapMarkerAlt, 
  FaChartBar, 
  FaShieldAlt 
} from 'react-icons/fa';

const Features = () => {
  // Array of feature data to render dynamically using .map()
  const featuresData = [
    {
      id: 1,
      icon: <FaUtensils />,
      title: "Donate Surplus Food",
      description: "Restaurants can quickly list extra food instead of letting it go to waste."
    },
    {
      id: 2,
      icon: <FaTruck />,
      title: "Easy Food Pickup",
      description: "Volunteers receive pickup requests and deliver food safely to NGOs."
    },
    {
      id: 3,
      icon: <FaBuilding />,
      title: "NGO Collaboration",
      description: "Verified NGOs receive donations and distribute meals to people in need."
    },
    {
      id: 4,
      icon: <FaMapMarkerAlt />,
      title: "Real-Time Tracking",
      description: "Track every donation from pickup to successful delivery."
    },
    {
      id: 5,
      icon: <FaChartBar />,
      title: "Impact Dashboard",
      description: "View meals donated, food saved, and community impact in one place."
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: "Safe & Verified",
      description: "Secure platform with verified restaurants, volunteers, and NGOs."
    }
  ];

  return (
    <section className="features-section">
      {/* Top Header Section */}
      <div className="features-header">
        <div className="features-badge">
          ⭐ Why Choose RescueMeal
        </div>
        
        <h2 className="features-title">
          Features that make <span className="highlight-green">food donation</span> simple
        </h2>
        
        <p className="features-subtitle">
          RescueMeal provides an easy and reliable way for restaurants, volunteers, NGOs, and communities to work together to reduce food waste and feed people in need.
        </p>
      </div>

      {/* Features Grid Layout */}
      <div className="features-grid">
        {featuresData.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="icon-container">
              {feature.icon}
            </div>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;