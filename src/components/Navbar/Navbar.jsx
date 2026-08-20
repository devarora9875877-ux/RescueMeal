import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          RescueMeal
        </Link>
        
        <ul className="navbar-links">
          <li><Link to="/donors">Donors</Link></li>
          <li><Link to="/volunteers">Volunteers</Link></li>
          <li><Link to="/impact">Impact</Link></li>
          <li><Link to="/ngos">NGOs</Link></li>
        </ul>

        <div className="navbar-actions">
          <Link to="/login" className="login-link">Login</Link>
          <Link to="/start" className="btn-primary">Start Rescue</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;