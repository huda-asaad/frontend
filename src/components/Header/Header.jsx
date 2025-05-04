import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../../assets/images/99.png";
import "./Header.css";
import { useState } from "react";
import * as usersAPI from "../../utilities/users-api";

export default function Header({ user, setUser }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  function handleLogout(e) {
    e.preventDefault();
    usersAPI.logout();
    setUser(null);
    navigate("/");
  }

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

        {user ? (
          <>
           
            <form onSubmit={handleLogout} style={{ display: "inline" }}>
              <button type="submit">Logout</button>
            </form>
          </>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
}
