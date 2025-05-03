import { Link } from "react-router-dom";
import headerLogo from "../../assets/images/99.png";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={headerLogo} alt="Aqar Logo" />
        </Link>
      </div>

      <nav className="nav-links">
        <div className="dropdown">
          <span className="dropdown-toggle" onClick={toggleDropdown}>
            Properties ▾
          </span>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/properties?type=villa" onClick={() => setShowDropdown(false)}>Villas</Link>
              <Link to="/properties?type=apartment" onClick={() => setShowDropdown(false)}>Apartments</Link>
            </div>
          )}
        </div>
        <Link to="/about">About</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
