import React from "react";
import Highlight from "react-highlight";
// import "./getStarted.css";

const GetStartedReactBootsrtap = () => {
  return (
    <div>
      <h1>React-Bootstrap</h1>

      <h1>Installation</h1>
      <Highlight language="javascript" className="highlight">
        $ npm install --save react-bootstrap
      </Highlight>
      <h1>Stylesheets</h1>
      <h3>
        Because React-Bootstrap doesn't depend on a very precise version of
        Bootstrap, we don't ship with any included css. However, some stylesheet
        is required to use these components. How and which bootstrap styles you
        include is up to you, but the simplest way is to include the latest
        styles from the CDN.
      </h3>
      <h3>
        {" "}
        React-Bootstrap currently targets Bootstrap v3. To use React-Bootstrap,
        include the CSS for Bootstrap v3 instead of Bootstrap v4.
      </h3>

      <Highlight language="javascript" className="highlight">
        {`<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">`}
      </Highlight>
      <div>
        <p>
          For more details please click
          <a href="https://getbootstrap.com/docs/3.3/" target="_blank">
            {" "}
            Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default GetStartedReactBootsrtap;
