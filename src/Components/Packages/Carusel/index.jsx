import React from "react";
import { Switch, Layout, Menu, Breadcrumb, Icon, Button, Row, Col } from "antd";
import Highlight from "react-highlight";
import Demo from "./Carusel";
import GetStarted from "./GetStarted";
import Source from "./sourceCodeCarusel";

// import Header from "./../../../App/HeaderHeader";
// import SideBar from "./../../../App/Header";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Carusel extends React.Component {
    state = {
        theme: "light",
        current: "null",
        showSource: "none",

        showDemo: "none",
        select: "createReact"
    };
    changeTheme = value => {
        this.setState({
            theme: value ? "dark" : "light"
        });
    };

    showSource = () => {
        this.setState({
            showSource: this.state.showSource === "none" ? "block" : "none"
        });
    };
    showDemo = () => {
        this.setState({
            showDemo: this.state.showDemo === "none" ? "block" : "none"
        });
    };
    handleClick = e => {
        console.log("click ", e);
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
        return (
            <Layout>
              <div className="Layout">
                <Layout>
                  <Layout>
                    <Content>
                        {/* // {this.state.select === "createReact" && <CreateReact />} */}
                      <Row>
                        <Col span={11}>
                            {" "}
                          <GetStarted />
                        </Col>
                        <Col span={2} />

                        <Col span={11}>
                          <h1>Demo</h1>
                          <div>
                            <Demo />
                          </div>
                          <div className="pt-30 pb-25">
                            <Button onClick={this.showSource} className="btn filled secondary min-160">
                                {" "}
                                {this.state.showSource === "none"
                                    ? "Show Source"
                                    : "Hide Source"}
                            </Button>
                          </div>
                          <div
                              style={{
                                  display: this.state.showSource
                              }}
                          >
                            <Highlight language="javascript" className="highlight">
                                {Source}
                            </Highlight>
                          </div>
                        </Col>
                      </Row>
                    </Content>
                  </Layout>
                </Layout>
              </div>
            </Layout>
        );
    }
}

export default Carusel;
