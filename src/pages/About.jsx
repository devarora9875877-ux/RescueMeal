import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <span className="about-badge">✪ Helping Reduce Food Waste ✪</span>
        <h1 className="about-title">Rescue Food. Feed Hope.</h1>
      </div>

      <div className="about-description">
        <p>
          RescueMeal connects restaurants, NGOs, and volunteers to safely
          distribute surplus food, reduce food waste, and provide meals to
          people in need.
        </p>
        <p>
          Our mission is simple: ensure that no good food goes to waste while
          millions go hungry. By joining hands, we create a sustainable cycle
          of sharing and caring.
        </p>
      </div>

      <div className="about-highlights">
        <div className="highlight-card">
          <h3>🌍 Reduce Waste</h3>
          <p>Prevent surplus food from ending up in landfills.</p>
        </div>
        <div className="highlight-card">
          <h3>🤝 Connect Communities</h3>
          <p>Bring together donors, NGOs, and volunteers.</p>
        </div>
        <div className="highlight-card">
          <h3>🍽️ Feed Hope</h3>
          <p>Deliver meals to those who need them most.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
