import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";

import Header from "../components/Header";
import "./index.scss";

const jquery = (
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
);
const popper = (
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
);
const bootstrap = (
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
);

const TemplateWrapper = ({ children }) => (
  <div>
    {jquery}
    {popper}
    {bootstrap}
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
