import React from "react";
import Link from "gatsby-link";
import { Player } from "video-react";
import Slider from "../../../node_modules/rc-slider/lib/Slider";
import "../../../node_modules/rc-slider/assets/index.css";
import VideoBg from "../VideoBg";

import * as Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

// Step 4 Assets
import Step4_vrHeadset from "../../assets/imgs/vr_headset.png";
import Step4_vidW from "../../assets/vids/Advertisers_bg.webm";
import Step4_vid from "../../assets/vids/Advertisers_bg.mp4";

export const HowWorks = ({ videoSrc, videoType }) => (
  <div id="how-works" className="first-show">
    <VideoBg videoSrc={videoSrc} videoType={videoType} />
    <div className="container">
      <h3 className="st">Monetizing VR and AR with ads that don't suck</h3>
      <br />
      <h4 className="mb">
        Place non-intrusive, programmatic product placements within your content
        and start generating revenues in minutes
      </h4>
      <br />
      <ScrollLink
        className="btn white-btn"
        to="firstAd"
        smooth={true}
        duration={1000}
      >
        See how it works
      </ScrollLink>
      <span>Join 150+ developers today</span>
    </div>
  </div>
);

export const firstAdVidDesc = () => (
  <div>
    <h3 className="st">The first monetization platform built for VR/AR</h3>
    <br />
    <h5 className="mb">
      Admix enables you to create, manage and sell your AR/VR inventory in
      minutes, so you can focus on what you do best: creating great content.
    </h5>
    <br />
    <h4 className="st">Get started!</h4>
  </div>
);

