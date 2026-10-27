import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Green-logo.png";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="site-navbar">
      <div className="site-navbar-logo">
        <img src={logo} alt="RescueMeal Logo" className="navbar-logo-image" />
        <span>RescueMeal</span>
      </div>

      <div className="site-navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/campaigns">Campaigns</NavLink>
        <NavLink to="/donors">Donors</NavLink>
        <NavLink to="/volunteers">Volunteers</NavLink>
        <NavLink to="/ngos">NGOs</NavLink>
      </div>
      <div className="profile">
        {currentUser && <span className="welcome-user">Hi, {currentUser.name || "User"}</span>}
        <Link to="/profile">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" />
        </Link>
        {currentUser && (
          <button type="button" className="logout-button" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
