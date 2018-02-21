import React from "react";
import Link from "gatsby-link";

const DescLineOFimg = ({ title, text, imgSrc }) => {
  return (
    <div className="description-line-overflow-img">
      <div className="description">
        <h3 className="st">{title}</h3>
        <br />
        <span className="mb">{text}</span>
      </div>
      <div className="image">
        <img src={imgSrc} />
      </div>
    </div>
  );
};

export default DescLineOFimg;
