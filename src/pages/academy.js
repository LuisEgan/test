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
import FB from "../assets/imgs/facebookLogo.png";
import realities_center from "../assets/imgs/realities_centre.jpg";
import JXR from "../assets/imgs/JXR-Logo-B.png";
import MRARVR from "../assets/imgs/mrarvr.png";
import ABC from "../assets/imgs/ABC_business.png";

// VIDEOS
import Publishers_bg from "../assets/vids/Publishers_bg.webm";
import Academy_bg from "../assets/vids/Academy_bg.mp4";
import Academy_bgW from "../assets/vids/Academy_bg.webm";

// Vars for HorizontalImgs
const titleText = "A collaboration between industry leaders";
const subText =
   "The Metaverse  transcends the interest of a single company and is built with various industry leaders.";
const benefitText = "";
const comImgs = [];

const AcademyDescVid = () => (
   <div>
      <h3 className="st">We champion VR/AR entrepreneurs</h3>
      <br />
      <h5 className="mb">
         Developing VR/AR content is hard, but building a successful company is
         even harder. The Admix Academy aims to build an ecosystem to provide
         tools and financial support for entrepreneurs worldwide in their
         mission to change the world with immersive technologies.
      </h5>
      <br />
      {/* <Link to="/oasis" className="btn white-btn">
         Install Oasis
      </Link> */}
      <a
         className="btn white-btn"
         href="https://web.facebook.com/groups/249932279077667/"
         target="_blank"
      >
         Join our Facebook group
      </a>
   </div>
);

class Academy extends React.Component {
   constructor(props) {
      super(props);

      this.state = { ytVidTime: 0 };

      this.ytVid;
   }

   componentDidMount() {
      this.ytVid = document.getElementById("academyVid");
   }

   render() {
      return (
         <div id="academy">
            <div className="first-show">
               <VideoBg
                  videoSrc={[Academy_bgW, Academy_bg]}
                  videoType={["webm", "mp4"]}
                  mobileBgImgClass={`videoBg-container-oasis`}
               />
               <div className="container">
                  <h3 className="st">Empowering VR/AR pioneers worldwide</h3>
                  <br />
                  <h4 className="mb">
                     Join the Admix Academy today to benefit from free courses,
                     invite-only events, exclusive offers and discounts to help
                     building your VR/AR company.
                  </h4>
                  <br />
                  <ScrollLink
                     className="btn white-btn"
                     to="academyVid"
                     smooth={true}
                     duration={1000}
                  >
                     Learn more
                  </ScrollLink>
                  <div className="first-show-footer">
                     <div>Join our community on</div>
                     <a
                        href="https://web.facebook.com/groups/249932279077667/ "
                        target="_blank"
                     >
                        <img src={FB} alt="FB" />
                     </a>
                  </div>
               </div>
            </div>

            <DescVid
               videoName="academyVid"
               VideoDescription={AcademyDescVid}
               youtubeId={"F7KaZXcEueE"}
            />

            <div id="forEveryone">
               <div className="container row">
                  <div className="col-sm-12 col-md-3">
                     <h3 className="st">Resources</h3>
                     <h4 className="mb">
                        From funding to PR or marketing, check our free
                        resources to help you build your VR/AR company.
                     </h4>
                  </div>
                  <div className="col-sm-12 col-md-3">
                     <h3 className="st">Events</h3>
                     <h4 className="mb">
                        Keep in touch with our schedule of events to network and
                        showcase your projects.
                     </h4>
                  </div>
                  <div className="col-sm-12 col-md-3">
                     <h3 className="st">Courses</h3>
                     <h4 className="mb">
                        In depth videos on specific topics like AR frameworks,
                        monetization or contacting influencers.
                     </h4>
                  </div>
                  <div className="col-sm-12 col-md-3">
                     <h3 className="st">Grants</h3>
                     <h4 className="mb">
                        Apply for mentoring and to get your VR/AR project
                        funded. Coming soon.
                     </h4>
                  </div>
               </div>
            </div>

            <div id="partners">
               <h1 className="st">Our partners</h1>
               <div id="partners-logos">
                  <img src={realities_center} alt="Realities Center" />
                  <img src={ABC} alt="ABC" />
                  <img src={JXR} alt="JXR" />
                  <img src={MRARVR} alt="MRARVR" />
               </div>
               <p className="mb">
                  Do you have a product or service to promote to the VR/AR
                  community? Are you running a VR meetup, group or community?
                  Drop us a line to become a partner.
               </p>
               {/* <Link to="/contact" className="btn blue-btn">
                  Become a partner
               </Link> */}
               <a
                  href="/contact"
                  className="btn blue-btn"
                  onClick={this.handleClick}
               >
                  Become a partner
               </a>
            </div>

            <div id="getStarted">
               <div>
                  <h4 className="st">Get started</h4>
                  <a
                     href="https://web.facebook.com/groups/249932279077667/"
                     target="_blank"
                     className="btn white-btn"
                  >
                     Join our Facebook group
                  </a>
               </div>
               <div>
                  <h4 className="st">Questions?</h4>
                  <a
                     href="/contact"
                     className="btn white-btn"
                     onClick={this.handleClick}
                  >
                     Get in touch
                  </a>
                  {/* <Link to="/contact" className="btn white-btn">
                     Get in touch
                  </Link> */}
               </div>
            </div>
         </div>
      );
   }
}

export default Academy;
