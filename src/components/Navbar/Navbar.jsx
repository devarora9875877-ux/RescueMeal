import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="site-navbar">
      <Link to="/" className="site-navbar-logo">RescueMeal</Link>

      <div className="site-navbar-links">
        <Link to="/">Home</Link>
        <Link to="/donate">Donate Food</Link>
        <Link to="/donors">Donors</Link>
        <Link to="/volunteers">Volunteers</Link>
        <Link to="/ngos">NGOs</Link>
      </div>
    </nav>
  );
}

export default Navbar;
