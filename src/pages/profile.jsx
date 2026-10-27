import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./profile.css";

function Profile() {
  const { currentUser, login } = useAuth();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(currentUser?.name || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  if (!currentUser) {
    return <><main className="profile-container profile-empty"><h1>Please log in to view your profile.</h1><p>Your account details will appear here after you sign in.</p><Link to="/login" className="profile-action">Go to Login</Link></main></>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const next = {};
    if (name.trim().length < 2) next.name = "Name must contain at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const updated = { ...currentUser, name: name.trim(), email: email.trim() };
    login(updated);
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((user) => user.email === currentUser.email ? { ...user, name: updated.name, email: updated.email } : user);
    if (!updatedUsers.some((user) => user.email === updated.email)) updatedUsers.push(updated);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setEditing(false);
    setSaved(true);
  }

  return (
    <>
      <div className="profile-navbar">
        <main className="profile-container">
          <h1 className="profile-title">My <span>Profile</span></h1>
          <p className="profile-subtitle">Manage your account details.</p>
          {saved && <p className="form-success" role="status">Profile updated successfully.</p>}
          <section className="profile-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile avatar" className="profile-image" />
            <div className="profile-info"><h2>{currentUser.name || "RescueMeal User"}</h2><p><strong>Email:</strong> {currentUser.email}</p></div>
          </section>
          {!editing ? <button type="button" className="profile-action" onClick={() => { setName(currentUser.name || ""); setEmail(currentUser.email || ""); setEditing(true); setSaved(false); }}>Edit Profile</button> :
            <form className="profile-edit-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="profile-name">Full name</label><input id="profile-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" aria-invalid={!!errors.name} />
              {errors.name && <small className="form-error">{errors.name}</small>}
              <label htmlFor="profile-email">Email address</label><input id="profile-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" aria-invalid={!!errors.email} />
              {errors.email && <small className="form-error">{errors.email}</small>}
              <div className="profile-actions"><button type="submit" className="profile-action">Save Changes</button><button type="button" className="profile-cancel" onClick={() => { setEditing(false); setErrors({}); }}>Cancel</button></div>
            </form>}
        </main>
      </div>
    </>
  );
}
export default Profile;
