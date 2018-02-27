import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/js/bootstrap.js";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.scss";

const jquery = (
  // <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" />
);
const popper = (
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" />
);
const bootstrap = (
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
);
const sendPulsePopUp = (
  <script
    src="//static-login.sendpulse.com/apps/fc3/build/loader.js"
    sp-form-id="c33250e3c4253a68b2c4371805574040c37e5d2156506fcbf12b1ae18b2a7d65"
  />
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Advir.co"
      meta={[
        { name: "description", content: "Advir website" },
        { name: "keywords", content: "VR, AR, Advir, advertisement" }
      ]}
    >
      {jquery}
      {popper}
      {bootstrap}
    </Helmet>
    <Header />
    <div>{children()}</div>
    <Footer />
    {sendPulsePopUp}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
