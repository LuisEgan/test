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

const firstAdVidDesc = () => (
  <div>
    <h3 className="st">Downloads</h3>
    <br />
    <div className="row">
      <div className="col-sm-12 col-md-5">
        <img src={howWorksBg} />
        <Link className="btn white-btn" to="/">
          Advir for Unity
        </Link>
        <h4 className="mb">
          V 1.0.1
          <br />Unity 2107.f.1.10 and above
        </h4>
      </div>
      <div id="sep" className="col-sm-12 col-md-2" />
      <div className="col-sm-12 col-md-5">
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
        VideoDescription={firstAdVidDesc}
        videoSrc={firstAdVideo}
        videoTitle={videoTitle}
      />
      {/* <div className="col-sm-12 col-md-6">
        <DescVid
          videoName="downloadVid"
          VideoDescription={firstAdVidDesc}
          videoSrc={firstAdVideo}
          videoTitle={videoTitle}
        />
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="cc">
          <div>
            <h3 className="st">Need support?</h3>
            <br />
            <h4 className="mb">integration@advir.co</h4>
          </div>
        </div>
      </div> */}
    </div>
  </div>
);

export default Download;
