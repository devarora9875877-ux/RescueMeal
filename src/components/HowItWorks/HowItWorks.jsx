import React from 'react';
import './HowItWorks.css';
import { FaUtensils, FaTruck, FaBuilding, FaUsers } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUtensils />,
      title: "Restaurant Lists Food",
      description: "Restaurants upload surplus food that is safe for donation instead of throwing it away."
    },
    {
      id: 2,
      icon: <FaTruck />,
      title: "Volunteer Accepts Pickup",
      description: "Nearby volunteers receive the request and collect the donated food."
    },
    {
      id: 3,
      icon: <FaBuilding />,
      title: "Food Reaches NGO",
      description: "The collected food is delivered to verified NGOs for proper distribution."
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: "Families Receive Meals",
      description: "People in need receive fresh meals while reducing overall food waste."
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="container">
        
        <div className="section-header">
          <div className="badge">
            <span role="img" aria-label="clipboard">📋</span> How RescueMeal Works
          </div>
          <h2>
            Four simple steps to <span className="text-green">rescue food</span>
          </h2>
          <p className="description">
            RescueMeal makes food donation quick and organized by connecting restaurants, 
            volunteers, NGOs, and families through a simple four-step process.
          </p>
        </div>

        <div className="cards-container">
          {steps.map((step) => (
            <div className="card" key={step.id}>
              <div className="step-number">{step.id}</div>
              <div className="icon-container">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;