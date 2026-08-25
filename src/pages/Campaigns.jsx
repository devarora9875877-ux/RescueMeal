import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { MdTimer, MdPhone, MdLocationOn } from "react-icons/md";
import "./Campaigns.css";

function Campaigns() {
  const ngos = [
    {
      name: "NOSH FOOD RESCUE",
      location: "Rajpura, Punjab",
      contact: "+91 98765 43210",
      time: "9:00 AM - 6:00 PM",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSxTV1x2s2Yf_eAwskTX9lZbbqaablzghDXqlxvjU3g&s=10"
    },
    {
      name: "NIWALA",
      location: "Chandigarh",
      contact: "+91 99887 77665",
      time: "10:00 AM - 5:00 PM",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTQDoM6qNawmeFmlHHxP8l4Xp5Z07DGgjrbuwJowoMA&s=10"
    },
    {
      name: "Community Kitchen Trust",
      location: "Patiala",
      contact: "+91 91234 56789",
      time: "8:00 AM - 8:00 PM",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMANpkzhmdZFROEACnLDwMqQ_X1lrwkf6c6KVNT0sTO-6Lk3bbcLpXah_Z&s=10"
    }
  ];

  return (
    <>
    <div className="campaigns-navbar">
      <Navbar/>
    <div className="campaigns-container">
      <h1 className="campaigns-title">Food Donation <span>Campaigns</span></h1>
      <p className="campaigns-subtitle">
        Find NGOs and community centers where you can donate surplus food.
      </p>

      <div className="ngo-list">
        {ngos.map((ngo, index) => (
          <div key={index} className="ngo-card">
            <div className="ngo-info">
              <h3>{ngo.name}</h3>
              <p className="ngo-detail"><strong><MdLocationOn/>Location:</strong> {ngo.location}</p>
              <p className="ngo-detail"><strong><MdPhone/>Contact:</strong> {ngo.contact}</p>
              <p className="ngo-detail"><strong><MdTimer/>Donation Time:</strong> {ngo.time}</p>
            </div>
            <img src={ngo.image} alt={ngo.name} className="ngo-image" />
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Campaigns;

