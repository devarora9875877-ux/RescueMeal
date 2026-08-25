import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-col footer-left">
            <div className="footer-brand">
              <img src={logo} alt="RescueMeal Logo" className="footer-logo" />
              <h2>RescueMeal</h2>
            </div>
            <p className="footer-description">
              Connecting restaurants, volunteers, and NGOs to reduce food waste and feed people in need.
            </p>
            <p className="footer-description">
              Bridging the gap between surplus food and those who need it most. Join our community of restaurants, volunteers, and NGOs making a difference every day.
            </p>
          </div>

          <div className="footer-col footer-middle">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/campaigns">Campaigns</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/donors">Donors</Link></li>
              <li><Link to="/volunteers">Volunteers</Link></li>
              <li><Link to="/ngos">NGO's</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-right">
            <h3 className="footer-heading">CONTACT</h3>
            <div className="footer-contact-list">
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <span>support@rescuemeal.com</span>
              </div>
              <div className="contact-item">
                <MdPhone className="contact-icon" />
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <MdLocationOn className="contact-icon" />
                <span>Chandigarh, India</span>
              </div>
            </div>
            <div className="footer-socials">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 RescueMeal. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;