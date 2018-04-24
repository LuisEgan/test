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
import CircleText from "../components/CircleText";

// ASSETS
import howWorksBg from "../assets/imgs/advertiserpage2.jpg";
import Advertisers_bgW from "../assets/vids/Advertisers_bg.webm";
import Advertisers_bg from "../assets/vids/Advertisers_bg.mp4";
import pledgelogo_2 from "../assets/imgs/pledgelogo_2.png";
import yahoo from "../assets/imgs/yahoo_logo_t.png";
import aol from "../assets/imgs/aol-logo-vector.png";
import bidswitch from "../assets/imgs/bidswitch_logo.png";
import laptop from "../assets/imgs/Advir_devPlatform4.png";
import native1 from "../assets/imgs/Ads/Native/web1.jpg";
import native2 from "../assets/imgs/Ads/Native/web3.jpg";
import native3 from "../assets/imgs/Ads/Native/web4.jpg";
import native4 from "../assets/imgs/Ads/Native/web7.jpg";
import flat1 from "../assets/imgs/Ads/Flat_Banner/web5.jpg";
import flat2 from "../assets/imgs/Ads/Flat_Banner/web6.jpg";
import flat3 from "../assets/imgs/Ads/Flat_Banner/web8.jpg";
import flat4 from "../assets/imgs/Ads/Flat_Banner/web9.jpg";
import flat5 from "../assets/imgs/Ads/Flat_Banner/web10.jpg";
import flat6 from "../assets/imgs/Ads/Flat_Banner/web11.jpg";
import flat7 from "../assets/imgs/Ads/Flat_Banner/web12.jpg";

import flatV1 from "../assets/imgs/Ads/Flat_Video/web2.jpg";
import flatV2 from "../assets/imgs/Ads/Flat_Video/web13.jpg";

// Images for Carousels
const carouselImgs = [howWorksBg];
const nativeCarouselImgs = [native1, native2, native3, native4];
const flatCarouselImgs = [flat1, flat2, flat3, flat4, flat5, flat6, flat7];
const flatVCarouselImgs = [flatV1, flatV2];

const hardDesc = () => (
   <div>
      <h3 className="st">So simple that it is hard to believe</h3>
      <br />
      <h5 className="mb">
         Admix is the first Supply Side Platform for VR/AR aggregating inventory
         across apps. That inventory supports IAB standards formats, and is
         listed on Demand Side Partners you probably already use. That means
         that for you, the brand it’s business as usual.
      </h5>
   </div>
);

const betterFutureDesc = () => (
   <div>
      <h3 className="st">Creating a better future for adtech</h3>
      <br />
      <h5 className="mb">
         We are leading vrarpledge.org, an association fighting against
         intrusive ads in immersive technologies.
      </h5>
      <br />
      <a
         href="https://www.vrarpledge.org/"
         target="_blank"
         className="btn white-btn"
      >
         Learn more
      </a>
   </div>
);

const nativePlacementsDesc = () => (
   <div>
      <h3 className="st">Native placements for AR and AR</h3>
      <br />
      <h5 className="mb">
         The next generation of programmatic advertising. Serve 3D, dynamic
         product placements in VR and AR. Admix’s proprietary format is
         compatible with the IAB Native formats, so it’s business as usual for
         you - we can even build the 3D creative for you.
      </h5>
   </div>
);

const videoAdsDesc = () => (
   <div>
      <h3 className="st">Video ads for VR</h3>
      <br />
      <h5 className="mb">
         Admix is the only SSP enabling you to serve videos to a captive VR
         audience - a new way to discover content. Compatible with your existing
         VAST tags, you can get your video campaign started in minutes from your
         preferred DSP.
      </h5>
   </div>
);

const displayAdsDesc = () => (
   <div>
      <h3 className="st">Display ads for VR</h3>
      <br />
      <h5 className="mb">
         The easiest way to get started. With Admix, you are free to re-use your
         display creatives without having to update it. It just works from your
         preferred DSPs - like any web or mobile display campaign. We make
         display advertising trendy again!
      </h5>
   </div>
);

