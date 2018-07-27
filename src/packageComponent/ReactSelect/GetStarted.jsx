import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";
const link = `import Select from 'react-select';
import 'react-select/dist/react-select.css';`;

const GetSelectStarted = () => {
  return (
    <div>
      <h1>Installation</h1>
      <h3>
        The easiest way to use react-select is to install it from npm and build
        it into your app with Webpack.
      </h3>
      <Highlight language="javascript" className="highlight">
        yarn add react-select
      </Highlight>
      <h3>
        You can then import react-select and its styles in your application as
        follows:
      </h3>
      <Highlight language="javascript" className="highlight">
        {link}
      </Highlight>
      <div>
        <p>
          <a href="http://jedwatson.github.io/react-select/" target="_blank">
            More Details
          </a>
        </p>
      </div>
    </div>
  );
};

export default GetSelectStarted;
