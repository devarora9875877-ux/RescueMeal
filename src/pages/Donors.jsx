import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./Donors.css";

function Donors() {
  const donors = [
    {
      id: 1,
      name: "Green Bowl Restaurant",
      type: "Restaurant",
      location: "Chandigarh",
      meals: "320 meals"
    },
    {
      id: 2,
      name: "Sunrise Bakery",
      type: "Bakery",
      location: "Mohali",
      meals: "185 meals"
    },
    {
      id: 3,
      name: "Punjab Tiffin House",
      type: "Food Service",
      location: "Patiala",
      meals: "240 meals"
    },
    {
      id: 4,
      name: "Fresh Mart",
      type: "Grocery Store",
      location: "Rajpura",
      meals: "150 meals"
    }
  ];

  return (
    <>
      <div className="donors-page">
        <Navbar />

        <main className="donors-main">
          <section className="donors-heading">
            <span className="donors-badge">Community Partners</span>
            <h1>Meet Our <span>Food Donors</span></h1>
            <p>Local businesses sharing surplus food and supporting people in need.</p>
          </section>

          <section className="donors-grid" aria-label="Food donor list">
            {donors.map((donor) => (
              <article className="donor-card" key={donor.id}>
                <span className="donor-type">{donor.type}</span>
                <h2>{donor.name}</h2>
                <p><strong>Location:</strong> {donor.location}</p>
                <p><strong>Meals Shared:</strong> {donor.meals}</p>
              </article>
            ))}
          </section>

          <section className="donors-cta">
            <div>
              <h2>Have surplus food?</h2>
              <p>Join our donor community and help rescue more meals.</p>
            </div>
            <Link to="/donate" className="donors-button">Become a Donor</Link>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Donors;
