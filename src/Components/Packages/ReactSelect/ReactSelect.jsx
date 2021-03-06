import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import * as STATES from "./states";
import "react-select/dist/react-select.css";

class ReactSelect extends Component {
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
        var options = STATES[this.state.country];
        return (
            <div>
                <div className="section" style={{ textAlign: "left" }}>
                    <p className="desc-text">{this.props.label} </p>
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
                    <div className="pt-25 pb-25">
                        <button
                            type="button"
                            onClick={this.focusStateSelect} className="btn outline secondary mr-25 min-160"
                        >
                            Focus Select
                        </button>
                        <button
                            type="button"
                            onClick={this.clearValue} className="btn outline tertiary min-160"
                        >
                            Clear Value
                        </button>
                    </div>
                    <div className="checkbox-list">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                className="checkbox-control"
                                name="searchable"
                                checked={this.state.searchable}
                                onChange={this.toggleCheckbox}
                            />
                            <span className="check-icon" />
                            <span className="checkbox-label">Searchable</span>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                className="checkbox-control"
                                name="disabled"
                                checked={this.state.disabled}
                                onChange={this.toggleCheckbox}
                            />
                            <span className="check-icon" />
                            <span className="checkbox-label">Disabled</span>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                className="checkbox-control"
                                name="clearable"
                                checked={this.state.clearable}
                                onChange={this.toggleCheckbox}
                            />
                            <span className="check-icon" />
                            <span className="checkbox-label">Clearable</span>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                className="checkbox-control"
                                name="rtl"
                                checked={this.state.rtl}
                                onChange={this.toggleCheckbox}
                            />
                            <span className="check-icon" />
                            <span className="checkbox-label">rtl</span>
                        </label>
                    </div>
                    <div className="radio-buttons">
                        <input
                            type="radio"
                            className="checkbox-control"
                            checked={this.state.country === "AU"}
                            value="AU"
                            onChange={this.switchCountry}
                            id="Australia"
                        />
                        <label htmlFor="Australia" className="main-label">Australia</label>
                    </div>
                    <div className="radio-buttons">
                        <input
                            type="radio"
                            className="checkbox-control"
                            checked={this.state.country === "US"}
                            value="US"
                            onChange={this.switchCountry}
                            id="US"
                        />
                        <label htmlFor="US" className="main-label">USA</label>
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

export default ReactSelect;
