import React, { useEffect, useRef } from 'react';
import {
  FaHandHoldingHeart,
  FaBolt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaChartBar,
  FaLeaf
} from "react-icons/fa";
import './Features.css';

const featuresData = [
  {
    icon: FaHandHoldingHeart,
    title: "Smart Food Donation",
    description: "List surplus food in seconds. Our system instantly alerts nearby verified NGOs and volunteers to prevent waste."
  },
  {
    icon: FaBolt,
    title: "Instant Matching",
    description: "Intelligent logistics automatically match donations with the nearest and most suitable rescue teams."
  },
  {
    icon: FaMapMarkerAlt,
    title: "Live Pickup Tracking",
    description: "Monitor every rescue mission in real-time with our advanced GPS and transparent logistics engine."
  },
  {
    icon: FaShieldAlt,
    title: "Trusted NGO Network",
    description: "Connect with a verified network of background-checked volunteers and certified food banks."
  },
  {
    icon: FaChartBar,
    title: "Impact Dashboard",
    description: "Detailed reports on meals rescued, carbon offset, and community reach for your CSR goals."
  },
  {
    icon: FaLeaf,
    title: "Reduce Food Waste",
    description: "Automatically earn and manage sustainability metrics for every ton of food diverted from landfills."
  }
];

const Features = () => {
  const sectionRef = useRef(null);

  // Generates lightweight, randomized particles for the background
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  // Standard IntersectionObserver for premium scroll-reveal animations
  // Does not require external libraries like GSAP or Framer Motion
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="features-section" ref={sectionRef} id="features">
      {/* Pure CSS Background Elements */}
      <div className="features-bg-wrapper">
        <div className="mesh-gradient mesh-teal"></div>
        <div className="mesh-gradient mesh-blue"></div>
        <div className="mesh-gradient mesh-purple"></div>
        <div className="css-grid-overlay"></div>
        
        {/* Floating Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="bg-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
        <div className="vignette-overlay"></div>
      </div>

      <div className="features-container">
        {/* Section Header */}
        <div className="features-header reveal-on-scroll">
          <div className="small-label">
            <span className="label-dot"></span>
            FEATURES
          </div>
          <h2 className="main-heading">
            Everything You Need <br />
            <span className="heading-highlight">to Rescue Food at Scale</span>
          </h2>
          <p className="subtitle">
            Built for impact, engineered for efficiency. Our technology platform provides the tools you need to reduce waste and nourish communities seamlessly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                className="feature-card reveal-on-scroll" 
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="card-glow-border"></div>
                <div className="card-content">
                  <div className="icon-wrapper">
                    <Icon size={24} className="feature-icon" strokeWidth={1.5} />
                    <div className="icon-glow"></div>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;