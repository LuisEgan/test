import React from "react";
import Link from "gatsby-link";

const VideoBg = ({ videoSrc, videoType }) => (
  <div className="videoBg-container">
    <video loop muted autoPlay className="videoBg">
      <source src={videoSrc} type={`video/${videoType}`} />
    </video>
  </div>
);

export default VideoBg;
