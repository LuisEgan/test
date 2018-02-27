import React from "react";
import Link from "gatsby-link";
import * as Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

// GENERAL COMPONENTS
import DescVid from "../components/DescVid";
import DescLineOF from "../components/DescLineOF"; //Description Line Overflow image
import DescCarousel from "../components/DescCarousel";
import DescLeft from "../components/DescLeft";
import HorizontalImgs from "../components/HorizontalImgs";
import VideoBg from "../components/VideoBg";

// ASSETS
import howWorksBg from "../assets/imgs/advertiserpage2.jpg";
import Publishers_bg from "../assets/vids/Publishers_bg.webm";
import laptops from "../assets/imgs/laptops.png";

const hardDesc = () => (
  <div>
    <h3 className="st">So simple that it is hard to believe</h3>
    <br />
    <h5 className="mb">
      Advir is the first Supply Side Platform for VR/AR aggregating inventory
      across apps. That inventory supports IAB standards formats, and is listed
      on Demand Side Partners you probably already use. That means that for you,
      the brand it’s business as usual.
    </h5>
  </div>
);

const Community = () => (
  <div id="community">
    <div id="fan" className="first-show">
      <div className="container">
        <h3 className="st">We are your number one fan</h3>
        <h4 className="mb">
          Advir is a lot more than an advertising platform. We promote our
          <br />
          developers, invite you to events, and leverage our connections for
          <br /> you to succeed.
        </h4>
        <br />
        <ScrollLink
          className="btn white-btn"
          to="statistics"
          smooth={true}
          duration={1000}
        >
          Learn more
        </ScrollLink>
      </div>
    </div>

    <div id="statistics" className="statistics">
      <div className="container row">
        <div className="col-sm-12 col-md-4 cc borderR">
          <h3 className="st">100M</h3>
          <h4 className="st">Audience we can reach through our partners</h4>
        </div>
        <div className="col-sm-12 col-md-4 cc borderR">
          <h3 className="st">150</h3>
          <h4 className="st">VR/AR developers working with us</h4>
        </div>
        <div className="col-sm-12 col-md-4 cc">
          <h3 className="st">$5k</h3>
          <h4 className="st">Per team publishing grant (coming soon)</h4>
        </div>
      </div>
    </div>

    <DescLeft descName="hardToBelieve" Description={hardDesc} />
  </div>
);

export default Community;
