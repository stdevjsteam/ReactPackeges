import React, { Component } from "react";
import { Switch, Layout, Menu, Breadcrumb, Icon, Button } from "antd";

import Highlight from "react-highlight";
import JSHeader from "./JSHeader";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class JSSider extends Component {
  state = {
    theme: "light"
  };

  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div>
        <Sider width={200} style={{ background: "#fff" }}>
          <Switch
            className="Switch"
            checked={this.state.theme === "dark"}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <Menu
            mode="inline"
            theme={this.state.theme}
            onClick={this.props.selected}
            selectedKeys={[this.props.current]}
            defaultSelectedKeys={["0"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item
              className="Menu-Item"
              key="1"
              name="reactSlick"
              onClick={this.props.selected}
            >
              Owl Carousel 2
            </Menu.Item>
            <Menu.Item
              className="Menu-Item"
              key="2"
              name="reactSelect"
              onClick={this.props.selected}
            >
              Select2
            </Menu.Item>
            <Menu.Item
              className="Menu-Item"
              key="3"
              name="popup"
              onClick={this.props.selected}
            >
              Popup
            </Menu.Item>
            <Menu.Item
              className="Menu-Item"
              name="scrollBar"
              onClick={this.props.selected}
              key="4"
            >
              ScrollBar
            </Menu.Item>
            <Menu.Item
              className="Menu-Item"
              key="5"
              name="gallery"
              onClick={this.props.selected}
            >
              Gallery
            </Menu.Item>
            <Menu.Item
              className="Menu-Item"
              key="6"
              name="masonry"
              onClick={this.props.selected}
            >
              Masonry
            </Menu.Item>
            <Menu.SubMenu key="sub1" title={<span>Design</span>}>
              <Menu.Item key="7" name="antDesign">
                ANT DESIGN
              </Menu.Item>
              <Menu.Item key="8" name="materialUI">
                MATERIAL-UI
              </Menu.Item>
              <Menu.Item key="9" name="semanticUI">
                SEMANTIC UI REACT
              </Menu.Item>
              <Menu.Item key="10" name="reactBootstrap">
                REACT-BOOTSTRAP
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
      </div>
    );
  }
}
