import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay } from 'react-bootstrap';
import ContentSection from '../ContentSectionComponent';

class ContentOverlay extends Component {
  static propTypes() {
  	return {
      showModal: PropTypes.bool.isRequired,
      closeAction: PropTypes.func.isRequired,
      locationInformation: PropTypes.object,
      container: PropTypes.object
    };
  }

  render() {

    const {container} = this.props || this;

    return (
      <Overlay
        show={this.props.showModal}
        onHide={this.props.closeAction}
        placement="top"
        container={container}
      >
      <ContentSection />
      </Overlay>
    );
  }


}

export default ContentOverlay;
