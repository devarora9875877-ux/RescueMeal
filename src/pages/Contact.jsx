import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Contact.css";

function Contact() {

  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">We’d love to hear from you!</p>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" className="contact-input" />
        <input type="email" placeholder="Email Address" className="contact-input" />
        <input type="text" placeholder="Subject" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
