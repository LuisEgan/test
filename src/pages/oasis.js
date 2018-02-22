import React from "react";
import Link from "gatsby-link";

// GENERAL COMPONENTS
import DescVid from "../components/DescVid";
import DescLineOFimg from "../components/DescLineOFimg"; //Description Line Overflow image
import DescCarousel from "../components/DescCarousel";
import DescLeft from "../components/DescLeft";
import HorizontalImgs from "../components/HorizontalImgs";

// ASSETS
import howWorksBg from "../assets/imgs/advertiserpage2.jpg";
import firstAdVideo from "../assets/vids/Publishers_bg.mp4";
import laptops from "../assets/imgs/laptops.png";

// Vars for HorizontalImgs
const titleText = "A collaboration between industry leaders";
const subText =
  "The Metaverse  transcends the interest of a single company and is built with various industry leaders.";
const benefitText = "";
const comImgs = [howWorksBg, howWorksBg, howWorksBg, howWorksBg];

const hyperlinksVidDesc = () => (
  <div>
    <h3 className="st">Hyperlinks for virtual reality</h3>
    <br />
    <h5 className="mb">
      Without hyperlinks, the web would be a static directory. The Oasis is a 3
      dimensional version of the hyperlink, enabling users to travel across a
      fragmented ecosystem, increasing content discovery and pushing the
      industry forward.
    </h5>
    <br />
    <Link to="/oasis" className="btn white-btn">
      Install Oasis today
    </Link>
  </div>
);

const Oasis = () => (
  <div id="oasis">
    <div id="metaverse" className="first-show">
      <div className="container">
        <h3 className="st">The metaverse is here</h3>
        <h4 className="mb">
          Drag and drop the Oasis™ portal for users to travel between your app
          and other VR apps. Make money by sending your churning users away, or
          acquire new users from other leading apps.
        </h4>
        <br />
        <button className="btn white-btn">See how it works</button>
      </div>
    </div>

    <DescVid
      videoName="hyperlinks"
      VideoDescription={hyperlinksVidDesc}
      videoSrc={firstAdVideo}
    />

    <div id="forEveryone">
      <div className="container row">
        <div className="col-sm-12 col-md-4">
          <h3 className="st">For VR users</h3>
          <h4 className="mb">
            Connect to trusted 3rd party advertising or affiliate networks.Ideal
            for small to mid developers
          </h4>
        </div>
        <div className="col-sm-12 col-md-4">
          <h3 className="st">For publishers</h3>
          <h4 className="mb">
            Increase footfall by re-activate inactive users,or monetize your
            churning usersby allowing them to teleport to other apps.
          </h4>
        </div>
        <div className="col-sm-12 col-md-4">
          <h3 className="st">For advertisers</h3>
          <h4 className="mb">
            Sponsor the metaverse travel with premium, non skippable video
            placement. Opportunities coming soon. Contact us!
          </h4>
        </div>
      </div>
    </div>

    <HorizontalImgs
      titleText={titleText}
      subText={subText}
      benefitText={benefitText}
      images={comImgs}
    />
  </div>
);

export default Oasis;