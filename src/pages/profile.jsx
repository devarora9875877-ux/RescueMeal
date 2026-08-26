import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    return <p>Please login to view your profile.</p>;
  }

  return (
    <>
    <div className="profile-navbar">
    <Navbar/>
      <div className="profile-container">
        <h1 className="profile-title">My <span>Profile</span></h1>
        <p className="profile-subtitle">Manage your account and donation activity.</p>

        <div className="profile-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt={user.name} className="profile-image" />
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Profile;
