import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1 .png";
import "./Navbar.css";

const Navbar = ({ onAuthOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNavClick = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      new window.bootstrap.Collapse(navbar).hide();
    }
  };

  return (
   <nav className="navbar custom-navbar navbar-expand-lg px-4 shadow sticky-top">

      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={handleNavClick}
        >
          <img
            src={logo}
            alt="UDC Logo"
            style={{ height: "50px" }}
            className="me-2"
          />
          <span className="fw-bold">Unique Design Consultant</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { to: "/", label: "Home" },
              { to: "/bitrix24crm", label: "Bitrix24 CRM" },
              { to: "/pricing", label: "Pricing" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link
                  to={to}
                  className={`nav-link ${currentPath === to ? "active" : ""}`}
                  onClick={handleNavClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex ms-3">
            <button className="btn btn-outline-primary me-2" onClick={onAuthOpen}>
              Login
            </button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
