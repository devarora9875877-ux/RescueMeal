import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./Donate.css";

function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    food: "",
    quantity: "",
    pickupTime: "",
    address: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div className="donate-page">
        <Navbar />

        <main className="donate-main">
          <section className="donate-heading">
            <span className="donate-badge">🍃 Make a Difference</span>
            <h1>Donate Food. <span>Feed Hope.</span></h1>
            <p>Share your surplus food and help it reach people who need it.</p>
          </section>

          <form className="donate-form" onSubmit={handleSubmit}>
            <h2>Food Donation Details</h2>

            <div className="donate-form-grid">
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </label>

              <label>
                Food Name
                <input
                  type="text"
                  name="food"
                  value={formData.food}
                  onChange={handleChange}
                  placeholder="For example, rice and dal"
                  required
                />
              </label>

              <label>
                Quantity
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="For example, 20 meals"
                  required
                />
              </label>

              <label className="donate-wide-field">
                Pickup Date and Time
                <input
                  type="datetime-local"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="donate-wide-field">
                Pickup Address
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter the complete pickup address"
                  required
                />
              </label>
            </div>

            <button type="submit" className="donate-button">Submit Donation</button>

            {submitted && (
              <p className="donate-success" role="status">
                Thank you, {formData.name}! Your donation details have been submitted.
              </p>
            )}
          </form>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Donate;
