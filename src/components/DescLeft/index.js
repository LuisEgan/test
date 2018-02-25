import React from "react";
import Link from "gatsby-link";
import { Element } from "react-scroll";

const DescLeft = ({ descName, Description }) => {
  return (
    <Element
      id={descName}
      className="description-video description-pair-container row"
    >
      <div className="description-container col-sm-12 col-md-6">
        <Description />
      </div>
      <div className="video col-sm-12 col-md-6" />
    </Element>
  );
};

export default DescLeft;
