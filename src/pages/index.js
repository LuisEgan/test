import React from "react";
import Link from "gatsby-link";

// HOME COMPONENTS
import {
  HowWorks,
  firstAdVidDesc,
  DailyUsers,
  nativePlacementsCarouselDesc,
  flatAdsCarouselDesc,
  introOasis,
  WhyAdvir,
  Discover
} from "../components//Home/HomeComponents";

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

// Videos
import Index_bg from "../assets/vids/Index_bg.webm";

// Images for DescLineOFs
import part1 from "../assets/imgs/book2.jpg";

// Images for Carousels
const carouselImgs = [howWorksBg];

// Icons for Why Advir
const icons = [part1];

// Vars for HorizontalImgs
const titleText = "Join a community of 150+ VR / AR developers";
const subText =
  "We cross-promote our developers to the community and to a wider audience with our network of influencers.";
const benefitText = "Learn more about the benefits";
const comImgs = [
  part1,
  part1,
  part1,
  part1,
  part1,
  part1,
  part1,
  part1,
  part1,
  part1
];

class IndexPage extends React.Component {
  render() {
    return (
      <div id="home">
        <HowWorks videoSrc={Index_bg} />
        <DescVid
          videoName="firstAd"
          VideoDescription={firstAdVidDesc}
          youtubeId={`-6Pm8qFu1rE`}
        />
        <div id="steps">
          <DescLineOF
            title="1. Install"
            text="Download and instlal Advir for your favorite game engine and join a community of 150+ VR/AR developers."
            imgSrc={part1}
            videoSrc={Index_bg}
            youtubeId={`-6Pm8qFu1rE`}
          />
          <DescLineOF
            title="2. Place"
            text="Define your inventory - areas of your content to sell to advertisers. It can be banners, videos or 3D placements. You keep the control."
            imgSrc={part1}
            videoSrc={Index_bg}
            youtubeId={`-6Pm8qFu1rE`}
          />
          <DescLineOF
            title="3. Configure"
            text="Use our web platform to manage your apps, filter the most relevant advertisers, and activate your campaign."
            imgSrc={part1}
            videoSrc={Index_bg}
            youtubeId={`-6Pm8qFu1rE`}
          />
          <DescLineOF
            title="4. Sell"
            text="Your inventory is sold instantly to our networks of thousands of advertisers. You make money every time the user looks at it."
            imgSrc={part1}
            videoSrc={Index_bg}
            youtubeId={`-6Pm8qFu1rE`}
          />
        </div>
        <DailyUsers />
        <DescCarousel
          carouselName="placements"
          CarouselDescription={nativePlacementsCarouselDesc}
          images={[carouselImgs]}
        />
        <DescCarousel
          carouselName="flatAds"
          CarouselDescription={flatAdsCarouselDesc}
          images={[carouselImgs]}
        />
        <DescLeft descName="introOasis" Description={introOasis} />
        <WhyAdvir icons={icons} />
        <Discover image={laptops} />
        <HorizontalImgs
          titleText={titleText}
          subText={subText}
          benefitText={benefitText}
          images={comImgs}
        />
      </div>
    );
  }
}

export default IndexPage;