export class DailyUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      barValue: 3500,
      moneyValue: 3292
    };

    this.handleBarChange = this.handleBarChange.bind(this);
  }

  parseMoneyValue(moneyValue) {
    const s = moneyValue.toString();
    const coma = s.length > 3 ? "," : "";
    const afterComa = s[0] === "0" ? "" : s.substring(1);
    return "$ " + s[0] + coma + afterComa;
  }

  handleBarChange(e) {
    // e is divided by 10 because the slider max value is set to 1000 for a smoother slide
    const barValue = Math.round(e / 10 * 3500 / 70);
    const moneyValue = Math.round(e / 10 * 3292 / 70);
    this.setState({ barValue, moneyValue });
  }

  render() {
    const { barValue, moneyValue, barPercentage, value } = this.state;

    return (
      <div id="dailyUsers" className="cc">
        <div className="container row">
          <div id="bar-container" className="col-sm-12 col-md-8 cc">
            <div>
              <h4 className="pt no-select">
                How many daily users does your VR app have?
              </h4>
              <div id="bar">
                <Slider
                  min={0}
                  max={1000}
                  defaultValue={700}
                  onChange={this.handleBarChange}
                />
                <span className="no-drag no-select">{barValue}</span>
              </div>
            </div>
          </div>
          <div
            id="making-container"
            className="col-sm-12 col-md-4 cc no-select no-drag"
          >
            <div id="making">
              <h3>You could be making</h3>
              <h2>
                <span id="money">{this.parseMoneyValue(moneyValue)}</span>{" "}
                <br /> <span>per month</span>
              </h2>
              <h6> *figure for indication only</h6>
            </div>
          </div>
          <div id="btn-container" className="col-sm-12">
            {/* <Link to="/download" className="btn">
              Download Admix
            </Link> */}
            <a className="btn white-btn" sp-show-form="94097">
              Download Admix
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export const nativePlacementsCarouselDesc = () => (
  <div>
    <h3 className="st">Native placements for AR/VR</h3>
    <br />
    <h5 className="mb">
      The next generation of advertising. Whether you are VR or AR, our
      interactive product placements fit with your scene and are 100% non
      intrusive. You control the brands and creative to ensure relevance, and
      get paid on engagement.
    </h5>
  </div>
);

export const flatAdsCarouselDesc = () => (
  <div>
    <h3 className="st">Flat ads for VR</h3>
    <br />
    <h5 className="mb">
      Whether static banners, dynamic banners, or full videos. our flat formats
      are the easiest way to get started. Fits well everywhere and compatible
      with millions of brands. And the best part - you get paid every time it is
      displayed in your content.
    </h5>
  </div>
);

export const introOasis = () => (
  <div>
    <h3 className="st">We’d love to work with you</h3>
    <br />
    <h5 className="mb">
      We are just at the beginning of our journey, and would love to hear your
      questions, feedback or suggestions. Admix is more than a monetization
      solution, it’s a community - we’re making each other stronger.
    </h5>
    <br />
    <a href="/contact" className="btn white-btn">
      Get in touch
    </a>
  </div>
);

export const WhyAdvir = ({ icons }) => (
  <div id="whyAdvir">
    <h3 className="st principal-st">Why Admix</h3>
    <div className="container row">
      <div className="col-sm-12 col-md-4">
        <img src={icons[1]} />
        <h3 className="st">Developer first</h3>
        <h4 className="mb">
          Content first, ads second. We are here to make you successful, not the
          other way around.
        </h4>
      </div>
      <div className="col-sm-12 col-md-4">
        <img src={icons[0]} />
        <h3 className="st">Non-intrusive</h3>
        <h4 className="mb">
          You keep control over the ads displayed in your experience, so it
          always stays 100% relevant.
        </h4>
      </div>
      <div className="col-sm-12 col-md-4">
        <img src={icons[2]} />
        <h3 className="st">Programmatic</h3>
        <h4 className="mb">
          We sell your inventory to the largest advertising networks to
          guarantee quick revenue at scale.
        </h4>
      </div>
    </div>
  </div>
);

export const Discover = ({ image }) => (
  <div id="discover" className="img-of">
    <div className="img-of-img-container">
      <h3 className="st principal-st">
        Discover the most advanced management platform
      </h3>
      <img src={image} />
    </div>
    <div className="container row">
      <div className="col-sm-12 col-md-3">
        <h3 className="st">Easy to use</h3>
        <h4 className="mb">
          Manage your campaigns from our web console. Generate revenue in
          minutes.
        </h4>
      </div>
      <div className="col-sm-12 col-md-3">
        <h3 className="st">Filter advertisers</h3>
        <h4 className="mb">
          Tag inventory to attract the right advertiser and keep the ads
          relevant to the content.
        </h4>
      </div>
      <div className="col-sm-12 col-md-3">
        <h3 className="st">Analyse campaigns</h3>
        <h4 className="mb">
          Visualise gaze-tracking reports of your past campaigns via our
          reporting tools.
        </h4>
      </div>
      <div className="col-sm-12 col-md-3">
        <h3 className="st">Optimize revenue</h3>
        <h4 className="mb">
          Gain consumer insights, and optimize the position of your ads to
          maximize revenue.
        </h4>
      </div>
    </div>
  </div>
);

export class Step4 extends React.Component {
  componentDidMount() {
    !!this.refs.player && this.refs.player.play();
  }
  render() {
    const videoSrc = [Step4_vidW, Step4_vid];
    const videoType = ["webm", "mp4"];
    return (
      <div id="vr-headset">
        <img src={Step4_vrHeadset} className="no-drag" />
        <div id="vr-video">
          <Player
            playsInline
            muted={true}
            autoPlay={true}
            loop={true}
            preload="auto"
            ref="player"
          >
            {videoSrc.map((src, i) => {
              return (
                <source src={src} type={`video/${videoType[i]}`} key={src} />
              );
            })}
          </Player>
        </div>
      </div>
    );
  }
}

// export const introOasis = () => (
//   <div>
//     <h3 className="st">Introducing the Oasis™</h3>
//     <br />
//     <h5 className="mb">
//       Our most advanced unit yet. Create portals in your content to enable mind
//       blowing metaverse travel towards other VR apps. Get paid every for every
//       outbound travel, or acquire users with inbound. Available as part of the
//       Admix solution.
//     </h5>
//     <br />
//     <Link to="/oasis" className="btn white-btn">
//       Learn more
//     </Link>
//   </div>
// );
