import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/portfolio">Portfolio</Link>
      <Link to="#">About moi</Link>
      <Link to="#">Contact</Link>
    </nav>
  );
}
