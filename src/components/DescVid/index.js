import React from "react";
import Link from "gatsby-link";
import { Player } from "video-react";
import { Element } from "react-scroll";

import "../../../node_modules/video-react/dist/video-react.css";

const DescVid = ({
  videoName,
  VideoDescription,
  vidPoster,
  videoSrc,
  videoTitle,
  youtubeId
}) => {
  return (
    <Element
      id={videoName}
      className="description-video description-pair-container row"
      name={videoName}
    >
      <div className="videoDescription description-container col-sm-12 col-md-6">
        <VideoDescription />
      </div>
      <div className="video col-sm-12 col-md-6">
        <div>
          {videoTitle}
          {!!videoSrc && <Player playsInline src={videoSrc} />}
          {/* Gives priority to a local video source, if both are provided, the local one will be displayed */}
          {!!youtubeId &&
            !videoSrc && (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0&amp;showinfo=0`}
                frameBorder="0"
                allowFullScreen
              />
            )}
        </div>
      </div>
    </Element>
  );
};

export default DescVid;
