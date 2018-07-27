import React from "react";
import Highlight from "react-highlight";
// import "./getStarted.css";

const GetStartedAntDesign = () => {
  return (
    <div>
      <h1>Ant Design</h1>
      <h3>
        Ant Design React is dedicated to providing a good development experience
        for programmers. Make sure that you had installed Node.js(> v6.5)
        correctly.
      </h3>
      <h1>Installation</h1>
      <h3>
        antd-init is a demo-only scaffold tool. If you want to create real world
        projects, dva-cli and create-react-app is our recommendation.
      </h3>
      <Highlight language="javascript" className="highlight">
        $ npm install antd-init -g
      </Highlight>
      <div>
        <p>
          For more details please click
          <a href="https://ant.design/docs/react/introduce" target="_blank">
            {" "}
            Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default GetStartedAntDesign;
