import React from "react";
import Link from "gatsby-link";

// GENERAL COMPONENTS
import DescVid from "../components/DescVid";
import DescLineOF from "../components/DescLineOF"; //Description Line Overflow image
import DescCarousel from "../components/DescCarousel";
import DescLeft from "../components/DescLeft";
import HorizontalImgs from "../components/HorizontalImgs";

// ASSETS
import Unity from "../assets/imgs/Official_unity_logo-white.png";
import Unreal from "../assets/imgs/Unreal_Engine_Logo-white.png";
import Publishers_bg from "../assets/vids/Publishers_bg.webm";
import laptops from "../assets/imgs/laptops.png";

const downloadVidDesc = () => (
  <div>
    <h3 className="st">Downloads</h3>
    <br />
    <div className="imgs-container">
      <div>
        <img src={Unity} />
        <Link className="btn white-btn" to="/">
          Advir for Unity
        </Link>
      </div>
      <div>
        <img src={Unreal} />
        <Link className="btn white-btn" to="/">
          Advir for Unreal
        </Link>
      </div>
    </div>
  </div>
);

const videoTitle = <h3 className="st">Tutorial</h3>;

const Download = () => (
  <div id="download">
    <div className="container row">
      <DescVid
        videoName="downloadVid"
        VideoDescription={downloadVidDesc}
        videoSrc={Publishers_bg}
        videoTitle={videoTitle}
      />
      <div id="supp-container">
        <div>
          <h3 className="st">Need support?</h3>
          <br />
          <h4 className="mb">
            <a href="mailto:contact@advir.co">contact@advir.co</a>{" "}
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default Download;
