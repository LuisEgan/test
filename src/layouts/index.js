import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Header from "../components/Header";
import "./index.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Advir.co"
      meta={[
        { name: "description", content: "Advir website" },
        { name: "keywords", content: "VR, AR, Advir, advertisement" }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
