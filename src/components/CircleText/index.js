import React from "react";
import Link from "gatsby-link";
import { Circle } from "rc-progress";

const CircleText = ({
  percent,
  strokeWidth,
  trailWidth,
  strokeColor,
  text
}) => (
  <div className="circleText-container">
    <Circle
      percent={percent}
      strokeWidth={strokeWidth}
      trailWidth={trailWidth}
      strokeColor={strokeColor}
    />
    <div className="mb circleText">
      <div>{percent}%</div>
      <span>{text}</span>
    </div>
  </div>
);

export default CircleText;
