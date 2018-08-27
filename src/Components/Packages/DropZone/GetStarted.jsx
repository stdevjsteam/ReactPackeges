import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";

const GetStartedPopup = () => {
  return (
    <div>
      <h1>react-dropzone</h1>

      <Highlight language="javascript" className="highlight">
        With npm: {`$ npm install --save react-dropzone`}
      </Highlight>
      <Highlight language="javascript" className="highlight">
        With yarn: {`$ yarn add react-dropzone`}
      </Highlight>

      <div>
        <div>
          <p className="desc-text">
            For more details please click{" "}
            <a
              href="https://react-dropzone.js.org/"
              target="blank"
              className="btn link secondary"
            >
              {" "}
              Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPopup;
