import React from "react";
import Link from "gatsby-link";

import DescVid from "../components/DescVid";
import DescLineOFimg from "../components/DescLineOFimg"; //Description Line overflow image
// Images for DescLineOFimgs
import part1 from "../assets/imgs/book2.jpg";

import howWorksBg from "../assets/imgs/advertiserpage2.jpg";
import firstAdVideo from "../assets/vids/Publishers_bg.mp4";

// const firstAdVideo = require("!!file-loader!../assets/vids/Publishers_bg.mov");
const firstAdVidDesc = () => (
  <div>
    <h3 className="st">The first platform build for VR/AR</h3>
    <br />
    <h5 className="mb">
      Advir enables you to create, manage and sell your AR/VR <br /> inventory
      in minutes, so you can focus on what you odo best: creating great content.
    </h5>
    <br />
    <h4 className="st">Get started!</h4>
  </div>
);

const IndexPage = () => (
  <div id="home">
    <div id="how-works" className="cc">
      <div>
        <h3 className="st">Monetizing VR and AR with ads that don't suck</h3>
        <h4 className="mb">
          Place non-intrusive, programmatic product placements within <br />{" "}
          your content and start generating revenues in minutes
        </h4>
        <br />
        <button className="btn white-btn">See how it works</button>
        <span>Join 150+ developers today</span>
      </div>
    </div>

    <DescVid videoDescription={firstAdVidDesc} videoSrc={firstAdVideo} />

    <DescLineOFimg
      title="1. Install"
      text="Download and instlal Advir for your favorite game engine and join a community of 150+ VR/AR developers."
      imgSrc={part1}
    />
    <DescLineOFimg
      title="1. Install"
      text="Download and instlal Advir for your favorite game engine and join a community of 150+ VR/AR developers."
      imgSrc={part1}
    />
    <DescLineOFimg
      title="1. Install"
      text="Download and instlal Advir for your favorite game engine and join a community of 150+ VR/AR developers."
      imgSrc={part1}
    />
    <DescLineOFimg
      title="1. Install"
      text="Download and instlal Advir for your favorite game engine and join a community of 150+ VR/AR developers."
      imgSrc={part1}
    />
    <DescLineOFimg
      title="1. Install"
      text="Download and instlal Advir for your favorite game engine and join a community of 150+ VR/AR developers."
      imgSrc={part1}
    />
  </div>
);

export default IndexPage;
