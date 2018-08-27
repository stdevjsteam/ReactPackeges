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
            <Layout>
              <Content>
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
                    <div className="pt-25 pb-25">
                      <Button onClick={() => this.showSource("showSource1")} className="btn filled secondary min-160">
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
                      }}>
                      <Highlight language="javascript" className="highlight">
                        {Source}
                      </Highlight>
                    </div>
                    <div>
                      <h2 className="pb-25">Demo 1</h2>
                      <div>
                        <Demo1 />
                      </div>
                      <div className="pt-25 pb-25">
                        <Button onClick={() => this.showSource("showSource1")} className="btn filled secondary min-160">
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
