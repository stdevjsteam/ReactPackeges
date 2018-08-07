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
        <div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Inline Styles Modal Example"
          style={{
            overlay: {
            },
            modal: {},
            content: {
            }
          }}
        >
          <div className="popup">
            <iframe
              width="400"
              height="330"
              allowFullScreen
              frameBorder="0"
              src="https://www.youtube.com/embed/A71aqufiNtQ?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark"
            />
            <div className="pt-25">
              <button onClick={this.handleCloseModal} className="btn outline secondary min-160">Close Modal</button>
            </div>
          </div>
        </ReactModal>
        </div>
      </div>
    );
  }
}

export default Popup;
