import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";

const GetStartedGalery = () => {
  return (
    <div>
      <h1>React Grid Gallery</h1>
      <h3>
        Justified image gallery component for React inspired by Google Photos
        and based upon React Images.
      </h3>
      <h1>Installation</h1>
      <Highlight language="javascript" className="highlight">
        npm install --save react-grid-gallery
      </Highlight>
      <div>
        <p>
          For more details please click
          <a
            href="https://benhowell.github.io/react-grid-gallery/"
            target="_blank"
          >
            {" "}
            Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default GetStartedGalery;
