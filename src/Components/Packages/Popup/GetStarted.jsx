import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";

const GetStartedPopup = () => {
  return (
    <div>
      <h1>React-Modal</h1>
      <p className="desc-text">Accessible modal dialog component for React.JS</p>
      <p className="desc-text">
        We maintain that accessibility is a key component of any modern web
        application. As such, we have created this modal in such a way that it
        fulfills the accessibility requirements of the modern web. We seek to
        keep the focus on accessibility while providing a functional, capable
        modal component for general use.
      </p>
      <Highlight language="javascript" className="highlight">
        {`$ npm install react-modal 
$ yarn add react-modal`}
      </Highlight>

      <div>
        <p className="desc-text">
          For more details please click
          <a href="http://reactcommunity.org/react-modal/" target="_blank">
            {" "}
            Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default GetStartedPopup;
