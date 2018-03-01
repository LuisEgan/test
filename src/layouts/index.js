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
    sp-form-id="2d38245081aeffd94791afbd87d2c7277cd250596c09b5791eac104543136e5e"
  />
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Admix"
      meta={[
        { name: "description", content: "Advir website" },
        { name: "keywords", content: "VR, AR, Advir, advertisement" }
      ]}
    >
      {jquery}
      {popper}
      {bootstrap}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
