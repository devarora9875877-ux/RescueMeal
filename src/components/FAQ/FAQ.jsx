import React, { useState, useEffect, useRef } from 'react';
import { faqData } from './faqData';
import './FAQ.css';

const FAQItem = ({ faq, isOpen, onClick, index }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  // Calculates exact height for smooth CSS transition
  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className={`faq-item reveal-item delay-${index + 4} ${isOpen ? 'is-open' : ''}`}>
      <div className="accent-line" />
      
      <button 
        className="faq-question-btn" 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="faq-question-text">{faq.question}</span>
        <div className="faq-icon">
          <span className="line horizontal"></span>
          <span className="line vertical"></span>
        </div>
      </button>

      <div 
        className="faq-answer-wrapper" 
        style={{ height }}
      >
        <div className="faq-answer-content" ref={contentRef}>
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Opens the first FAQ by default
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll Reveal & Exit Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 } // Triggers when 15% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Generate 8 subtle floating particles
  const particles = Array.from({ length: 8 });

  return (
    <section 
      className={`faq-section ${isVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
    >
      {/* Background Ambience */}
      <div className="faq-glow"></div>
      <div className="particles-container">
        {particles.map((_, i) => (
          <div key={i} className={`particle p-${i + 1}`}></div>
        ))}
      </div>

      <div className="faq-header">
        <span className="badge reveal-item delay-1">FAQ</span>
        <h2 className="heading reveal-item delay-2">Frequently Asked Questions</h2>
        <p className="subtitle reveal-item delay-3">
          Everything you need to know about donating food, volunteering, and how<br/>
          RescueMeal works.
        </p>
      </div>

      <div className="faq-container reveal-item delay-3">
        {faqData.map((faq, index) => (
          <FAQItem
            key={faq.id}
            faq={faq}
            index={index}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}