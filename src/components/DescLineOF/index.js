import React from "react";
import Link from "gatsby-link";
import { Player } from "video-react";

import laptopBase from "../../assets/imgs/laptopBase.png";
import logo from "../../assets/imgs/logo-white.png";

class DescLineOF extends React.Component {
  componentDidMount() {
    !!this.refs.player && this.refs.player.play();

    let checkStart = () => {
      if (this.refs.player) {
        const { player } = this.refs.player.getState();
        !player.hasStarted && this.refs.player.play();
      }
    };
    checkStart = checkStart.bind(this);

    setTimeout(checkStart, 0);
  }
  render() {
    const {
      title,
      text,
      imgSrc,
      videoSrc,
      videoType,
      youtubeId,
      Component
    } = this.props;

    const vrID = title === "4. Sell" ? "vrHeadsetStep" : "";

    return (
      <div className="container description-line-overflow-img row">
        <div id={vrID} className="description  col-sm-12 col-md-3">
          <h3 className="st">{title}</h3>
          <br />
          <span className="mb">{text}</span>
          {title === "1. Install" && (
            // <Link to="/download" className="nav-link btn white-btn">
            //   Download Admix
            // </Link>
            <a className="nav-link btn white-btn" sp-show-form="94097">
              Download Admix
            </a>
          )}
        </div>
        <div className="image col-sm-12 col-md-9 laptop-screen">
          {/* Priority: 1. local video, 2. youtube video and 3. Image */}
          {/* If all are provided, the local video is going to be displayed, and so on. */}
          <div className="laptop-screen-wrapper">
            {!!videoSrc && (
              <Player
                playsInline
                muted={true}
                autoPlay={true}
                loop={true}
                preload="auto"
                ref="player"
              >
                {videoSrc.map((src, i) => {
                  return (
                    <source
                      src={src}
                      type={`video/${videoType[i]}`}
                      key={src}
                    />
                  );
                })}
              </Player>
              // <video loop autoPlay muted playsInline poster={logo}>
              //   {videoSrc.map((src, i) => {
              //     return <source src={src} type={`video/${videoType[i]}`} />;
              //   })}
              // </video>
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
  }
}

export default DescLineOF;
