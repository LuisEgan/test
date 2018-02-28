import React from "react";
import Link from "gatsby-link";

import advirBlack from "../../assets/imgs/advir_black.png";
import "../../assets/css/fontAwesome/fontawesome-all.min.css";

const sendPulseForm = (
  <script
    src="//static-login.sendpulse.com/apps/fc3/build/loader.js"
    sp-form-id="c33250e3c4253a68b2c4371805574040c37e5d2156506fcbf12b1ae18b2a7d65"
  />
);

const VideoBg = () => (
  <div id="footer" className="row">
    <div className="col-sm-12 col-md-3">
      <img src={advirBlack} />
      <span className="mb">2018 © Advir</span>
      <Link to="/download" className="btn">
        Download Advir
      </Link>
    </div>
    <div className="col-sm-12 col-md-3">
      <Link to="/">Developers</Link>
      <Link to="/advertisers">Advertisers</Link>
      {/* <Link to="/oasis">The Oasis™</Link> */}
    </div>
    <div className="col-sm-12 col-md-3">
      {/* <Link to="/community">Community</Link> */}
      <Link to="/">Get in touch</Link>
    </div>
    <div className="col-sm-12 col-md-3">
      {/* {sendPulseForm} */}
      <span className="mb">Subscribe to newsletter</span>
      <div id="email-container">
        <input type="text" className="form-control" placeholder="email" />
        <input type="submit" className="btn" value="ok" />
      </div>
      <div id="sn-buttons" className="cc">
        <a href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
  </div>
);

export default VideoBg;
