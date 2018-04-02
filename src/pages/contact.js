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
      <div id="contact">
        <div className="container row">
          <h3 className="st">Get in touch</h3>
          {/* {!scriptLoaded && <h4 className="mb">Loading...</h4>} */}
          <div
            class="pipedriveWebForms"
            data-pd-webforms="https://pipedrivewebforms.com/form/96519734f454d60cf788c842689c212e2720848"
          >
            <script src="https://webforms.pipedriveassets.com/webforms.min.js" />
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
