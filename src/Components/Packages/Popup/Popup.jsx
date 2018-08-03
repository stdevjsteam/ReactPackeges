import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  componentDidMount() {
    ReactModal.setAppElement("body");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="btn outline secondary min-160">Trigger Modal</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Inline Styles Modal Example"
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(1,1,1,0.8)"
            },
            modal: {},
            content: {
              textAlign: "center",
              width: "500px",
              height: "450px",
              top: 100,
              left: 600
            }
          }}
        >
          <div>
            <iframe
              width="460"
              height="330"
              allowFullScreen
              frameBorder="0"
              src="https://www.youtube.com/embed/A71aqufiNtQ?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark"
            />

            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Popup;
