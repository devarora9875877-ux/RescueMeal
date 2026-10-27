import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Hero.css';
import heroImage from '../../assets/images/hero-image.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />

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
            <Link to="/login" className="btn-primary btn-large">
              Login
            </Link>
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
