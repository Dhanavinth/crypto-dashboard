import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        CryptoDash
      </div>

      <div className="nav-links">
        <Link to="/">Market</Link>

        <Link to="/converter">
          Converter
        </Link>

        <Link to="/favorites">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;