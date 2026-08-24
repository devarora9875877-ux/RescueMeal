import React from "react";
import "./Campaigns.css";

function Campaigns() {
  const ngos = [
    { 
      name: "Food For All NGO", 
      location: "Rajpura, Punjab", 
      contact: "+91 98765 43210", 
      time: "9:00 AM - 6:00 PM" 
    },
    { 
      name: "Hope Meals Foundation", 
      location: "Chandigarh", 
      contact: "+91 99887 77665", 
      time: "10:00 AM - 5:00 PM" 
    },
    { 
      name: "Community Kitchen Trust", 
      location: "Patiala", 
      contact: "+91 91234 56789", 
      time: "8:00 AM - 8:00 PM" 
    }
  ];

  return (
    <div className="campaigns-container">
      <h1 className="campaigns-title">Food Donation Campaigns</h1>
      <p className="campaigns-subtitle">
        Find NGOs and community centers where you can donate surplus food.
      </p>

      <div className="ngo-list">
        {ngos.map((ngo, index) => (
          <div key={index} className="ngo-card">
            <h3>{ngo.name}</h3>
            <p><strong>Location:</strong> {ngo.location}</p>
            <p><strong>Contact:</strong> {ngo.contact}</p>
            <p><strong>Donation Time:</strong> {ngo.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Campaigns;
