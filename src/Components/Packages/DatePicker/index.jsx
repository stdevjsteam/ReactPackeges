import React from "react";
import { Switch, Layout, Menu, Breadcrumb, Icon, Button, Row, Col } from "antd";
import Highlight from "react-highlight";
import Demo from "./SingleDatePickerWrapper";
import Demo1 from "./DateRangePickerWrapper";
import GetStarted from "./GetStarted";
import Source from "./sourceCodeSingleDatePicker";
import Source1 from "./sourceCodeRangeDatePicker";

// import JSHeader from "./../../JSHeader";
// import JSSider from "./../../JSSider";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class DatePicker extends React.Component {
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
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: "90vh"
                }}
              >
                <Row>
                  <Col span={11}>
                    {" "}
                    <GetStarted />
                  </Col>
                  <Col span={2} />

                  <Col span={11}>
                    <h2>Demo</h2>
                    <div style={{ display: "block" }}>
                      <Demo />
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      <Button onClick={() => this.showSource("showSource1")}>
                        {" "}
                        {this.state.showSource === "none"
                          ? "Show Source"
                          : "Hide Source"}
                      </Button>
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        display: this.state.showSource
                      }}
                    >
                      <Highlight language="javascript" className="highlight">
                        {Source}
                      </Highlight>
                    </div>

                    <div>
                      <h2>Demo 1</h2>
                      <div style={{ display: "block" }}>
                        <Demo1 />
                      </div>
                      <div style={{ marginTop: "30px" }}>
                        <Button onClick={() => this.showSource("showSource1")}>
                          {" "}
                          {this.state.showSource1 === "none"
                            ? "Show Source"
                            : "Hide Source"}
                        </Button>
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          display: this.state.showSource1
                        }}
                      >
                        <Highlight language="javascript" className="highlight">
                          {Source1}
                        </Highlight>
                      </div>
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

export default DatePicker;
