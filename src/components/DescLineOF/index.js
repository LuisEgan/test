import React from "react";
import Link from "gatsby-link";
import { Player } from "video-react";

const DescLineOF = ({
  title,
  text,
  imgSrc,
  videoSrc,
  youtubeId,
  Component
}) => {
  console.log("imgSrc: ", imgSrc);
  console.log("videoSrc: ", videoSrc);
  console.log("youtubeId: ", youtubeId);
  console.log("Component: ", Component);
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
      <div className="image col-sm-12 col-md-6">
        {/* Priority: 1. local video, 2. youtube video and 3. Image */}
        {/* If all are provided, the local video is going to be displayed, and so on. */}
        {!!videoSrc && (
          <Player autoPlay={true} loop={true} playsInline src={videoSrc} />
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
      </div>
    </div>
  );
};

export default DescLineOF;
