import React from "react";
import Highlight from "react-highlight";
import { Layout } from "antd";
const { Content } = Layout;
// import "./getStarted.css";

const GetStartedMaterialUI = () => {
  return (
    <Layout>
      <Content>
        <h1>MATERIAL-UI</h1>
        <p className="desc-text">
          Install Material-UI's source files via npm. We take care of injecting
          the CSS needed.
        </p>
        <h1>Installation</h1>

        <Highlight language="javascript" className="highlight">
          $ npm install @material-ui/core
        </Highlight>
        <p className="desc-text">or use a CDN.</p>
        <Highlight language="javascript" className="highlight">
          {`<script src="https://unpkg.com/@material-ui/core/umd/material-ui.production.min.js" crossorigin="anonymous"></script>`}
        </Highlight>
        <div>
          <p className="desc-text">
            For more details please click <a href="https://material-ui.com/" target="_blank" className="btn link secondary"> Here
            </a>
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default GetStartedMaterialUI;
