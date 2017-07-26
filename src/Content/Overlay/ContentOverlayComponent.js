import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay } from 'react-bootstrap';
import ContentSection from '../Section/ContentSectionComponent';
import CloseButton from '../../Navigation/CloseButtonComponent';

import './ContentOverlay.css';


class ContentOverlay extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired,
    closeAction: PropTypes.func.isRequired,
    contentData: PropTypes.object.isRequired,
    container: PropTypes.object
  };

  static defaultProps = {
    show: false,
    container: this
  };

  render() {
    return (
      <Overlay
        show={this.props.show}
        onHide={this.props.closeAction}
        placement="top"
        container={this.props.container}
      >
        <OverlayInner data={this.props.contentData} closeAction={this.props.closeAction} />
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
          <ContentSection data={this.props.data} />
        </div>
      </div>
    );
  }
}

export default ContentOverlay;
