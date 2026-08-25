import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./Donate.css";

function Donate() {
  const [formData, setFormData] = useState({
    userType: "donor",
    name: "",
    phone: "",
    food: "",
    quantity: "",
    pickupTime: "",
    address: "",
    location: "",
    availability: "",
    volunteerWork: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setSubmitted(false);
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
            <h1>Choose Your Role. <span>Help Others.</span></h1>
            <p>Donate surplus food or volunteer to help it reach people in need.</p>
          </section>

          <form className="donate-form" onSubmit={handleSubmit}>
            <h2>{formData.userType === "donor" ? "Food Donor Details" : "Volunteer Details"}</h2>

            <div className="donate-form-grid">
              <label className="donate-wide-field">
                I want to
                <select name="userType" value={formData.userType} onChange={handleChange}>
                  <option value="donor">Donate Food</option>
                  <option value="volunteer">Become a Volunteer</option>
                </select>
              </label>

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

              {formData.userType === "donor" ? (
                <>
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
                </>
              ) : (
                <>
                  <label>
                    City or Area
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter your city or area"
                      required
                    />
                  </label>

                  <label>
                    Availability
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select availability</option>
                      <option value="Mornings">Mornings</option>
                      <option value="Evenings">Evenings</option>
                      <option value="Weekends">Weekends</option>
                    </select>
                  </label>

                  <label className="donate-wide-field">
                    Preferred Volunteer Work
                    <select
                      name="volunteerWork"
                      value={formData.volunteerWork}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select volunteer work</option>
                      <option value="Food Pickup">Food Pickup</option>
                      <option value="Meal Delivery">Meal Delivery</option>
                      <option value="Food Sorting">Food Sorting</option>
                      <option value="Community Support">Community Support</option>
                    </select>
                  </label>
                </>
              )}
            </div>

            <button type="submit" className="donate-button">
              {formData.userType === "donor" ? "Submit Donation" : "Join as Volunteer"}
            </button>

            {submitted && (
              <p className="donate-success" role="status">
                Thank you, {formData.name}! Your {formData.userType === "donor" ? "donation" : "volunteer"} details have been submitted.
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
