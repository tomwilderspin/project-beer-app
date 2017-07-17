import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LocationModal from './LocationModal/LocationModalComponent';
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
      <div className="modal">
      <LocationModal
        showModal={this.props.showContent}
        locationInformation={this.props.locationInformation}
        closeAction={this.props.closeContentAction}
      />
      </div>
    );
  }
}

//redux connect
const mapStateToProps = state => {
  return {
    locationInformation: state.content.information,
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
