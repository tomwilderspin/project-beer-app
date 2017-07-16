import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

class MarkerModal extends Component {
  static propTypes() {
  	return {
      showModal: PropTypes.bool.isRequired,
      closeAction: PropTypes.func.isRequired,
      locationInformation: PropTypes.object
    };
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.closeAction} >
      <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body> <h4>something header</h4> </Modal.Body>
      <Modal.Footer> <p> some footer text</p> </Modal.Footer>
      </Modal>
    );
  }


}

export default MarkerModal;
