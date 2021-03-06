import React from "react";
import Link from "gatsby-link";

import admix from "../../assets/imgs/admix.png";
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
         <Link to="/">
            <img src={admix} />
         </Link>
         <span className="mb">2018 © Admix</span>
         {/* <Link to="/download" className="btn">
        Download Admix
      </Link> */}
         {/* <a className="btn white-btn" sp-show-form="94097"> */}
         <a
            className="btn white-btn"
            href="http://app.admix.in/download"
            target="__blank"
         >
            Download Admix
         </a>
      </div>
      <div className="col-sm-12 col-md-3">
         <Link to="/">Developers</Link>
         <Link to="/advertisers">Advertisers</Link>
         <Link to="/oasis">Oasis™</Link>
         {/* <Link to="/contact">Get in touch</Link> */}
         <a href="/contact">Get in touch</a>
      </div>
      <div className="col-sm-12 col-md-3">
         {/* <Link to="/community">Community</Link> */}
         <Link to="/academy">Academy</Link>
         <Link to="/blog">Blog</Link>
         <a href="http://app.admix.in/login">Login</a>
         <div id="sn-buttons" className="cc">
            <a
               href="https://web.facebook.com/groups/249932279077667/"
               target="_blank"
            >
               <i className="fab fa-facebook-f" />
            </a>
            <a>
               <i className="fab fa-twitter not-yet" />
            </a>
            <a>
               <i className="fab fa-instagram not-yet" />
            </a>
            <a>
               <i className="fab fa-youtube not-yet" />
            </a>
         </div>
      </div>
      <div className="col-sm-12 col-md-3">
         {/* <span className="mb">Subscribe to newsletter</span> */}
         <div id="email-container">
            {/* <input type="text" className="form-control" placeholder="email" /> */}
            {/* <input type="submit" className="btn" value="ok" /> */}
         </div>
         {sendPulseForm}
      </div>
   </div>
);

export default VideoBg;
