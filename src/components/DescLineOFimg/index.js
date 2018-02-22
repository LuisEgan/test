import React from "react";
import Link from "gatsby-link";

const DescLineOFimg = ({ title, text, imgSrc }) => {
  return (
    <div className="container description-line-overflow-img row">
      <div className="description  col-sm-12 col-md-6">
        <h3 className="st">{title}</h3>
        <br />
        <span className="mb">{text}</span>
        {title === "1. Install" && (
          <Link to="/" className="nav-link btn white-btn">
            Download Advir
          </Link>
        )}
      </div>
      <div className="image  col-sm-12 col-md-6">
        <img src={imgSrc} />
      </div>
    </div>
  );
};

export default DescLineOFimg;
