import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";

const GetStartedPopup = () => {
  return (
    <div>
      <h1>React-responsive-modal</h1>

      <Highlight language="javascript" className="highlight">
        With npm: {`$ npm install react-responsive-modal --save`}
      </Highlight>
      <Highlight language="javascript" className="highlight">
        With yarn: {`$ yarn add react-responsive-modal`}
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
