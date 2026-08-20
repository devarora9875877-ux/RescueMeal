import React, { useState, useEffect, useRef } from 'react';
import ImpactHeader from './ImpactHeader';
import ImpactCenter from './ImpactCenter';
import ImpactCard from './ImpactCard';
import ImpactQuote from './ImpactQuote';
import { impactData } from './impactData';
import './Impact.css';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Guarantees animation happens only once
        }
      },
      { threshold: 0.15 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="impact-section" ref={sectionRef}>
      <div className="impact-container">
        <ImpactHeader isVisible={isVisible} />
        
        <div className="impact-grid">
          <ImpactCenter isVisible={isVisible} />
          
          {impactData.map((data) => (
            <ImpactCard 
              key={data.id} 
              data={data} 
              isVisible={isVisible} 
            />
          ))}
        </div>

        <ImpactQuote isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Impact;