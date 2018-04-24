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
const sendPulseRegister = (
   <script
      src="//static-login.sendpulse.com/apps/fc3/build/loader.js"
      sp-form-id="8fba62c6f8db19fbc1d6b1c4e73bc1e1028a90120b4b340e042f14e7ff6765ae"
   />
);
const googleAnalitycs = () => {
   const s = document.createElement("script");
   s.type = "text/javascript";
   s.async = true;
   s.innerHTML =
      'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-117496986-1");';
   document.body.appendChild(s);
};

class TemplateWrapper extends React.Component {
   static propTypes = {
      children: PropTypes.func
   };

   componentDidMount() {
      googleAnalitycs();
   }

   render() {
      const { children } = this.props;
      return (
         <div>
            <Helmet
               title="Admix"
               meta={[
                  { name: "description", content: "Advir website" },
                  { name: "keywords", content: "VR, AR, Advir, advertisement" }
               ]}
            >
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0"
               />
               <meta
                  name="google-site-verification"
                  content="JtqUDKJZn5YbnnLHgLGGPSZOx_-b2rWmJ0yJgdvIGcU"
               />
            </Helmet>

            <Header />
            <div>{children()}</div>
            <Footer />
            {jquery}
            {popper}
            {bootstrap}
            {sendPulsePopUp}
            {sendPulseRegister}
            <script
               async
               src="https://www.googletagmanager.com/gtag/js?id=UA-117496986-1"
            />
         </div>
      );
   }
}

export default TemplateWrapper;
