import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout, isLoggedIn } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-top-layer">
        <div className="top-left">Enjoy the Beso while we fix your car</div>
        <div className="top-right">Monday - Saturday 7:00AM - 6:00PM</div>
        <div className="top-welcome">
          {isLoggedIn ? `Welcome ${user.name}` : "Welcome Guest"}
        </div>
      </div>
      <div className="navbar-main-layer">
        <div className="main-logo">
          <img src={logo} alt="ABE GARAGE" />
        </div>
        <div className="navbar-right-section">
          <ul className="navbar-links">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/about">ABOUT US</a>
            </li>
            <li>
              <a href="/services">SERVICES</a>
            </li>
            <li>
              <a href="/contact">CONTACT US</a>
            </li>
            <li>
              <a href="/admin">ADMIN</a>
            </li>
          </ul>
          <span className="navbar-separator">|</span>
          {isLoggedIn ? (
            <button className="navbar-logout" onClick={logout}>
              LOG OUT
            </button>
          ) : (
            <a href="/login" className="navbar-logout">
              LOG IN
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
