import React from "react";
import { Layout, Button, Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import logo1 from "./assets/images/javascript-js.svg";

const { Header } = Layout;

const JSHeader = props => {
  return (
    <div>
      <div className="header">
        <div className="logo" onClick={props.selected}>
          <Link to={`/`} className="nav-text">
            <img
              className="App-logo"
              src={logo1}
              alt="logo"
              name="createReact"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JSHeader;
