import { Link } from 'react-router-dom';
import './Hero.css';
import heroImage from '../../assets/images/hero-image.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="navbar-logo">
          RescueMeal
        </div>
        
        <ul className="navbar-links">
          <li className="active"><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#how-it-works">Contact</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><Link to="/donors">Donors</Link></li>
          <li><Link to="/volunteers">Volunteers</Link></li>
          <li><Link to="/ngos">NGOs</Link></li>
        </ul>

        <div className="navbar-actions">
          <a href="#login" className="login-link">Login</a>
          <Link to="/donate" className="btn-primary">Start Rescue</Link>
        </div>
        <div className="mobile-menu-icon">
          ☰
        </div>
      </nav>

      <main className="hero-main">
        <section className="hero-text-section">
          <div className="badge">
            <span className="leaf-icon">🍃</span>
            Helping Reduce Food Waste
          </div>

          <h1 className="hero-title">
            Rescue Food. <br />
            <span className="highlight-green">Feed Hope.</span>
          </h1>

          <p className="hero-description">
            RescueMeal connects restaurants, NGOs, and volunteers to safely distribute surplus food, reduce food waste, and provide meals to people in need.
          </p>

          <div className="hero-buttons">
            <Link to="/donate" className="btn-primary btn-large">Donate Food</Link>
            <button className="btn-outline btn-large">Learn More</button>
          </div>
        </section>

        <section className="hero-image-section">
          <div className="image-container">
            <img src={heroImage} alt="Volunteers rescuing food" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
