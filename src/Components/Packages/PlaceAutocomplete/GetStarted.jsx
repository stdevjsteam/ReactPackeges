import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";

const GetStartedPopup = () => {
  return (
    <div>
      <h1>React Places Autocomplete</h1>

      <Highlight language="javascript" className="highlight">
        {`$ npm install --save react-places-autocomplete`}
      </Highlight>
      <p className="desc-text">
        To use this component, you are going to need to load
        <a
          href="https://developers.google.com/maps/documentation/javascript/tutorial"
          target="_blank"
          className="btn link secondary"
        >
          {" "}
          Google Maps JavaScript API
        </a>{" "}
        Load the library in your project
      </p>
      <Highlight language="javascript" className="highlight">
        {` <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>`}
      </Highlight>
      <div>
        <div>
          <p className="desc-text">
            For more details please click{" "}
            <a
              href="https://github.com/pradel/react-responsive-modal"
              target="_blank"
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
