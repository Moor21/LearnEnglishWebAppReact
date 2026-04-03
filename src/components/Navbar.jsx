import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="brand_link">
        <Link className="brand_link" to="/">LearnEnglish</Link>
      </div>
      <div className="menu_links">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/cards">
          Cards
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
