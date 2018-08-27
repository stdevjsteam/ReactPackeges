import React from "react";
import { Layout, Button, Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import logo1 from "./assets/images/logo.png";

const { Header } = Layout;

const JSHeader = props => {
    return (
        <header>
            <div className="container-lg">
              <div className="logo" onClick={props.selected}>
                <Link to={`/`}>
                  <img
                      className="App-logo"
                      src={logo1}
                      alt="logo"
                      name="createReact"
                  />
                </Link>
              </div>
            </div>
        </header>
    );
};

export default JSHeader;
