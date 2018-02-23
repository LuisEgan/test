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
import Publishers_bg from "../assets/vids/Publishers_bg.webm";
import laptops from "../assets/imgs/laptops.png";

const downloadVidDesc = () => (
  <div>
    <h3 className="st">Downloads</h3>
    <br />
    <div className="imgs-container">
      <div>
        <img src={howWorksBg} />
        <Link className="btn white-btn" to="/">
          Advir for Unity
        </Link>
        <h4 className="mb">
          V 1.0.1
          <br />Unity 2107.f.1.10 and above
        </h4>
      </div>
      <div>
        <img src={howWorksBg} />
        <Link className="btn white-btn" to="/">
          Advir for Unreal
        </Link>
        <h4 className="mb">
          V 1.0.1
          <br />Unity 2107.f.1.10 and above
        </h4>
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
      <div className="">
        <div>
          <h3 className="st">Need support?</h3>
          <br />
          <h4 className="mb">integration@advir.co</h4>
        </div>
      </div>
    </div>
  </div>
);

export default Download;
