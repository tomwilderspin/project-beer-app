import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./ContentSection.css";


class ContentSection extends Component {

  static propTypes() {
    return {
      style: PropTypes.object
    }
  }

  render() {
    return (
      <section className="content-section">
        <strong>Holy guacamole!</strong> Check this info.
      </section>
    );
  }
}

export default ContentSection;
