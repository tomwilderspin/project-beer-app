import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './CloseButton.css';

class CloseButton extends Component {

  static propTypes() {
    return {
      onClick: PropTypes.func.isRequired
    };
  }

  render() {
    return (
        <a className="btn btn-default nav__close-button" href="#" role="button" onClick={this.props.onClick}>
          <span className="glyphicon glyphicon-remove"></span>
        </a>
    )
  }

}

export default CloseButton;
