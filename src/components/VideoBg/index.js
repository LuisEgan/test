import React from "react";
import Link from "gatsby-link";

const VideoBg = ({ videoSrc, videoType }) => {
  console.log("videoSrc: ", videoSrc);
  return (
    <div className="videoBg-container">
      <video loop muted autoPlay className="videoBg">
        {/* <source src={videoSrc} type={`video/${videoType}`} /> */}
        {videoSrc.map((src, i) => {
          return <source src={src} type={`video/${videoType[i]}`} key={src} />;
        })}
      </video>
    </div>
  );
};

export default VideoBg;
