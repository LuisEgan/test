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
import laptops from "../assets/imgs/laptops.png";
import ss from "../assets/imgs/SS.png";
import hf from "../assets/imgs/HF.png";
import arrowRight from "../assets/imgs/arrowRight.png";
import VB from "../assets/imgs/VB-logo-300x300.png";
import VF from "../assets/imgs/vrfocus.png";

// VIDEOS
import Publishers_bg from "../assets/vids/Publishers_bg.webm";
import Oasis_bg from "../assets/vids/Oasis_bg.mp4";
import Oasis_bgW from "../assets/vids/Oasis_bg.webm";

// Vars for HorizontalImgs
const titleText = "A collaboration between industry leaders";
const subText =
   "The Metaverse  transcends the interest of a single company and is built with various industry leaders.";
const benefitText = "";
const comImgs = [];

const hyperlinksVidDesc = () => (
   <div>
      <h3 className="st">Hyperlinks for virtual reality</h3>
      <br />
      <h5 className="mb">
         Without hyperlinks, the web would be a static directory. The Oasis is a
         3 dimensional version of the hyperlink, enabling users to travel across
         a fragmented ecosystem, increasing content discovery and pushing the
         industry forward.
      </h5>
      <br />
      {/* <Link to="/oasis" className="btn white-btn">
         Install Oasis
      </Link> */}
      <a className="btn white-btn" sp-show-form="94097">
         Install Oasis
      </a>
   </div>
);

const Oasis = () => (
   <div id="oasis">
      <div id="metaverse" className="first-show">
         <VideoBg
            videoSrc={[Oasis_bgW, Oasis_bg]}
            videoType={["webm", "mp4"]}
            mobileBgImgClass={`videoBg-container-oasis`}
         />
         <div className="container">
            <h3 className="st">The metaverse is here</h3>
            <br />
            <h4 className="mb">
               The Oasis™ is a portal linking different VR worlds together.
               Simply drag and drop it to your VR experience and your users can
               teleport freely across the VR apps they love.
            </h4>
            <br />
            <ScrollLink
               className="btn white-btn"
               to="hyperlinks"
               smooth={true}
               duration={1000}
            >
               See how it works
            </ScrollLink>
            <div className="first-show-footer">
               <div>As seen on</div>
               <div className="cc">
                  <a
                     href="https://venturebeat.com/2018/04/05/ready-player-one-inspires-oasis-vr-portals-so-users-can-seamlessly-switch-apps/"
                     target="_blank"
                  >
                     <img src={VB} alt="" />
                  </a>
                  <a
                     href="https://www.vrfocus.com/2018/04/seamlessly-transition-between-vr-games-apps-with-oasis/"
                     target="_blank"
                  >
                     <img src={VF} alt="" />
                  </a>
               </div>
            </div>
         </div>
      </div>

      <DescVid
         videoName="hyperlinks"
         VideoDescription={hyperlinksVidDesc}
         youtubeId={"yq2dR_tq0e0"}
      />

      <div id="forEveryone">
         <div className="container row">
            <div className="col-sm-12 col-md-4">
               <h3 className="st">For developers</h3>
               <h4 className="mb">
                  Become part of the Metaverse, maximize discovery of your app
                  and gain new users.
               </h4>
            </div>
            <div className="col-sm-12 col-md-4">
               <h3 className="st">For VR users</h3>
               <h4 className="mb">
                  Seamlessly switch between your favourite apps while staying
                  immersed in virtual reality.
               </h4>
            </div>
            <div className="col-sm-12 col-md-4">
               <h3 className="st">For advertisers</h3>
               <h4 className="mb">
                  Sponsor the metaverse travel with premium placements. Coming
                  soon. Contact us!
               </h4>
            </div>
         </div>
      </div>

      <div className="horizontal-images">
         <div className="container row">
            <div className="col-sm-12 col-md-12 hor-img-dl">
               <h4 className="st">
                  World’s first metaverse travel accomplished on March 28th,
                  2018
               </h4>
               <div id="transition">
                  <div>
                     <a href="http://www.somniumspace.com/" target="_blank">
                        <img src={ss} alt="Somnium Space" />{" "}
                     </a>
                  </div>
                  <div className="cc">
                     <img className="white-img" src={arrowRight} alt="right" />
                  </div>
                  <div>
                     <a href="http://www.highfidelity.com/" target="_blank">
                        <img src={hf} alt="High Fidelity" />
                     </a>
                  </div>
               </div>
               <h4 className="st">Let’s make history together</h4>
               <a className="btn white-btn" sp-show-form="94097">
                  Join the waitlist
               </a>
            </div>
         </div>
      </div>
   </div>
);

export default Oasis;
