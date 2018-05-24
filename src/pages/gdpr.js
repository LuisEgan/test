import React from "react";
import Link from "gatsby-link";

class Contact extends React.Component {
   constructor(props) {
      super(props);

      this.pipeDriveScript =
         "https://webforms.pipedriveassets.com/webforms.min.js";

      this.state = {
         scriptLoaded: false
      };

      this.loadScript = this.loadScript.bind(this);
   }

   componentDidMount() {
      // this.loadScript();
   }

   loadScript() {
      const loadedDiv = document.getElementById("pipedriveWebForm");

      if (!loadedDiv) {
         const { pipeDriveScript } = this;
         const head = document.getElementsByTagName("head")[0];
         // const container = document.getElementById("pipedriveWebForm-container");
         const script = document.createElement("script");
         script.type = "text/javascript";
         script.src = `${pipeDriveScript}?cachebuster=${new Date().getTime()}`;
         head.appendChild(script);

         setTimeout(() => {
            this.loadScript();
         }, 1000);
      } else {
         this.setState({ scriptLoaded: true });
      }
   }

   render() {
      const { scriptLoaded } = this.state;
      return (
         <div id="contact" className="gdpr">
            <div className="container row">
               <h3 className="st">Are you based in Europe?</h3>
               <script
                  src="//static-login.sendpulse.com/apps/fc3/build/loader.js"
                  sp-form-id="ef2c6063ead0ce3e10fff227c7aaee6d8dd9cbdf3f076024dfe5daf83d75fca3"
               />
            </div>
         </div>
      );
   }
}
export default Contact;
