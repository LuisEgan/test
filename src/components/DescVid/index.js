import React from "react";
import Link from "gatsby-link";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Player } from "video-react";
// import { VideoPlayer } from "react-video-players";

import "../../../node_modules/video-react/dist/video-react.css";

const IndexPage = ({ videoDescription, vidPoster, videoSrc }) => {
  console.log("videoSrc: ", videoSrc);

  return (
    <div className="description-video">
      <div className="videoDescrition">
        <videoDescription />
      </div>
      <div className="video">
        <Player playsInline src={videoSrc} />
      </div>
    </div>
  );
};

export default IndexPage;
