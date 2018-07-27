import React from "react";
import { Switch, Layout, Menu, Breadcrumb, Icon, Button, Row, Col } from "antd";
import { map } from "lodash";
import Highlight from "react-highlight";

import JSHeader from "./JSHeader";
import JSSider from "./JSSider";
import SimpleSlider from "./packageComponent/carusel/Carusel";
import source from "././packageComponent/carusel/sourceCodeCarusel";
import GetStarted from "./packageComponent/carusel/GetStarted";
import CreateReact from "./HomeComponent/createReact";
import ReactSelect from "./packageComponent/ReactSelect/ReactSelect";
import ReactMultiSelect from "./packageComponent/ReactSelect/ReactMultiSelect";
import sourceSelect from "./packageComponent/ReactSelect/sourceCodeReactSelect";
import sourceMultiSelect from "./packageComponent/ReactSelect/sourceCodeReactMultiSelect";
import GetSelectStarted from "./packageComponent/ReactSelect/GetStarted";
import Popup from "./packageComponent/Popup/Popup";
import GetStartedPopup from "./packageComponent/Popup/GetStarted";
import sourceCodePopup from "./packageComponent/Popup/sourseCodePopup";
import ScrollBar from "./packageComponent/ScrollBar/ColoredScrollbars";
import sourceScrollBar from "./packageComponent/ScrollBar/sourceScrollbar";
import GalleryExample from "./packageComponent/Galery/Gallery";
import sourceCodeGalery from "./packageComponent/Galery/sourceCodeGallery";
import GetStartedGalery from "./packageComponent/Galery/GetStarted";
import Gallery from "./packageComponent/Mansory/Mansory";
import GetStartedMasonry from "./packageComponent/Mansory/GetStarted";
import sourceCodeMasonry from "./packageComponent/Mansory/sourceCodeMasonry";
import GetScrollStarted from "./packageComponent/ScrollBar/GetStarted";

import {
  GetStartedAntDesign,
  GetStartedMaterial,
  GetStartedReactBootsrtap,
  GetStartedSemanticUIReact
} from "./packageComponent/Design";

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
    const components = {
      reactSlick: {
        demo: SimpleSlider,
        install: GetStarted,
        source: source
      },
      reactSelect: {
        demo: ReactSelect,
        demo1: ReactMultiSelect,
        install: GetSelectStarted,
        source: sourceSelect,
        source1: sourceMultiSelect
      },
      popup: {
        demo: Popup,
        install: GetStartedPopup,
        source: sourceCodePopup
      },
      scrollBar: {
        demo: ScrollBar,
        install: GetScrollStarted,
        source: sourceScrollBar
      },
      gallery: {
        demo: GalleryExample,
        install: GetStartedGalery,
        source: sourceCodeGalery
      },
      masonry: {
        demo: Gallery,
        install: GetStartedMasonry,
        source: sourceCodeMasonry
      },
      antDesign: {
        demo: null,
        install: GetStartedAntDesign,
        source: null
      },
      materialUI: {
        demo: null,
        install: GetStartedMaterial,
        source: null
      },
      reactBootstrap: {
        demo: null,
        install: GetStartedReactBootsrtap,
        source: null
      },
      semanticUI: {
        demo: null,
        install: GetStartedSemanticUIReact,
        source: null
      }
    };

    const select = components[`${this.state.select}`];

    return (
      <Layout>
        <JSHeader selected={this.onSelect} />
        <div className="Layout">
          <Layout>
            <JSSider selected={this.onSelect} current={this.state.current} />
            <Layout style={{ padding: "0 24px 24px" }}>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: "90vh"
                }}
              >
                {this.state.select === "createReact" && <CreateReact />}
                {this.state.select !== "createReact" && (
                  <Row>
                    <Col span={select.demo ? 11 : 24}>
                      {" "}
                      <select.install />
                    </Col>
                    <Col span={2} />
                    {select.demo && (
                      <Col span={11}>
                        <h2>Demo</h2>
                        <div style={{ display: "block" }}>
                          <select.demo />
                        </div>
                        <div style={{ marginTop: "30px" }}>
                          <Button onClick={() => this.showSource("showSource")}>
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
                          <Highlight
                            language="javascript"
                            className="highlight"
                          >
                            {select.source && select.source}
                          </Highlight>
                        </div>
                        {select.demo1 && (
                          <div>
                            <h2>Demo 1</h2>
                            <div style={{ display: "block" }}>
                              <select.demo1 />
                            </div>
                            <div style={{ marginTop: "30px" }}>
                              <Button
                                onClick={() => this.showSource("showSource1")}
                              >
                                {" "}
                                {this.state.showSource1 === "none"
                                  ? "Show Source"
                                  : "Hide Source"}
                              </Button>
                            </div>
                            <div
                              style={{
                                textAlign: "left",
                                display: this.state.sDesign
                              }}
                            >
                              <Highlight
                                language="javascript"
                                Design
                                className="highlight"
                              >
                                {select.source1}
                              </Highlight>
                            </div>
                          </div>
                        )}
                      </Col>
                    )}
                  </Row>
                )}
              </Content>
            </Layout>
          </Layout>
        </div>
      </Layout>
    );
  }
}

export default SiderMenu;