const Advertisers = () => (
   <div id="advertisers">
      <div id="yourBrand" className="first-show">
         <VideoBg
            videoSrc={[Advertisers_bgW, Advertisers_bg]}
            videoType={["webm", "mp4"]}
         />
         <div className="container">
            <h3 className="st">Your brand, immersed.</h3> <br />
            <h4 className="mb">
               Buy VR/AR inventory programmatically through DSPs you already
               use. Reach an engaged audience with standardized ad units, access
               gaze tracking data, and get ready for the immersive revolution.
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
            <img src={yahoo} />
            <img src={aol} />
            <img src={bidswitch} />
         </span>
      </div>

      {/* <DescLeft descName="hardToBelieve" Description={hardDesc} /> */}
      <DescVid
         videoName="hardToBelieve"
         VideoDescription={hardDesc}
         youtubeId={`-6Pm8qFu1rE`}
      />
      <div id="statistics" className="statistics">
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
         images={nativeCarouselImgs}
      />
      <DescCarousel
         carouselName="videoAds"
         CarouselDescription={videoAdsDesc}
         images={flatVCarouselImgs}
      />
      <DescCarousel
         carouselName="displayAds"
         CarouselDescription={displayAdsDesc}
         images={flatCarouselImgs}
      />

      <div id="reporting" className="img-of">
         <div className="img-of-img-container">
            <h3 className="st principal-st">
               Stunning VR/AR reporting and analytics
            </h3>
            <img src={laptop} />
         </div>
         <div className="container row">
            <div className="col-sm-12 col-md-3">
               <h3 className="st">Contextual data</h3>
               <h4 className="mb">
                  Admix provides tools to understand the VR/AR environment and
                  serve relevant ads without intruding on user privacy.
               </h4>
            </div>
            <div className="col-sm-12 col-md-3">
               <h3 className="st">Gaze tracking</h3>
               <h4 className="mb">
                  Anonymously tracking where users look, Admix validates
                  impressions that have been seen by a real human – not a bot!
               </h4>
            </div>
            <div className="col-sm-12 col-md-3">
               <h3 className="st">Tiered engagement</h3>
               <h4 className="mb">
                  Pay a different amount based on user engagement - gaze,
                  motion, action - and maximise your campaign budget.
               </h4>
            </div>
            <div className="col-sm-12 col-md-3">
               <h3 className="st">Data analysis</h3>
               <h4 className="mb">
                  Analyse aggregated heatmaps to understand user behaviour,
                  tweak campaigns and improve results.
               </h4>
            </div>
         </div>
      </div>

      <div id="circles">
         <h2 className="st principal-st">Pioneering engagement in VR/AR</h2>
         <div className="container row">
            <div className="col-sm-12 col-md-4">
               <CircleText
                  percent="29"
                  strokeWidth="6"
                  trailWidth="6"
                  strokeColor="#5077E1"
                  text="ENGAGEMENT"
               />
               <div>
                  <h3 className="st">Active engagement</h3>
               </div>
               <div>
                  <h4 className="mb">
                     Users actively interacting with the placement (view or
                     action), across all formats.
                  </h4>
               </div>
            </div>
            <div className="col-sm-12 col-md-4">
               <CircleText
                  percent="67"
                  strokeWidth="6"
                  trailWidth="6"
                  strokeColor="#37CACA"
                  text="BRAND RECALL"
               />
               <div>
                  <h3 className="st">Lasting impact</h3>
               </div>
               <div>
                  <h4 className="mb">
                     Users able to name the brands they have seen in a VR
                     experience they just completed.
                  </h4>
               </div>
            </div>
            <div className="col-sm-12 col-md-4">
               <CircleText
                  percent="73"
                  strokeWidth="6"
                  trailWidth="6"
                  strokeColor="#4B44C5"
                  text="POSITIVE FEEDBACK"
               />
               <div>
                  <h3 className="st">A great experience</h3>
               </div>
               <div>
                  <h4 className="mb">
                     Users reporting that brand placements didn't impact the
                     experience negatively.
                  </h4>
               </div>
            </div>
         </div>
      </div>

      <DescLeft descName="betterFuture" Description={betterFutureDesc} />
   </div>
);

export default Advertisers;
