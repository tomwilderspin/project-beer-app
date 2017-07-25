import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay } from 'react-bootstrap';
import ContentSection from '../ContentSectionComponent';
import CloseButton from '../../Navigation/CloseButtonComponent';

import './ContentOverlay.css';


class ContentOverlay extends Component {

  static propTypes() {
  	return {
      show: PropTypes.bool.isRequired,
      closeAction: PropTypes.func.isRequired,
      locationInformation: PropTypes.object,
      container: PropTypes.object
    };
  }

  render() {

    const { container } = this.props || this;

    return (
      <Overlay
        show={this.props.show}
        onHide={this.props.closeAction}
        placement="top"
        container={container}
      >
        <OverlayInner closeAction={this.props.closeAction} />
      </Overlay>
    );
  }
}

class OverlayInner extends Component {

  render() {
    return (
      <div className="container content-overlay">
        <div className="row row-no-margin">
          <CloseButton onClick={this.props.closeAction} />
        </div>
        <div className="row row-no-margin text-left content-overlay__article">
          <ContentSection />
        </div>
      </div>
    );
  }
}

export default ContentOverlay;
