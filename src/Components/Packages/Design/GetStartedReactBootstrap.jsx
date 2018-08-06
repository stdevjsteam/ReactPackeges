import React from "react";
import Highlight from "react-highlight";
import { Layout } from "antd";
const { Content } = Layout;
// import "./getStarted.css";

const GetStartedReactBootsrtap = () => {
  return (
    <Layout>
      <Content>
        <h1>React-Bootstrap: installation</h1>

        <Highlight language="javascript" className="highlight">
          $ npm install --save react-bootstrap
        </Highlight>
        <h1>Stylesheets</h1>
        <p className="desc-text">
          Because React-Bootstrap doesn't depend on a very precise version of
          Bootstrap, we don't ship with any included css. However, some
          stylesheet is required to use these components. How and which
          bootstrap styles you include is up to you, but the simplest way is to
          include the latest styles from the CDN.
        </p>
        <p className="desc-text">
          {" "}
          React-Bootstrap currently targets Bootstrap v3. To use
          React-Bootstrap, include the CSS for Bootstrap v3 instead of Bootstrap
          v4.
        </p>

        <Highlight language="javascript" className="highlight">
          {`<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">`}
        </Highlight>
        <div>
          <p className="desc-text">For more details please click <a href="https://getbootstrap.com/docs/3.3/" target="_blank" className="btn link secondary"> Here</a>
          </p>
        </div>
      </Content>
    </Layout>
  );
};

export default GetStartedReactBootsrtap;
