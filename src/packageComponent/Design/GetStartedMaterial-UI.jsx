import React from "react";
import Highlight from "react-highlight";
// import "./getStarted.css";

const GetStartedMaterialUI = () => {
  return (
    <div>
      <h1>MATERIAL-UI</h1>
      <h3>
        Install Material-UI's source files via npm. We take care of injecting
        the CSS needed.
      </h3>
      <h1>Installation</h1>

      <Highlight language="javascript" className="highlight">
        $ npm install @material-ui/core
      </Highlight>
      <h3>or use a CDN.</h3>
      <Highlight language="javascript" className="highlight">
        {`<script src="https://unpkg.com/@material-ui/core/umd/material-ui.production.min.js" crossorigin="anonymous"></script>`}
      </Highlight>
      <div>
        <p>
          For more details please click
          <a href="https://material-ui.com/" target="_blank">
            {" "}
            Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default GetStartedMaterialUI;
