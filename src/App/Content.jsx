import React from "react";
import { Switch, Layout, Menu, Breadcrumb, Icon, Button, Row, Col } from "antd";
import { Route, withRouter } from "react-router-dom";
import Highlight from "react-highlight";

import JSHeader from "./Header";
import JSSideBar from "./SideBar";
import CreateReact from "./../Components/Home/createReact";
import Carusel from "./../Components/Packages/Carusel";
import Gallery from "./../Components/Packages/Gallery";
import Masonry from "./../Components/Packages/Masonry";
import Popup from "./../Components/Packages/Popup";
import ScrollBar from "./../Components/Packages/ScrollBar";
import Select from "./../Components/Packages/ReactSelect";
import DatePicker from "./../Components/Packages/DatePicker";
import AntDesign from "./../Components/Packages/Design/GetStartedAnt-Design";
import MaterialUI from "./../Components/Packages/Design/GetStartedMaterial-UI";
import SemanticUi from "./../Components/Packages/Design/GetStartedSemanticUIReact";
import ReactBootstrap from "./../Components/Packages/Design/GetStartedReactBootstrap";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class SiderMenu extends React.Component {
  state = {
    theme: "light",
    current: "null",
    showSource: "none",
    showSource1: "none",
    showDemo: "none",
    select: "createReact"
  };
  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  showSource = source => {
    this.setState({
      [source]: this.state[source] === "none" ? "block" : "none"
    });
  };
  showDemo = () => {
    this.setState({
      showDemo: this.state.showDemo === "none" ? "block" : "none"
    });
  };
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  onSelect = e => {
    if (e.target && e.target.name) {
      this.setState({ select: e.target.name, current: "" });
    } else {
      this.setState({ select: e.item.props.name, current: e.key });
    }
  };
  render() {
    const defalutSelect = window.location.pathname.substr(1).toString();
    let selectDesign = false;
    if (
      defalutSelect === "antd" ||
      defalutSelect === "materialui" ||
      defalutSelect === "semanticui" ||
      defalutSelect === "reactbootstrap"
    ) {
      selectDesign = true;
    }
    return (
      <Layout>
        <JSHeader selected={this.onSelect} />
        <div className="Layout">
          <Layout>
            <JSSideBar
              selected={this.onSelect}
              current={this.state.current}
              selectDesign={selectDesign}
            />
            <Layout style={{ padding: "0 24px 24px" }}>
              <div>
                <Route exact path="/" component={CreateReact} />
                <Route exact path="/carusel" component={Carusel} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/masonry" component={Masonry} />
                <Route exact path="/popup" component={Popup} />
                <Route exact path="/scrollbar" component={ScrollBar} />
                <Route exact path="/datepicker" component={DatePicker} />
                <Route exact path="/select" component={Select} />
                <Route exact path="/antd" component={AntDesign} />
                <Route exact path="/materialui" component={MaterialUI} />
                <Route exact path="/semanticui" component={SemanticUi} />
                <Route
                  exact
                  path="/reactbootstrap"
                  component={ReactBootstrap}
                />
              </div>
            </Layout>
          </Layout>
        </div>
      </Layout>
    );
  }
}

export default withRouter(SiderMenu);
