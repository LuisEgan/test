import React from "react";
import Link from "gatsby-link";

// GENERAL COMPONENTS
import DescVid from "../components/DescVid";
import DescLineOFimg from "../components/DescLineOFimg"; //Description Line Overflow image
import DescCarousel from "../components/DescCarousel";
import DescLeft from "../components/DescLeft";

// ASSETS
import howWorksBg from "../assets/imgs/advertiserpage2.jpg";
import firstAdVideo from "../assets/vids/Publishers_bg.mp4";
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

const Oasis = () => (
  <div id="advertisers">
    <div id="yourBrand" className="first-show">
      <div className="container">
        <h3 className="st">Your brand, immersed.</h3>
        <h4 className="mb">
          Buy VR/AR inventory programmatically through DSPs you already use.
          Reach an engaged audience with standardized ad units, access gaze
          tracking data, and get ready for the immersive revolution.
        </h4>
        <br />
        <button className="btn white-btn">See how it works</button>
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
  </div>
);

export default Oasis;
