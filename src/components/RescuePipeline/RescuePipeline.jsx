import React, { useEffect, useRef, useState } from 'react';
import './RescuePipeline.css';

// 1. Data Array (Using simple Emojis instead of SVGs)
const pipelineData = [
  {
    id: "01", 
    tag: "SOURCE", 
    title: "Donate Food",
    description: "Restaurants, hotels, and grocers list excess high-quality food on the platform with just a few taps, detailing quantity and pickup windows.",
    icon: "🍽️" // Replaced SVG with Emoji
  },
  {
    id: "02", 
    tag: "MATCH", 
    title: "Smart Matching",
    description: "Our routing engine instantly identifies the nearest verified NGO partner and pings available community volunteers optimized for the shortest transit time.",
    icon: "🤝"
  },
  {
    id: "03", 
    tag: "PICKUP", 
    title: "Volunteer Pickup",
    description: "A verified volunteer arrives at the source, verifies the package via QR code, and safely transports the food using our integrated navigation.",
    icon: "🚚"
  },
  {
    id: "04", 
    tag: "IMPACT", 
    title: "Delivered",
    description: "Fresh meals reach NGOs, shelters, and families in need within hours, while you track your total environmental and social impact on your dashboard.",
    icon: "❤️"
  }
];

export default function RescuePipeline() {
  // State to track if the section is visible on screen
  const [isVisible, setIsVisible] = useState(false);
  // State to store background particles so they don't change on every render
  const [particles, setParticles] = useState([]);
  // Reference to the section div for the IntersectionObserver
  const sectionRef = useRef(null);

  useEffect(() => {
    // Generate 15 random particles only ONCE when the component loads
    const initialParticles = [];
    for (let i = 0; i < 15; i++) {
      initialParticles.push({
        left: Math.floor(Math.random() * 100) + '%',
        top: Math.floor(Math.random() * 100) + '%',
        delay: (Math.random() * 5).toFixed(2) + 's' // Delay between 0 and 5 seconds
      });
    }
    setParticles(initialParticles);

    // Setup IntersectionObserver to trigger animations when the user scrolls down
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing after it becomes visible once
      }
    }, { threshold: 0.15 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={`rescue-section ${isVisible ? 'visible' : ''}`}>
      
      {/* Background Particles */}
      <div className="particles-container">
        {particles.map((particle, index) => (
          <div 
            key={index} 
            className="particle" 
            style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }}
          ></div>
        ))}
      </div>

      {/* Section Header */}
      <div className="header-container">
        <span className="badge anim-fade-up" style={{ animationDelay: '0.1s' }}>HOW IT WORKS</span>
        <h2 className="anim-fade-up" style={{ animationDelay: '0.3s' }}>How RescueMeal Works</h2>
        <h3 className="anim-fade-up" style={{ animationDelay: '0.5s' }}>The Rescue Pipeline</h3>
        <p className="anim-fade-up" style={{ animationDelay: '0.7s' }}>
          Our advanced logistics platform seamlessly connects surplus food from commercial kitchens directly to those who need it most, ensuring zero waste and maximum impact through real-time matching.
        </p>
      </div>

      {/* Cards and Connectors Grid */}
      <div className="pipeline-grid">
        {pipelineData.map((card, index) => {
          
          // Simple calculations for layout and animation timings
          const isLeftAligned = index % 2 === 0;
          const isLastCard = index === pipelineData.length - 1;
          
          const cardRevealDelay = 1 + index * 1.2;
          const flashDelay = 5.8 + index * 1.5;
          const flowDelay = 6 + index * 1.5;
          
          const drawV1Delay = 1.6 + index * 1.2;
          const drawHDelay = 1.9 + index * 1.2;
          const drawV2Delay = 2.3 + index * 1.2;

          return (
            <React.Fragment key={card.id}>
              
              {/* Card Row */}
              <div className={`card-row ${isLeftAligned ? 'row-left' : 'row-right'}`}>
                
                {/* Wrapper handles the reveal animation so CSS hover works smoothly */}
                <div className="card-anim-wrapper" style={{ animationDelay: `${cardRevealDelay}s` }}>
                  <div className="pipeline-card">
                    
                    {/* Top Connection Node (Hide on first card) */}
                    {index !== 0 && (
                      <div className="node top-node">
                        <div className="flash-circle" style={{ animationDelay: `${flashDelay}s` }}></div>
                      </div>
                    )}
                    
                    {/* Card Content */}
                    <div className="watermark">{card.id}</div>
                    <div className="emoji-icon">{card.icon}</div>
                    <span className="tag-text">{card.tag}</span>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                    
                    {/* Bottom Connection Node */}
                    <div className="node bottom-node">
                      <div className="flash-circle" style={{ animationDelay: `${flowDelay}s` }}></div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Connecting Lines (Pure CSS DIVs) */}
              {!isLastCard && (
                <div className={`connector-box ${isLeftAligned ? 'connect-right' : 'connect-left'}`}>
                  {/* Vertical Line 1 (Drops down) */}
                  <div className="track-line line-v1">
                    <div className="draw-vert" style={{ animationDelay: `${drawV1Delay}s` }}></div>
                  </div>
                  {/* Horizontal Line (Moves across) */}
                  <div className="track-line line-h">
                    <div className="draw-horiz" style={{ animationDelay: `${drawHDelay}s` }}></div>
                  </div>
                  {/* Vertical Line 2 (Drops down to next card) */}
                  <div className="track-line line-v2">
                    <div className="draw-vert" style={{ animationDelay: `${drawV2Delay}s` }}></div>
                  </div>
                  
                  {/* The moving glowing dot */}
                  <div className="glowing-dot" style={{ animationDelay: `${flowDelay}s` }}></div>
                </div>
              )}
            </React.Fragment>
          );
        })}

        {/* Final Connector leading to CTA Box */}
        <div className="connector-box connect-final">
          <div className="track-line line-v1"><div className="draw-vert" style={{ animationDelay: `5.2s` }}></div></div>
          <div className="track-line line-h"><div className="draw-horiz" style={{ animationDelay: `5.5s` }}></div></div>
          <div className="track-line line-v2"><div className="draw-vert" style={{ animationDelay: `5.9s` }}></div></div>
          <div className="glowing-dot" style={{ animationDelay: `10.5s` }}></div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="cta-box anim-fade-up" style={{ animationDelay: '6.5s' }}>
        <div className="node top-node">
          <div className="flash-circle" style={{ animationDelay: '10.3s' }}></div>
        </div>
        <h3>One rescued meal today can change someone's tomorrow.</h3>
        <p>Join the mission and help eliminate food waste across our communities.</p>
        <button className="cta-button">Start Rescuing ➔</button>
      </div>

    </section>
  );
}