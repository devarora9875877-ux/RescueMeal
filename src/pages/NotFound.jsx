import { Link } from "react-router-dom";
import not from "../assets/images/not-found.png";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="notfound-full">
      <img src={not} alt="404 - Page not found" className="notfound-full-image" />
      <h1>Page not found</h1>
      <p>The page you are looking for may have moved or does not exist.</p>
      <Link className="notfound-home" to="/">Back to Home</Link>
    </main>
  );
}
export default NotFound;
