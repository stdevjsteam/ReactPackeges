const sourceSelect = `import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import * as STATES from "./states";
import "react-select/dist/react-select.css";

export default class ReactSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "AU",
      disabled: false,
      searchable: this.props.searchable,
      selectValue: "new-south-wales",
      clearable: true,
      rtl: false
    };
  }

  clearValue = e => {
    this.setState({ selectValue: "" });
  };
  switchCountry = e => {
    var newCountry = e.target.value;
    this.setState({
      country: newCountry,
      selectValue: null
    });
  };
  updateValue = newValue => {
    this.setState({
      selectValue: newValue
    });
  };
  focusStateSelect = () => {
    this.select.focus();
  };
  toggleCheckbox = e => {
    let newState = {};
    newState[e.target.name] = e.target.checked;
    this.setState(newState);
  };
  render() {
    console.log("fffffffff", this.state.selectValue);
    var options = STATES[this.state.country];
    return (
      <div style={{ width: "400px", height: "900px" }}>
        <div className="section" style={{ textAlign: "left" }}>
          <h3 className="section-heading">
            {this.props.label}{" "}
            <a href="https://github.com/JedWatson/react-select/tree/master/examples/src/components/States.js">
              (Source)
            </a>
          </h3>
          <Select
            id="state-select"
            ref={ref => {
              this.select = ref;
            }}
            onBlurResetsInput={false}
            onSelectResetsInput={false}
            autoFocus
            options={options}
            simpleValue
            clearable={this.state.clearable}
            name="selected-state"
            disabled={this.state.disabled}
            value={this.state.selectValue}
            onChange={this.updateValue}
            rtl={this.state.rtl}
            searchable={this.state.searchable}
          />
          <button
            style={{ marginTop: "15px" }}
            type="button"
            onClick={this.focusStateSelect}
          >
            Focus Select
          </button>
          <button
            style={{ marginTop: "15px" }}
            type="button"
            onClick={this.clearValue}
          >
            Clear Value
          </button>

          <div className="checkbox-list">
            <label className="checkbox" style={{ display: "block" }}>
              <input
                type="checkbox"
                className="checkbox-control"
                name="searchable"
                checked={this.state.searchable}
                onChange={this.toggleCheckbox}
              />
              <span className="checkbox-label">Searchable</span>
            </label>
            <label className="checkbox" style={{ display: "block" }}>
              <input
                type="checkbox"
                className="checkbox-control"
                name="disabled"
                checked={this.state.disabled}
                onChange={this.toggleCheckbox}
              />
              <span className="checkbox-label">Disabled</span>
            </label>
            <label className="checkbox" style={{ display: "block" }}>
              <input
                type="checkbox"
                className="checkbox-control"
                name="clearable"
                checked={this.state.clearable}
                onChange={this.toggleCheckbox}
              />
              <span className="checkbox-label">Clearable</span>
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
          <div className="checkbox-list">
            <label className="checkbox" style={{ display: "block" }}>
              <input
                type="radio"
                className="checkbox-control"
                checked={this.state.country === "AU"}
                value="AU"
                onChange={this.switchCountry}
              />
              <span className="checkbox-label">Australia</span>
            </label>
            <label className="checkbox" style={{ display: "block" }}>
              <input
                type="radio"
                className="checkbox-control"
                checked={this.state.country === "US"}
                value="US"
                onChange={this.switchCountry}
              />
              <span className="checkbox-label">United States</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
ReactSelect.propTypes = {
  label: PropTypes.string,
  searchable: PropTypes.bool
};
ReactSelect.defaultProps = {
  label: "States:",
  searchable: true
};
`;
export default sourceSelect;
