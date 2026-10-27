import { useState } from "react";
import "./Contact.css";

const initialForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const next = {};
    if (!form.name.trim() || form.name.trim().length < 2) next.name = "Please enter your full name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = "Please enter a valid email address.";
    if (!form.subject.trim() || form.subject.trim().length < 3) next.subject = "Subject must contain at least 3 characters.";
    if (!form.message.trim() || form.message.trim().length < 10) next.message = "Message must contain at least 10 characters.";
    return next;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSent(false);
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    // Front-end demo: no backend is connected to deliver messages.
    setSent(true);
    setForm(initialForm);
  }

  return (
    <>
      <div className="contact-navbar">

        <main className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">We’d love to hear from you!</p>
          {sent && <p className="form-success" role="status">Thanks for reaching out! Your form passed validation. This demo does not send messages to a server.</p>}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="contact-name">Full Name</label>
            <input id="contact-name" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="contact-input" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} />
            {errors.name && <small className="form-error" id="contact-name-error">{errors.name}</small>}
            <label htmlFor="contact-email">Email Address</label>
            <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="contact-input" autoComplete="email" aria-invalid={!!errors.email} />
            {errors.email && <small className="form-error">{errors.email}</small>}
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="contact-input" aria-invalid={!!errors.subject} />
            {errors.subject && <small className="form-error">{errors.subject}</small>}
            <label htmlFor="contact-message">Your Message</label>
            <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Your Message (at least 10 characters)" className="contact-textarea" aria-invalid={!!errors.message} />
            {errors.message && <small className="form-error">{errors.message}</small>}
            <button type="submit" className="contact-button">Send Message</button>
          </form>
        </main>
      </div>

    </>
  );
}
export default Contact;
