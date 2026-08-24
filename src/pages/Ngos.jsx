import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./Ngos.css";

function Ngos() {
  const ngos = [
    {
      id: 1,
      name: "Seva Food Foundation",
      focus: "Meal Distribution",
      location: "Chandigarh",
      centers: "4 centers"
    },
    {
      id: 2,
      name: "Hope Community Trust",
      focus: "Community Kitchen",
      location: "Mohali",
      centers: "3 centers"
    },
    {
      id: 3,
      name: "Annapurna Relief Group",
      focus: "Food Recovery",
      location: "Patiala",
      centers: "5 centers"
    },
    {
      id: 4,
      name: "Care for All Society",
      focus: "Family Support",
      location: "Panchkula",
      centers: "2 centers"
    }
  ];

  return (
    <>
      <div className="ngos-page">
        <nav className="ngos-navbar">
          <Link to="/" className="ngos-logo">RescueMeal</Link>
          <div className="ngos-nav-links">
            <Link to="/">Home</Link>
            <Link to="/donate">Donate Food</Link>
            <Link to="/donors">Donors</Link>
            <Link to="/volunteers">Volunteers</Link>
          </div>
        </nav>

        <main className="ngos-main">
          <section className="ngos-heading">
            <span className="ngos-badge">Food Relief Network</span>
            <h1>Meet Our <span>Partner NGOs</span></h1>
            <p>Organizations coordinating rescued food and serving local communities.</p>
          </section>

          <section className="ngos-grid" aria-label="Partner NGO list">
            {ngos.map((ngo) => (
              <article className="ngo-card" key={ngo.id}>
                <span className="ngo-focus">{ngo.focus}</span>
                <h2>{ngo.name}</h2>
                <p><strong>Location:</strong> {ngo.location}</p>
                <p><strong>Active Centers:</strong> {ngo.centers}</p>
              </article>
            ))}
          </section>

          <section className="ngos-cta">
            <div>
              <h2>Support local communities</h2>
              <p>Share surplus food and help our NGO partners serve more people.</p>
            </div>
            <Link to="/donate" className="ngos-button">Donate Food</Link>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Ngos;
