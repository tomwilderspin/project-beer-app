import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../Navigation/CloseButton';
//todo add in context for article...

class ContentModal extends Component {
  static propTypes() {
  	return {
      showModal: PropTypes.bool.isRequired,
      closeAction: PropTypes.func.isRequired,
      locationInformation: PropTypes.object
    };
  }

  render() {
    return (
      <section className="content-overlay">
      <CloseButton />
      <article className="content-overlay__article">
      </article>
      </section>
    );
  }


}

export default ContentModal;
