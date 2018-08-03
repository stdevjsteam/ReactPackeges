import React from "react";
import Highlight from "react-highlight";
import { Layout } from "antd";
const { Content } = Layout;
// import "./getStarted.css";

const GetStartedSemanticUIReact = () => {
  return (
    <Layout>
      <Content
        style={{
          background: "#fff",
          padding: 24,
          margin: 0,
          minHeight: "90vh"
        }}
      >
        <h1>Semantic UI React</h1>
        <div>
          <p className="desc-text">Semantic UI React is the official React integration for <a href="https://semantic-ui.com/" target="_blank" className="btn link secondary"> Semantic UI</a>.
          </p>
        </div>
        <h1>Installation</h1>
        <p className="desc-text">The Semantic UI React package can be installed via Yarn:</p>
        <Highlight language="javascript" className="highlight">
          $ yarn add semantic-ui-react
        </Highlight>
        <p className="desc-text">
          Installing Semantic UI React provides the JavaScript for your
          components. You'll also need to include a stylesheet to provide the
          styling for your components. This is the typical pattern for component
          frameworks, such as Semantic UI or Bootstrap. The method you choose to
          include the stylesheet in your project will depend on the level of
          customisation you require.
        </p>
        <p className="desc-text">
          Semantic UI CSS can be installed as a package in your project using
          Yarn. You won't be able to use custom themes with this method.
        </p>
        <Highlight language="javascript" className="highlight">
          $ yarn add semantic-ui-css
        </Highlight>
        <p className="desc-text">
          After install, you'll need to include the minified CSS file in your
          index.js file:
        </p>
        <Highlight language="javascript" className="highlight">
          {`import 'semantic-ui-css/semantic.min.css'`};
        </Highlight>
        <div>
          <p className="desc-text">
            For more details please click <a href="https://material-ui.com/" target="_blank" className="btn link secondary"> Here</a></p>
        </div>
      </Content>
    </Layout>
  );
};

export default GetStartedSemanticUIReact;
