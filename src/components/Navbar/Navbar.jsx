import { Link } from "react-router-dom";
import logo from "../../assets/images/Green-logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="site-navbar-logo">
        <img src={logo} alt="RescueMeal Logo" className="navbar-logo-image" />
        <span>RescueMeal</span>
      </div>

      <div className="site-navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/campaigns">Campaigns</Link>
        <Link to="/donors">Donors</Link>
        <Link to="/volunteers">Volunteers</Link>
        <Link to="/ngos">NGOs</Link>
      </div>
      <div className="profile">
        <Link to="/profile"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile" /></Link>
      </div>
    </nav>
  );
}

export default Navbar;
