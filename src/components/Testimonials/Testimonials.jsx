import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Restaurant Partner",
      review: "RescueMeal helped us donate surplus food quickly instead of letting it go to waste. The pickup process is simple and reliable.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Volunteer",
      review: "I receive pickup requests instantly and can deliver food to NGOs without any confusion. The platform makes volunteering easy.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        <div className="testimonials-header">
          <span className="badge">COMMUNITY VOICES</span>
          <h2>Trusted by Restaurants, Volunteers & NGOs</h2>
          <p>
            Hear from restaurants, volunteers, and NGO partners who have experienced the impact of RescueMeal.
          </p>
        </div>

        <div className="testimonials-cards">
          {testimonialsData.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11C10 14.866 6.866 18 3 18V15C5.209 15 7 13.209 7 11V6H3V11H10ZM21 11C21 14.866 17.866 18 14 18V15C16.209 15 18 13.209 18 11V6H14V11H21Z" fill="#2E7D32"/>
                </svg>
              </div>
              <p className="review-text">"{testimonial.review}"</p>
              <div className="stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div className="profile">
                <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
                <div className="profile-info">
                  <h4>{testimonial.name}</h4>
                  <span className="role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;