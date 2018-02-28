import React from "react";
import Link from "gatsby-link";
import { Player } from "video-react";

import laptopBase from "../../assets/imgs/laptopBase.png";

const DescLineOF = ({
  title,
  text,
  imgSrc,
  videoSrc,
  videoType,
  youtubeId,
  Component
}) => {
  return (
    <div className="container description-line-overflow-img row">
      <div className="description  col-sm-12 col-md-6">
        <h3 className="st">{title}</h3>
        <br />
        <span className="mb">{text}</span>
        {title === "1. Install" && (
          <Link to="/download" className="nav-link btn white-btn">
            Download Advir
          </Link>
        )}
      </div>
      <div className="image col-sm-12 col-md-6 laptop-screen">
        {/* Priority: 1. local video, 2. youtube video and 3. Image */}
        {/* If all are provided, the local video is going to be displayed, and so on. */}
        <div>
          {!!videoSrc && (
            // <Player autoPlay={true} loop={true} playsInline src={videoSrc} />
            <video loop muted autoPlay className="videoBg">
              <source src={videoSrc} type={`video/${videoType}`} />
            </video>
          )}
          {!!youtubeId &&
            !videoSrc && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0&amp;showinfo=0`}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
            )}
          {!!imgSrc && !videoSrc && !youtubeId && <img src={imgSrc} />}
          {!!Component && !videoSrc && !youtubeId && !imgSrc && <Component />}

          {!Component && <img src={laptopBase} className="laptop-base" />}
        </div>
      </div>
    </div>
  );
};

export default DescLineOF;
