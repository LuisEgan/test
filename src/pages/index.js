import React from "react";
import Link from "gatsby-link";
import { Circle } from "rc-progress";
import { Player } from "video-react";

// HOME COMPONENTS
import {
   HowWorks,
   firstAdVidDesc,
   DailyUsers,
   nativePlacementsCarouselDesc,
   flatAdsCarouselDesc,
   introOasis,
   WhyAdvir,
   Discover,
   Step4
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
import laptopsTri from "../assets/imgs/Advir_devPlatform_all.png";
import black from "../assets/imgs/advir_black.png";
import vrHeadset from "../assets/imgs/vr_headset.png";

// Videos
import Index_bgW from "../assets/vids/Index_bg.webm";
import Index_bg from "../assets/vids/Index_bg.mp4";
import installVidW from "../assets/vids/Unity_installAdmix600.webm";
import installVid from "../assets/vids/Unity_installAdmix600.mp4";
import configVidW from "../assets/vids/platformAdmix600.webm";
import configVid from "../assets/vids/platformAdmix600.mp4";
import placeVidW from "../assets/vids/Unity_Admix600.webm";
import placeVid from "../assets/vids/Unity_Admix600.mp4";

const installVids = [installVidW, installVid];
const placeVids = [placeVidW, placeVid];
const configVids = [configVidW, configVid];
const vidsTypes = ["webm", "mp4"];

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
// const step4cirle = () => {
//   return (
//     <div>
//       <CircleText
//         percent="75"
//         strokeWidth="6"
//         trailWidth="0"
//         strokeColor="#fff"
//         text=""
//       />
//       <h4 className="mb">You keep 75% of the revenues generated</h4>
//     </div>
//   );
// };

class IndexPage extends React.Component {
   render() {
      return (
         <div id="home">
            <HowWorks videoSrc={[Index_bgW, Index_bg]} videoType={vidsTypes} />
            <DescVid
               videoName="firstAd"
               VideoDescription={firstAdVidDesc}
               youtubeId={`HircxjiPk80`}
            />
            <div id="steps">
               <DescLineOF
                  title="1. Install"
                  text="Download and install Admix for your favorite game engine and join a community of 150+ VR/AR developers."
                  videoSrc={installVids}
                  videoType={vidsTypes}
               />
               <DescLineOF
                  title="2. Place"
                  text="Define your inventory - areas of your content to sell to advertisers. It can be banners, videos or 3D placements. You keep the control."
                  imgSrc={part1}
                  videoSrc={placeVids}
                  videoType={vidsTypes}
                  youtubeId={`-6Pm8qFu1rE`}
               />
               <DescLineOF
                  title="3. Configure"
                  text="Use our web platform to manage your apps, filter the most relevant advertisers, and activate your campaign."
                  videoSrc={configVids}
                  videoType={vidsTypes}
               />
               <DescLineOF
                  title="4. Sell"
                  text="Your inventory is sold instantly to our network of advertisers. You take home 75% of the revenue paid by the advertiser every time a user looks at your ads."
                  Component={Step4}
               />
            </div>
            <DailyUsers />
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
