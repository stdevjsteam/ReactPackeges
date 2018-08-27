import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";
const link = `import Select from 'react-select';
import 'react-select/dist/react-select.css';`;

const GetSelectStarted = () => {
  return (
    <div>
      <h1>React Select</h1>
      <p className="desc-text">
        The easiest way to use react-select is to install it from npm and build
        it into your app with Webpack.
      </p>
      <Highlight language="javascript" className="highlight">
        yarn add react-select
      </Highlight>
      <p className="desc-text">
        You can then import react-select and its styles in your application as
        follows:
      </p>
      <Highlight language="javascript" className="highlight">
        {link}
      </Highlight>
      <div>
        <div className="align-left">
          <a href="http://jedwatson.github.io/react-select/" target="_blank" className="btn link secondary">
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetSelectStarted;
