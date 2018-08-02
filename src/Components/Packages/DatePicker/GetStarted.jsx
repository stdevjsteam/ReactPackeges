import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";
const link = `(
  export PKG=react-dates;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)`;
const GetStartedDatePicker = () => {
  return (
    <div>
      <h1>React Dates</h1>
      <p className="desc-text">
        Ensure packages are installed with correct version numbers by running:
      </p>
      <Highlight language="javascript" className="highlight">
        {link}
      </Highlight>
      <p className="desc-text">Which produces and runs a command like:</p>
      <Highlight language="javascript" className="highlight">
        {`npm install --save react-dates moment@>=#.## react@>=#.##
        react-dom@>=#.##`}
      </Highlight>
      <div>
        <p className="desc-text">
          For more details please click
          <a href="https://github.com/airbnb/react-dates" target="_blank">
            {" "}
            Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default GetStartedDatePicker;
