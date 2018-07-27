import React from "react";
import Highlight from "react-highlight";
import "./getStarted.css";
const link = `<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />`;
const impotrtCSS = `import "~slick-carousel/slick/slick.css"; import
"~slick-carousel/slick/slick-theme.css";`;
const GetStarted = () => {
  return (
    <div>
      <h1>Quick start</h1>
      <h3>Create an index.html file and include react-slick with:</h3>
      <Highlight language="javascript" className="highlight">
        {link}
      </Highlight>
      <h1>Installation</h1>
      <Highlight language="javascript" className="highlight">
        npm install react-slick --save
      </Highlight>
      <Highlight language="javascript" className="highlight">
        yarn add react-slick
      </Highlight>
      <h3>
        After you are done installing through yarn or npm, now you will have to
        include CSS in your project
      </h3>
      <h1>Include CSS</h1>
      <Highlight language="javascript" className="highlight">
        npm install slick-carousel --save
      </Highlight>
      <Highlight language="javascript" className="highlight">
        {impotrtCSS}
      </Highlight>
      <div>
        <p>
          <a
            href="https://react-slick.neostack.com/docs/get-started"
            target="_blank"
          >
            More Details
          </a>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
