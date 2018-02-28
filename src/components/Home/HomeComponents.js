import React from "react";
import Link from "gatsby-link";
import { Player } from "video-react";
import Slider from "../../../node_modules/rc-slider/lib/Slider";
import "../../../node_modules/rc-slider/assets/index.css";
import VideoBg from "../VideoBg";

import * as Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

export const HowWorks = ({ videoSrc }) => (
  <div id="how-works" className="first-show">
    <VideoBg videoSrc={videoSrc} videoType="webm" />
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
    <h3 className="st">The first platform build for VR/AR</h3>
    <br />
    <h5 className="mb">
      Advir enables you to create, manage and sell your AR/VR inventory in
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
                How many daily users does your VR app has?
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
            <Link to="/download" className="btn">
              Download Advir
            </Link>
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
    <h3 className="st">Introducing the Oasis™</h3>
    <br />
    <h5 className="mb">
      Without hyperlinks, the web would be a static directory. The Oasis is a 3
      dimensional version of the hyperlink, enabling users to travel across a
      fragmented ecosystem, increasing content discovery and pushing the
      industry forward.
    </h5>
    <br />
    <Link to="/oasis" className="btn white-btn">
      Learn more
    </Link>
  </div>
);

export const WhyAdvir = ({ icons }) => (
  <div id="whyAdvir">
    <h3 className="st">Why Advir</h3>
    <div className="container row">
      <div className="col-sm-12 col-md-4">
        <img src={icons[0]} />
        <h3 className="st">Non-intrusive</h3>
        <h4 className="mb">
          You keep complete control over the ads displayed in your experience,
          so it always stays 100% relevant.
        </h4>
      </div>
      <div className="col-sm-12 col-md-4">
        <img src={icons[1]} />
        <h3 className="st">Programmatic</h3>
        <h4 className="mb">
          We sell your inventory to the largest advertising networks to
          guarantee quick revenue at scale.
        </h4>
      </div>
      <div className="col-sm-12 col-md-4">
        <img src={icons[2]} />
        <h3 className="st">Open API</h3>
        <h4 className="mb">
          Connect services to Advir via our open API, or publish your own tools
          to our marketplace.
        </h4>
      </div>
    </div>
  </div>
);

export const Discover = ({ image }) => (
  <div id="discover" className="img-of">
    <div className="img-of-img-container">
      <h3 className="st">Discover the most advanced management platform</h3>
      <img src={image} />
    </div>
    <div className="container row">
      <div className="col-sm-12 col-md-4">
        <h3 className="st">Advertiser filter</h3>
        <h4 className="mb">
          Before running a campaign, tag inventory to attract the right
          advertiser and keep the ads relevant to the content.
        </h4>
      </div>
      <div className="col-sm-12 col-md-4">
        <h3 className="st">Data analysis</h3>
        <h4 className="mb">
          Visualise gaze-tracking reports of your past campaigns via our
          partners’ tools Retinad and Cognitive VR.
        </h4>
      </div>
      <div className="col-sm-12 col-md-4">
        <h3 className="st">Omni-channel</h3>
        <h4 className="mb">
          Share consumer insights with advertisers, to enrich profiles and
          create lookalike audiences outside of VR/AR.
        </h4>
      </div>
    </div>
  </div>
);
