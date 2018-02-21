import React from "react";
import Link from "gatsby-link";

import logo from "../../assets/imgs/logo-white.png";

const Hamburger = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
  );
};

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/" id="navbar-logo">
        <img src={logo} alt="Advir-Logo" />
      </Link>

      <Hamburger />

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              The Oasis™
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Community
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Advertisers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Get in touch
            </Link>
          </li>
          <li className="nav-item" id="download-plugin">
            <Link to="/" className="nav-link">
              Download Advir
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
