import React from "react";
import Link from "gatsby-link";
// import { WindowResizeListener } from "react-window-resize-listener";
import WindowSizeListener from "react-window-size-listener";

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
            <WindowSizeListener onResize={this.handleResize} />
            <Link to="/" id="navbar-logo">
               <img src={logo} alt="Advir-Logo" onClick={this.handleClick} />
            </Link>

            <Hamburger handleHamburger={this.handleHamburger} />

            <div
               className="collapse navbar-collapse"
               id="navbarSupportedContent"
            >
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                     <Link
                        to="/"
                        className="nav-link"
                        onClick={this.handleClick}
                     >
                        Developers
                     </Link>
                  </li>
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
                        to="/oasis"
                        className="nav-link"
                        onClick={this.handleClick}
                     >
                        Oasis™
                     </Link>
                  </li>
                  <li className="nav-item">
                     {/* <Link
                to="/contact"
                className="nav-link"
                onClick={this.handleClick}
              >
                Get in touch
              </Link> */}
                     <a
                        href="/contact"
                        className="nav-link"
                        onClick={this.handleClick}
                     >
                        Get in touch
                     </a>
                  </li>
                  <li className="nav-item" id="download-plugin">
                     <a
                        className="nav-link"
                        href="http://app.admix.in/login?register"
                        target="__blank"
                        // onClick={this.handleClick}
                        // sp-show-form="94097"
                     >
                        Get started
                     </a>
                  </li>
                  <li className="nav-item">
                     <div className="dropdown">
                        <button
                           className="btn btn-secondary dropdown-toggle"
                           type="button"
                           id="dropdownMenuButton"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false"
                        >
                           More
                        </button>
                        <div
                           className="dropdown-menu"
                           aria-labelledby="dropdownMenuButton"
                        >
                           <Link to="/academy" className="dropdown-item">
                              Academy
                           </Link>
                           <a
                              className="dropdown-item"
                              href="http://admix.in/blog/"
                              target="__blank"
                           >
                              Blog
                           </a>
                           <a
                              className="dropdown-item"
                              href="http://app.admix.in/login"
                              target="__blank"
                           >
                              Login
                           </a>
                        </div>
                     </div>

                     {/* <Link
                        to="/blog"
                        className="nav-link"
                        onClick={this.handleClick}
                     >
                        Blog
                     </Link> */}
                  </li>
                  {/* <li className="nav-item">
                     <Link
                        to="/"
                        className="nav-link"
                        onClick={this.handleClick}
                     >
                        Login
                     </Link>
                  </li> */}
               </ul>
            </div>
         </nav>
      );
   }
}

export default Header;
