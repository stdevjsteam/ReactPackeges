const sourceMultiSelect = `import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import * as STATES from "./states";
import "react-select/dist/react-select.css";

const FLAVOURS = [
  { label: "Chocolate", value: "chocolate" },
  { label: "Vanilla", value: "vanilla" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Caramel", value: "caramel" },
  { label: "Cookies and Cream", value: "cookiescream" },
  { label: "Peppermint", value: "peppermint" }
];

const WHY_WOULD_YOU = [
  { label: "Chocolate (are you crazy?)", value: "chocolate", disabled: true }
].concat(FLAVOURS.slice(1));

class ReactMultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeSelected: true,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false
    };
  }

  handleSelectChange = value => {
    console.log("You've selected:", value);
    this.setState({ value });
  };
  toggleCheckbox = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };
  toggleRtl = e => {
    let rtl = e.target.checked;
    this.setState({ rtl });
  };

  render() {
    const { crazy, disabled, stayOpen, value } = this.state;
    const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
    return (
      <div className="section" style={{ textAlign: "left" }}>
        <h3 className="section-heading">{this.props.label} </h3>
        <Select
          closeOnSelect={!stayOpen}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Select your favourite(s)"
          removeSelected={this.state.removeSelected}
          rtl={this.state.rtl}
          simpleValue
          value={value}
        />

        <div className="checkbox-list" style={{ marginTop: "15px" }}>
          <label className="checkbox" style={{ display: "block" }}>
            <input
              type="checkbox"
              className="checkbox-control"
              name="removeSelected"
              checked={this.state.removeSelected}
              onChange={this.toggleCheckbox}
            />
            <span className="checkbox-label">Remove selected options</span>
          </label>
          <label className="checkbox" style={{ display: "block" }}>
            <input
              type="checkbox"
              className="checkbox-control"
              name="disabled"
              checked={this.state.disabled}
              onChange={this.toggleCheckbox}
            />
            <span className="checkbox-label">Disable the control</span>
          </label>
          <label className="checkbox" style={{ display: "block" }}>
            <input
              type="checkbox"
              className="checkbox-control"
              name="crazy"
              checked={crazy}
              onChange={this.toggleCheckbox}
            />
            <span className="checkbox-label">
              I don't like Chocolate (disabled the option)
            </span>
          </label>
          <label className="checkbox" style={{ display: "block" }}>
            <input
              type="checkbox"
              className="checkbox-control"
              name="stayOpen"
              checked={stayOpen}
              onChange={this.toggleCheckbox}
            />
            <span className="checkbox-label">
              Stay open when an Option is selected
            </span>
          </label>
          <label className="checkbox" style={{ display: "block" }}>
            <input
              type="checkbox"
              className="checkbox-control"
              name="rtl"
              checked={this.state.rtl}
              onChange={this.toggleCheckbox}
            />
            <span className="checkbox-label">rtl</span>
          </label>
        </div>
      </div>
    );
  }
}
ReactMultiSelect.propTypes = {
  label: PropTypes.string
};
ReactMultiSelect.defaultProps = {
  label: "Multiselect:",
  searchable: true
};

export default ReactMultiSelect;
`;
export default sourceMultiSelect;
