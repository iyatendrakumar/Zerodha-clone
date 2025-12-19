import React from "react";
import { Link } from 'react-router-dom';
import useLogoNavigation from "../hooks/useLogoNavigation";
function Navbar() {
   const handleLogoClick = useLogoNavigation();
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container py-2">
        
        <div
      className="navbar-brand"
      onClick={handleLogoClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src="media/images/logo.svg"
        alt="Zerodha"
        style={{ width: "130px" }}
      />
    </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-content="page" to="/signup">Signup</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-content="page" to="/About">About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-content="page" to="/products">Products</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-content="page" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-content="page" to="/support">Support</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
