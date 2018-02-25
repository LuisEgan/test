import React from "react";
import Link from "gatsby-link";
import { Line, Circle } from "rc-progress";
import * as Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

// GENERAL COMPONENTS
import DescVid from "../components/DescVid";
import DescLineOF from "../components/DescLineOF"; //Description Line Overflow image
import DescCarousel from "../components/DescCarousel";
import DescLeft from "../components/DescLeft";
import VideoBg from "../components/VideoBg";

// ASSETS
import howWorksBg from "../assets/imgs/advertiserpage2.jpg";
import Advertisers_bg from "../assets/vids/Advertisers_bg.webm";
import pledgelogo_2 from "../assets/imgs/pledgelogo_2.png";
import laptops from "../assets/imgs/laptops.png";

// Images for Carousels
const carouselImgs = [howWorksBg];

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

const betterFutureDesc = () => (
  <div>
    <h3 className="st">Creating a better future for adtech</h3>
    <br />
    <h5 className="mb">
      We are leading vrarpledge.org, an association fighting against intrusive
      ads in immersive technologies.
    </h5>
    <br />
    <Link to="/" className="btn white-btn">
      Learn more
    </Link>
  </div>
);

const nativePlacementsDesc = () => (
  <div>
    <h3 className="st">Native placements for AR and AR</h3>
    <br />
    <h5 className="mb">
      The next generation of advertising. Whether you are in VR or AR, our
      interactive product placements fit with your scene and are 100% non
      intrusive. You control the brands and creative to ensure relevance, and
      get paid on engagement.
    </h5>
  </div>
);

const videoAdsDesc = () => (
  <div>
    <h3 className="st">Video ads for VR</h3>
    <br />
    <h5 className="mb">
      Whether static banners, dynamic banners, or full videos, our flat formats
      are the easiest way to get started. Fits well everywhere and compatible
      with millions of brands. And the best part - you get paid every time it it
      displayed in your content!
    </h5>
  </div>
);

const displayAdsDesc = () => (
  <div>
    <h3 className="st">Display ads for VR</h3>
    <br />
    <h5 className="mb">
      Whether static banners, dynamic banners, or full videos, our flat formats
      are the easiest way to get started. Fits well everywhere and compatible
      with millions of brands. And the best part - you get paid every time it it
      displayed in your content!
    </h5>
  </div>
);

const Advertisers = () => (
  <div id="advertisers">
    <div id="yourBrand" className="first-show">
      <VideoBg videoSrc={Advertisers_bg} videoType="webm" />
      <div className="container">
        <h3 className="st">Your brand, immersed.</h3>
        <h4 className="mb">
          Buy VR/AR inventory programmatically through DSPs you already use.
          Reach an engaged audience with standardized ad units, access gaze
          tracking data, and get ready for the immersive revolution.
        </h4>
        <br />
        <ScrollLink
          className="btn white-btn"
          to="hardToBelieve"
          smooth={true}
          duration={1000}
        >
          See how it works
        </ScrollLink>
      </div>
      <span className="cc">
        <img src={pledgelogo_2} />
        <img src={pledgelogo_2} />
        <img src={pledgelogo_2} />
        <img src={pledgelogo_2} />
      </span>
    </div>

    <DescLeft descName="hardToBelieve" Description={hardDesc} />

    <div id="statistics">
      <div className="container row">
        <div className="col-sm-12 col-md-4 cc borderR">
          <h3 className="st">400%</h3>
          <h4 className="st">
            Year on year <br /> market growth
          </h4>
        </div>
        <div className="col-sm-12 col-md-4 cc borderR">
          <h3 className="st">10M</h3>
          <h4 className="st">
            Monthly active <br /> VR users
          </h4>
        </div>
        <div className="col-sm-12 col-md-4 cc">
          <h3 className="st">300M</h3>
          <h4 className="st">
            Users with <br /> access to AR
          </h4>
        </div>
      </div>
    </div>

    <DescCarousel
      carouselName="nativePlacements"
      CarouselDescription={nativePlacementsDesc}
      images={carouselImgs}
    />
    <DescCarousel
      carouselName="videoAds"
      CarouselDescription={videoAdsDesc}
      images={carouselImgs}
    />
    <DescCarousel
      carouselName="displayAds"
      CarouselDescription={displayAdsDesc}
      images={carouselImgs}
    />

    <div id="reporting" className="img-of">
      <div className="img-of-img-container">
        <h3 className="st">Stunning VR/AR reporting and analytics</h3>
        <img src={laptops} />
      </div>
      <div className="container row">
        <div className="col-sm-12 col-md-3">
          <h3 className="st">Gaze tracking</h3>
          <h4 className="mb">
            Tracking where people looks, Advir validates impressions that have
            actually been seen by a human – not bots!.
          </h4>
        </div>
        <div className="col-sm-12 col-md-3">
          <h3 className="st">Data analysis</h3>
          <h4 className="mb">
            Analyse heatmaps or export your data, to understand customer
            behaviour and maximize engagement.
          </h4>
        </div>
        <div className="col-sm-12 col-md-3">
          <h3 className="st">Segment audiences</h3>
          <h4 className="mb">
            Gaze tracking data enables us to segment users based on their
            engagement with specific ad categories.
          </h4>
        </div>
        <div className="col-sm-12 col-md-3">
          <h3 className="st">Omni-channel</h3>
          <h4 className="mb">
            Create lookalike audiences outside of VR/AR, enriching your first
            party data with insights from Advir.
          </h4>
        </div>
      </div>
    </div>

    <div id="circles">
      <h2 className="st">Pioneering engagement in VR/AR</h2>
      <div className="container row">
        <div className="col-sm-12 col-md-4">
          <div>
            <Circle
              percent="29"
              strokeWidth="4"
              trailWidth="4"
              strokeColor="#5077E1"
            />
            <div className="mb circleText">
              29% <br /> <span>ENGAGEMENT</span>{" "}
            </div>
          </div>
          <div>
            <h3 className="st">Active engagement</h3>
          </div>
          <div>
            <h4 className="mb">
              Users actively interacting with the placement (view or action),
              across all formats.
            </h4>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div>
            <Circle
              percent="67"
              strokeWidth="4"
              trailWidth="4"
              strokeColor="#37CACA"
            />
            <div className="mb circleText">
              67% <br /> <span>BRAND RECALL</span>{" "}
            </div>
          </div>
          <div>
            <h3 className="st">Lasting impact</h3>
          </div>
          <div>
            <h4 className="mb">
              Users able to name the brands they have seen in a VR experience
              they just completed.
            </h4>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div>
            <Circle
              percent="73"
              strokeWidth="4"
              trailWidth="4"
              strokeColor="#4B44C5"
            />
            <div className="mb circleText">
              73% <br /> <span>POSITIVE FEEDBACK</span>{" "}
            </div>
          </div>
          <div>
            <h3 className="st">A geat experience</h3>
          </div>
          <div>
            <h4 className="mb">
              Users reporting that brand placements didn't impact the experience
              negatively.
            </h4>
          </div>
        </div>
      </div>
    </div>

    <DescLeft descName="betterFuture" Description={betterFutureDesc} />
  </div>
);

export default Advertisers;
