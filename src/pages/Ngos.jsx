import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Ngos.css";

function Ngos() {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadNgos() {
      try {
        const response = await fetch("/data/ngos.json");

        if (!response.ok) {
          throw new Error("Unable to load NGOs.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Unable to load NGOs.");
        }

        setNgos(data);
      } catch {
        setError("Unable to load NGOs. Please refresh and try again.");
      } finally {
        setLoading(false);
      }
    }

    loadNgos();
  }, []);

  return (
    <>
      <div className="ngos-page">
        <Navbar />
        <main className="ngos-main">
          <section className="ngos-heading">
            <span className="ngos-badge">Food Relief Network</span>
            <h1>Meet Our <span>Partner NGOs</span></h1>
            <p>Organizations coordinating rescued food and serving local communities.</p>
          </section>

          {loading && <p className="ngos-status" role="status">Loading NGOs...</p>}
          {error && <p className="ngos-error" role="alert">{error}</p>}

          {!loading && !error && (
            <section className="ngos-grid" aria-label="Partner NGO list">
              {ngos.map((ngo) => (
                <article className="ngos-card" key={ngo.id}>
                  <span className="ngo-focus">{ngo.focus}</span>
                  <h2>{ngo.name}</h2>
                  <p><strong>Location:</strong> {ngo.location}</p>
                  <p><strong>Active Centers:</strong> {ngo.centers}</p>
                </article>
              ))}
            </section>
          )}

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
