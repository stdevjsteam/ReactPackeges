import React from "react";
import Highlight from "react-highlight";
// import "./getStarted.css";

const GetStartedSemanticUIReact = () => {
  return (
    <div>
      <h1>Semantic UI React</h1>
      <h3>
        Semantic UI React is the official React integration for{" "}
        <a href="https://semantic-ui.com/" target="_blank">
          {" "}
          Semantic UI .
        </a>
      </h3>
      <h1>Installation</h1>
      <h3>The Semantic UI React package can be installed via Yarn:</h3>
      <Highlight language="javascript" className="highlight">
        $ yarn add semantic-ui-react
      </Highlight>
      <h3>
        Installing Semantic UI React provides the JavaScript for your
        components. You'll also need to include a stylesheet to provide the
        styling for your components. This is the typical pattern for component
        frameworks, such as Semantic UI or Bootstrap. The method you choose to
        include the stylesheet in your project will depend on the level of
        customisation you require.
      </h3>
      <h3>
        Semantic UI CSS can be installed as a package in your project using
        Yarn. You won't be able to use custom themes with this method.
      </h3>
      <Highlight language="javascript" className="highlight">
        $ yarn add semantic-ui-css
      </Highlight>
      <h3>
        After install, you'll need to include the minified CSS file in your
        index.js file:
      </h3>
      <Highlight language="javascript" className="highlight">
        {`import 'semantic-ui-css/semantic.min.css'`};
      </Highlight>
      <div>
        <p>
          For more details please click
          <a href="https://material-ui.com/" target="_blank">
            {" "}
            Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default GetStartedSemanticUIReact;
