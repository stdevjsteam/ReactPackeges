import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Layout, Menu, Breadcrumb, Icon, Button } from "antd";
import { Link, withRouter } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Highlight from "react-highlight";
import JSHeader from "./Header";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class JSSider extends Component {
  state = {
    theme: "light"
  };

  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  handleClick = e => {
    console.log(e);
    this.setState({
      current: e.key
    });
  };
  click = item => {
    console.log(item);
    this.props.history.push(item.key);
  };
  componentDidMount = () => {
    console.log("aaaaaaaaaaaa", this.props.selectDesign);
  };
  render() {
    const defalutSelect = window.location.pathname.substr(1).toString();

    console.log("design", defalutSelect);
    const { location } = this.props;
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
            defaultOpenKeys={this.props.selectDesign === true ? ["sub1"] : []}
            mode="inline"
            theme={this.state.theme}
            onClick={this.click}
            selectedKeys={[this.props.current]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item
              className={`Menu-Item ${
                defalutSelect === "carusel" ? "ant-menu-item-selected" : ""
              }`}
              key="carusel"
              onClick={this.props.selected}
            >
              <Link to={`/carusel`} className="nav-text">
                Owl Carousel 2
              </Link>
            </Menu.Item>

            <Menu.Item
              className={`Menu-Item ${
                defalutSelect === "select" ? "ant-menu-item-selected" : ""
              }`}
              key="select"
              name="reactSelect"
              onClick={this.props.selected}
            >
              <Link to={`/select`} className="nav-text">
                Select2
              </Link>
            </Menu.Item>

            <Menu.Item
              className={`Menu-Item ${
                defalutSelect === "popup" ? "ant-menu-item-selected" : ""
              }`}
              key="popup"
              name="popup"
              onClick={this.props.selected}
            >
              <Link to={`/popup`} className="nav-text">
                Popup
              </Link>
            </Menu.Item>
            <Menu.Item
              className={`Menu-Item ${
                defalutSelect === "scrollBar" ? "ant-menu-item-selected" : ""
              }`}
              name="scrollBar"
              onClick={this.props.selected}
              key="scrollbar"
            >
              <Link to={`/scrollbar`} className="nav-text">
                ScrollBar
              </Link>
            </Menu.Item>
            <Menu.Item
              className={`Menu-Item ${
                defalutSelect === "datepicker" ? "ant-menu-item-selected" : ""
              }`}
              name=""
              onClick={this.props.selected}
              key="datepicker"
            >
              <Link to={`/datepicker`} className="nav-text">
                DatePicker
              </Link>
            </Menu.Item>
            <Menu.Item
              className={`Menu-Item ${
                defalutSelect === "gallery" ? "ant-menu-item-selected" : ""
              }`}
              key="gallery"
              name="gallery"
              onClick={this.props.selected}
            >
              <Link to={`/gallery`} className="nav-text">
                Gallery
              </Link>
            </Menu.Item>
            <Menu.Item
              className={`Menu-Item ${
                defalutSelect === "masonry" ? "ant-menu-item-selected" : ""
              }`}
              key="masonry"
              name="masonry"
              onClick={this.props.selected}
            >
              <Link to={`/masonry`} className="nav-text">
                Masonry
              </Link>
            </Menu.Item>
            <Menu.SubMenu key="sub1" title={<span>Design</span>}>
              <Menu.Item
                key="antd"
                name="antDesign"
                className={`Menu-Item ${
                  defalutSelect === "antd" ? "ant-menu-item-selected" : ""
                }`}
              >
                <Link to={`/antd`} className="nav-text">
                  ANT DESIGN
                </Link>
              </Menu.Item>
              <Menu.Item
                key="materialui"
                name="materialUI"
                className={`Menu-Item ${
                  defalutSelect === "materialui" ? "ant-menu-item-selected" : ""
                }`}
              >
                <Link to={`/materialui`} className="nav-text">
                  MATERIAL-UI
                </Link>
              </Menu.Item>
              <Menu.Item
                key="semanticui"
                name="semanticUI"
                className={`Menu-Item ${
                  defalutSelect === "semanticui" ? "ant-menu-item-selected" : ""
                }`}
              >
                <Link to={`/semanticui`} className="nav-text">
                  SEMANTIC UI REACT
                </Link>
              </Menu.Item>
              <Menu.Item
                key="reactbootstrap"
                name="reactbootstrap"
                className={`Menu-Item ${
                  defalutSelect === "reactbootstrap"
                    ? "ant-menu-item-selected"
                    : ""
                }`}
              >
                <Link to={`/reactbootstrap`} className="nav-text">
                  REACT-BOOTSTRAP
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
      </div>
    );
  }
}

export default withRouter(JSSider);
