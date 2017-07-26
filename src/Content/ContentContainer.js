import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import  ContentOverlay from './Overlay/ContentOverlayComponent';
import { closeContent } from './Actions';

class ContentContainer extends Component {

  static PropTypes() {
    return {
      locationInformation: PropTypes.object,
      showContent: PropTypes.bool,
      closeContentAction: PropTypes.func.isRequired
    };
  }

  render() {
    return (
      <div>
      <ContentOverlay
        show={this.props.showContent}
        contentData={this.props.contentData}
        closeAction={this.props.closeContentAction}
        container={this}
      />
      </div>
    );
  }
}

//redux connect
const mapStateToProps = state => {
  return {
    contentData: state.content.data,
    showContent: state.content.show
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeContentAction: () => {
      return dispatch(closeContent());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
