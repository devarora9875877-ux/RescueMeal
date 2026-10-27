import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import FormField from "../components/FormField/FormField";
import NgoContext from "../context/NgoContext";
import { recordSubmission } from "../store/submissionsSlice";
import "./Donate.css";

function Donate() {
  const dispatch = useDispatch();
  const { selectedNgo } = useContext(NgoContext);
  const [formData, setFormData] = useState({
    userType: "donor",
    name: "",
    email: "",
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
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setSubmitted(false);
    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));

    if (name === "userType") {
      setErrors({});
    } else {
      setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (submitted) {
      return;
    }
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a 10-digit phone number.";
    }

    if (formData.userType === "donor") {
      if (!formData.food.trim()) {
        newErrors.food = "Please enter the food name.";
      }
      if (!formData.quantity.trim()) {
        newErrors.quantity = "Please enter the food quantity.";
      }
      if (!formData.pickupTime) {
        newErrors.pickupTime = "Please select a pickup date and time.";
      }
      if (formData.address.trim().length < 10) {
        newErrors.address = "Please enter a complete address of at least 10 characters.";
      }
    } else {
      if (!formData.location.trim()) {
        newErrors.location = "Please enter your city or area.";
      }
      if (!formData.availability) {
        newErrors.availability = "Please select your availability.";
      }
      if (!formData.volunteerWork) {
        newErrors.volunteerWork = "Please select your preferred volunteer work.";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    dispatch(recordSubmission(formData.userType));
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
            {selectedNgo && <p className="donate-selected-ngo">Selected NGO: {selectedNgo.name}</p>}
          </section>

          <form className="donate-form" onSubmit={handleSubmit} noValidate>
            <h2>{formData.userType === "donor" ? "Food Donor Details" : "Volunteer Details"}</h2>

            <div className="donate-form-grid">
              <label className="donate-wide-field">
                I want to
                <select name="userType" value={formData.userType} onChange={handleChange}>
                  <option value="donor">Donate Food</option>
                  <option value="volunteer">Become a Volunteer</option>
                </select>
              </label>

              <FormField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                error={errors.name}
              />

              <FormField
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                error={errors.email}
              />

              <FormField
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your 10-digit phone number"
                error={errors.phone}
              />

              {formData.userType === "donor" ? (
                <>
                  <FormField
                    label="Food Name"
                    name="food"
                    value={formData.food}
                    onChange={handleChange}
                    placeholder="For example, rice and dal"
                    error={errors.food}
                  />

                  <FormField
                    label="Quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="For example, 20 meals"
                    error={errors.quantity}
                  />

                  <FormField
                    label="Pickup Date and Time"
                    type="datetime-local"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    error={errors.pickupTime}
                    className="donate-wide-field"
                  />

                  <label className="donate-wide-field">
                    Pickup Address
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter the complete pickup address"
                      required
                      aria-invalid={Boolean(errors.address)}
                      aria-describedby={errors.address ? "address-error" : undefined}
                    />
                    {errors.address && <span className="form-field-error" id="address-error">{errors.address}</span>}
                  </label>
                </>
              ) : (
                <>
                  <FormField
                    label="City or Area"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter your city or area"
                    error={errors.location}
                  />

                  <label>
                    Availability
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      aria-invalid={Boolean(errors.availability)}
                      aria-describedby={errors.availability ? "availability-error" : undefined}
                    >
                      <option value="">Select availability</option>
                      <option value="Mornings">Mornings</option>
                      <option value="Evenings">Evenings</option>
                      <option value="Weekends">Weekends</option>
                    </select>
                    {errors.availability && <span className="form-field-error" id="availability-error">{errors.availability}</span>}
                  </label>

                  <label className="donate-wide-field">
                    Preferred Volunteer Work
                    <select
                      name="volunteerWork"
                      value={formData.volunteerWork}
                      onChange={handleChange}
                      required
                      aria-invalid={Boolean(errors.volunteerWork)}
                      aria-describedby={errors.volunteerWork ? "volunteerWork-error" : undefined}
                    >
                      <option value="">Select volunteer work</option>
                      <option value="Food Pickup">Food Pickup</option>
                      <option value="Meal Delivery">Meal Delivery</option>
                      <option value="Food Sorting">Food Sorting</option>
                      <option value="Community Support">Community Support</option>
                    </select>
                    {errors.volunteerWork && <span className="form-field-error" id="volunteerWork-error">{errors.volunteerWork}</span>}
                  </label>
                </>
              )}
            </div>

            <button type="submit" className="donate-button" disabled={submitted}>
              {formData.userType === "donor" ? "Submit Donation" : "Join as Volunteer"}
            </button>

            {submitted && (
              <p className="donate-success" role="status">
                Thank you, {formData.name}! Your {formData.userType === "donor" ? "donation" : "volunteer"} form is complete.
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
