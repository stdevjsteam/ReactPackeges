import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";

const GetStartedMasonry = () => {
  return (
    <div>
      <h1>React Masonry Component</h1>
      <h3>
        The component is bundled with Masonry, so no additional dependencies
        needed! You can optionally include Masonry as a script tag if there
        should be any reason for doing so
      </h3>
      <Highlight language="javascript" className="highlight">
        {`<script src="//cdnjs.cloudflare.com/ajax/libs/masonry/3.1.5/masonry.pkgd.min.js" />`}
      </Highlight>
      <h3>To use the component just require the module. </h3>
      <h1>Installation</h1>
      <Highlight language="javascript" className="highlight">
        npm install --save react-masonry-component
      </Highlight>
      <div>
        <p>
          For more details please click
          <a
            href="https://github.com/eiriklv/react-masonry-component"
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

export default GetStartedMasonry;
