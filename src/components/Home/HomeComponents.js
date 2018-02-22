import React from "react";
import Link from "gatsby-link";

export const HowWorks = () => (
  <div id="how-works" className="first-show">
    <div className="container">
      <h3 className="st">Monetizing VR and AR with ads that don't suck</h3>
      <h4 className="mb">
        Place non-intrusive, programmatic product placements within <br />
        your content and start generating revenues in minutes
      </h4>
      <br />
      <button className="btn white-btn">See how it works</button>
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

export const DailyUsers = () => (
  <div id="dailyUsers" className="cc">
    <div className="container row">
      <div id="bar-container" className="col-sm-12 col-md-8 cc">
        <div>
          <h4 className="pt">How many daily users does your VR app has?</h4>
          <div id="bar" />
        </div>
      </div>
      <div id="making-container" className="col-sm-12 col-md-4 cc">
        <div id="making">
          <h3>You could be making</h3>
          <h2>
            $ 3,292 <br /> <span>per month</span>
          </h2>
          <h6> *figure for indication only</h6>
        </div>
      </div>
      <div id="btn-container" className="col-sm-12">
        <Link to="/" className="btn">
          Download Advir
        </Link>
      </div>
    </div>
  </div>
);

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
    <Link to="/" className="btn white-btn">
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
        <img src={icons[0]} />
        <h3 className="st">Programmatic</h3>
        <h4 className="mb">
          We sell your inventory to the largest advertising networks to
          guarantee quick revenue at scale.
        </h4>
      </div>
      <div className="col-sm-12 col-md-4">
        <img src={icons[0]} />
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
        <h3 className="st">Omni-channel ecosystem</h3>
        <h4 className="mb">
          Share consumer insights with advertisers, to enrich profiles and
          create lookalike audiences outside of VR/AR.
        </h4>
      </div>
    </div>
  </div>
);