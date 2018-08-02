import React from "react";
import Highlight from "react-highlight";
// import "./getStarted.css";
const link = `import Select from 'react-select';
import 'react-select/dist/react-select.css';`;

const GetScrollStarted = () => {
    return (
        <div>
            <h1>react-custom-scrollbars</h1>
            <p className="desc-text">
                This assumes that you’re using npm package manager with a module bundler
                like Webpack or Browserify to consume CommonJS modules. If you don’t yet
                use npm or a modern module bundler, and would rather prefer a
                single-file UMD build that makes ReactCustomScrollbars available as a
                global object, you can grab a pre-built version from unpkg. We don’t
                recommend this approach for any serious application, as most of the
                libraries complementary to react-custom-scrollbars are only available on
                npm.
            </p>
            <h1>Installation</h1>
            <Highlight language="javascript" className="highlight">
                npm install react-custom-scrollbars --save
            </Highlight>
            <div>
                <p className="desc-text">
                    For more details please click
                    <a
                        href="https://github.com/malte-wessel/react-custom-scrollbars/"
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

export default GetScrollStarted;
