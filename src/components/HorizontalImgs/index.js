import React from "react";
import Link from "gatsby-link";

const HorizontalImgs = ({ titleText, subText, benefitText, images }) => {
  const horImgs = images.map(img => {
    return <img src={img} key={`${img}${Math.random()}`} />;
  });

  return (
    <div className="horizontal-images">
      <h3 className="st">{titleText}</h3>
      <h4 className="mb">{subText}</h4>
      <div className="hor-imgs-container cc">{horImgs}</div>
      {benefitText !== "" && (
        <Link to="/community" className="btn white-btn">
          {benefitText}
        </Link>
      )}
      <div className="container row">
        <div className="col-sm-12 col-md-6 hor-img-dl">
          <h4 className="st">Get started</h4>
          <Link to="/download" className="btn white-btn">
            Download Advir
          </Link>
        </div>
        <div className="col-sm-12 col-md-6">
          <h4 className="st">Stay in touch</h4>
          <div className="cc">
            <input
              type="text"
              className="form-control"
              placeholder="Your email here"
            />
            <Link className="ok btn white-btn" to="/">
              ok
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalImgs;
