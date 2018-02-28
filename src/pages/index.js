import React from "react";
import Link from "gatsby-link";
import { Circle } from "rc-progress";

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
import CircleText from "../components/CircleText";

// ASSETS
import howWorksBg from "../assets/imgs/advertiserpage2.jpg";
import whyAdvir1 from "../assets/imgs/why-advir-01.png";
import whyAdvir2 from "../assets/imgs/why-advir-02.png";
import whyAdvir3 from "../assets/imgs/why-advir-03.png";
import native1 from "../assets/imgs/Ads/Native/img-17.jpg";
import native2 from "../assets/imgs/Ads/Native/img-6.jpg";
import native3 from "../assets/imgs/Ads/Native/img-9.jpg";
import native4 from "../assets/imgs/Ads/Native/StakcAR_phone_can.png";
import flat1 from "../assets/imgs/Ads/Flat/img-5.jpg";
import flat2 from "../assets/imgs/Ads/Flat/img-6.jpg";
import flat3 from "../assets/imgs/Ads/Flat/img-9.jpg";
import flat4 from "../assets/imgs/Ads/Flat/img-10.jpg";
import flat5 from "../assets/imgs/Ads/Flat/img-15.jpg";
import flat6 from "../assets/imgs/Ads/Flat/img-16.jpg";
import flat7 from "../assets/imgs/Ads/Flat/img-22.jpg";
import laptopsTri from "../assets/imgs/Advir_devPlatform_all.png";

// Videos
import Index_bg from "../assets/vids/Index_bg.webm";
import installVidW from "../assets/vids/Unity_installAdmix600.webm";
import installVid from "../assets/vids/Unity_installAdmix600.mp4";
import placeVidW from "../assets/vids/platformAdmix600.webm";
import placeVid from "../assets/vids/platformAdmix600.mp4";
import configVidW from "../assets/vids/Unity_Admix600.webm";
import configVid from "../assets/vids/Unity_Admix600.mp4";

const installVids = [installVidW, installVid];
const placeVids = [placeVidW, placeVid];
const configVids = [configVidW, configVid];

// Gifs
import AdsGif from "../assets/gifs/Advertisers_bg.gif";

// Images for DescLineOFs
import part1 from "../assets/imgs/book2.jpg";

// Images for Carousels
const nativeCarouselImgs = [native1, native2, native3, native4];
const flatCarouselImgs = [flat1, flat2, flat3, flat4, flat5, flat6, flat7];

// Icons for Why Advir
const icons = [whyAdvir1, whyAdvir2, whyAdvir3];

// Vars for HorizontalImgs
const titleText = "Join a community of 150+ VR / AR developers";
const subText =
  "We cross-promote our developers to the community and to a wider audience with our network of influencers.";
const benefitText = "Learn more about the benefits";
const comImgs = [];

// Step 4 Circle
const step4cirle = () => {
  return (
    <div>
      <CircleText
        percent="75"
        strokeWidth="6"
        trailWidth="0"
        strokeColor="#fff"
        text=""
      />
      <h4 className="mb">You keep 75% of the revenues generated</h4>
    </div>
  );
};

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
            videoSrc={installVids}
            videoType={["webm", "mp4"]}
          />
          <DescLineOF
            title="2. Place"
            text="Define your inventory - areas of your content to sell to advertisers. It can be banners, videos or 3D placements. You keep the control."
            imgSrc={part1}
            videoSrc={placeVids}
            videoType={["webm", "mp4"]}
            youtubeId={`-6Pm8qFu1rE`}
          />
          <DescLineOF
            title="3. Configure"
            text="Use our web platform to manage your apps, filter the most relevant advertisers, and activate your campaign."
            videoSrc={configVids}
            videoType={["webm", "mp4"]}
          />
          <DescLineOF
            title="4. Sell"
            text="Your inventory is sold instantly to our networks of thousands of advertisers. You make money every time the user looks at it."
            Component={step4cirle}
          />
        </div>
        {/* <DailyUsers /> */}
        <DescCarousel
          carouselName="placements"
          CarouselDescription={nativePlacementsCarouselDesc}
          images={nativeCarouselImgs}
        />
        <DescCarousel
          carouselName="flatAds"
          CarouselDescription={flatAdsCarouselDesc}
          images={flatCarouselImgs}
        />
        <DescLeft descName="introOasis" Description={introOasis} />
        <WhyAdvir icons={icons} />
        <Discover image={laptopsTri} />
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
