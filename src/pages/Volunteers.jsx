import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Volunteers.css";

function Volunteers() {
  const volunteers = [
    {
      id: 1,
      name: "Aanya Sharma",
      role: "Food Pickup",
      location: "Chandigarh",
      availability: "Weekends"
    },
    {
      id: 2,
      name: "Rohan Mehta",
      role: "Meal Delivery",
      location: "Mohali",
      availability: "Evenings"
    },
    {
      id: 3,
      name: "Simran Kaur",
      role: "Food Sorting",
      location: "Patiala",
      availability: "Weekdays"
    },
    {
      id: 4,
      name: "Arjun Verma",
      role: "Community Support",
      location: "Panchkula",
      availability: "Mornings"
    }
  ];

  return (
    <>
      <div className="volunteers-page">
        <nav className="volunteers-navbar">
          <Link to="/" className="volunteers-logo">RescueMeal</Link>
          <div className="volunteers-nav-links">
            <Link to="/">Home</Link>
            <Link to="/donate">Donate Food</Link>
            <Link to="/donors">Donors</Link>
          </div>
        </nav>

        <main className="volunteers-main">
          <section className="volunteers-heading">
            <span className="volunteers-badge">Rescue Heroes</span>
            <h1>Meet Our <span>Food Volunteers</span></h1>
            <p>People giving their time to collect food and deliver it safely.</p>
          </section>

          <section className="volunteers-grid" aria-label="Food volunteer list">
            {volunteers.map((volunteer) => (
              <article className="volunteer-card" key={volunteer.id}>
                <span className="volunteer-role">{volunteer.role}</span>
                <h2>{volunteer.name}</h2>
                <p><strong>Location:</strong> {volunteer.location}</p>
                <p><strong>Available:</strong> {volunteer.availability}</p>
              </article>
            ))}
          </section>

          <section className="volunteers-cta">
            <div>
              <h2>Want to help?</h2>
              <p>Support food rescue and help every meal reach people safely.</p>
            </div>
            <Link to="/donate" className="volunteers-button">Support the Mission</Link>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Volunteers;
