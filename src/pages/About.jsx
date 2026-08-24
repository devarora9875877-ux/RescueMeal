import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <span className="about-badge">✪ Helping Reduce Food Waste ✪</span>
        <h1 className="about-title">Wanna Know Something <span>About Us</span></h1>
      </div>

      <div className="about-section">
        <div className="about-image">
          <img 
            src="https://t3.ftcdn.net/jpg/03/19/40/54/360_F_319405443_lnH13ovYQLkC4ELcX9awjrkDAuZBiRPK.jpg" 
            alt="Food rescue illustration"
          />
        </div>
        <div className="about-text">
          <p>
            RescueMeal connects restaurants, NGOs, and volunteers to safely
            distribute surplus food, reduce food waste, and provide meals to
            people in need.
          </p>
          <p>
            Our mission is to build a sustainable cycle of sharing and caring.
            Every rescued meal not only fills a stomach but also spreads hope,
            dignity, and compassion.
          </p>
          <p>
            By joining hands, we create stronger communities where resources are
            valued and lives are uplifted. Whether you are a donor, volunteer, or
            someone in need — RescueMeal is here to connect you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
