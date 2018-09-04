import React, { Component } from "react";
import Dropzone from "react-dropzone";

class DropZone extends React.Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <div className="drag-text">
              <p className="text">Try dropping some files here, or click to select files to upload.</p>
            </div>
          </Dropzone>
        </div>
        <aside>
          <ul style={{ float: "left" }}>
            {this.state.files.map(f => (
              <li key={f.name}>
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside>
      </section>
    );
  }
}

export default DropZone;
