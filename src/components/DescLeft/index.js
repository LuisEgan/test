import React from "react";
import Link from "gatsby-link";

const DescLeft = ({ descName, Description }) => {
  return (
    <div
      id={descName}
      className="description-video description-pair-container row"
    >
      <div className="description-container col-sm-12 col-md-6">
        <Description />
      </div>
      <div className="video col-sm-12 col-md-6" />
    </div>
  );
};

export default DescLeft;
