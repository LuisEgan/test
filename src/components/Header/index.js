import React from "react";
import Link from "gatsby-link";
import { WindowResizeListener } from "react-window-resize-listener";

import logo from "../../assets/imgs/logo-white.png";

const Hamburger = ({ handleHamburger }) => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={handleHamburger}
      id="hamburguer"
    >
      <span className="navbar-toggler-icon" />
    </button>
  );
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hamburgerToggle: false, forceTransparency: false };

    this.handleHamburger = this.handleHamburger.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleHamburger() {
    const { hamburgerToggle } = this.state;
    this.setState({ hamburgerToggle: !hamburgerToggle });
  }

  handleResize(windowSize) {
    const { windowWidth } = windowSize;
    console.log("windowWidth: ", windowWidth);
    const forceTransparency = windowWidth >= 768;
    this.setState({ forceTransparency });
  }

  handleClick(link) {
    const { hamburgerToggle } = this.state;
    if (hamburgerToggle) {
      document.getElementById("hamburguer").click();
    }
  }

  render() {
    const { hamburgerToggle, forceTransparency } = this.state;

    const navBgColor =
      hamburgerToggle && !forceTransparency ? "#157cc1" : "transparent";
    const navStyle = { backgroundColor: navBgColor };
    return (
      <nav className="navbar navbar-expand-md navbar-dark" style={navStyle}>
        <WindowResizeListener onResize={this.handleResize} />
        <Link to="/" id="navbar-logo">
          <img src={logo} alt="Advir-Logo" onClick={this.handleClick} />
        </Link>

        <Hamburger handleHamburger={this.handleHamburger} />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link to="/oasis" className="nav-link" onClick={this.handleClick}>
                The Oasis™
              </Link> */}
              <Link to="/" className="nav-link" onClick={this.handleClick}>
                Developers
              </Link>
            </li>
            {/* <li className="nav-item">
                <Link
                  to="/community"
                  className="nav-link"
                  onClick={this.handleClick}
                >
                  Community
                </Link>
              </li> */}
            <li className="nav-item">
              <Link
                to="/advertisers"
                className="nav-link"
                onClick={this.handleClick}
              >
                Advertisers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={this.handleClick}
              >
                Get in touch
              </Link>
            </li>
            <li className="nav-item" id="download-plugin">
              <Link
                to="/download"
                className="nav-link"
                onClick={this.handleClick}
              >
                Download Admix
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={this.handleClick}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
