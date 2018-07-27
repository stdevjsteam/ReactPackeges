import React from "react";
import { Layout, Button, Menu } from "antd";
import logo1 from "./javascript-js.svg";

const { Header } = Layout;

const JSHeader = props => {
  return (
    <div>
      <div className="header">
        <div className="logo" onClick={props.selected}>
          <img className="App-logo" src={logo1} alt="logo" name="createReact" />
        </div>
      </div>
    </div>
  );
};

export default JSHeader;
