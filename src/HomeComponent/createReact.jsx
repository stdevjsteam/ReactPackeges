import React from "react";
import Highlight from "react-highlight";
import "./createReacte.css";
const install = `npx create-react-app my-app
cd my-app
npm start`;
const impotrtCSS = `import "~slick-carousel/slick/slick.css"; import
"~slick-carousel/slick/slick-theme.css";`;
const CreateReact = () => {
  return (
    <div>
      <h1>Quick Overview</h1>
      {/* <h3>Create an index.html file and include react-slick with:</h3> */}
      <Highlight language="javascript" className="highlight">
        {install}
      </Highlight>
      <div>
        <p>
          For more information from NPX please click
          <a href="https://www.npmjs.com/package/npx" target="_blank">
            {" "}
            Here
          </a>
        </p>
      </div>
      <img
        className="createIMG"
        src="https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667"
        width="1200"
        alt="npm start"
        data-canonical-src="https://cdn.rawgit.com/facebook/create-react-app/27b42ac/screencast.svg"
        style={{ Width: "200px" }}
      />
      {/* <h1>Installation</h1>
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
          <a href="https://react-slick.neostack.com/docs/get-started">
            More Details
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default CreateReact;
