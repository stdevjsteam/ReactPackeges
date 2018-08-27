import React from "react";
import Highlight from "react-highlight";
import { Layout } from "antd";
const { Content } = Layout;
// import "./getStarted.css";

const GetStartedAntDesign = () => {
  return (
    <Layout>
      <Content>
        <h1>Ant Design</h1>
        <p className="desc-text">
          Ant Design React is dedicated to providing a good development
          experience for programmers. Make sure that you had installed Node.js(>
          v6.5) correctly.
        </p>
        <h1>Installation</h1>
        <p className="desc-text">
          antd-init is a demo-only scaffold tool. If you want to create real
          world projects, dva-cli and create-react-app is our recommendation.
        </p>
        <Highlight language="javascript" className="highlight">
          $ npm install antd-init -g
        </Highlight>
        <div className="pt-25">
          <p className="desc-text">For more details please click <a href="https://ant.design/docs/react/introduce" target="_blank" className="btn link secondary"> Here</a>
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default GetStartedAntDesign;
