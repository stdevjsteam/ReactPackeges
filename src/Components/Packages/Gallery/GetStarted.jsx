import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";

const GetStartedGalery = () => {
  return (
    <div>
      <h1>React Grid Gallery</h1>
      <p className="desc-text">
        Justified image gallery component for React inspired by Google Photos
        and based upon React Images.
      </p>
      <h1>Installation</h1>
      <Highlight language="javascript" className="highlight">
        npm install --save react-grid-gallery
      </Highlight>
      <div className="pt-25">
        <p className="desc-text">For more details please click <a href="https://benhowell.github.io/react-grid-gallery/" target="_blank" className="btn link secondary"> Here </a></p>
      </div>
    </div>
  );
};

export default GetStartedGalery;
