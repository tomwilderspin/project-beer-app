import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContentSection.css';

class ContentSection extends Component {

  static propTypes = {
    data: PropTypes.shape({
            name: PropTypes.string,
            imgUrl: PropTypes.string,
            description: PropTypes.string
          }).isRequired
  };

  static defaultProps = {
    data: {
      name: "",
      imgUrl: "",
      description: ""
    }
  };

  render() {
    return (
      <aside className="content-aside">
        <article>
          <header>
            <h2>{this.props.data.name}</h2>
          </header>
          <section>
            <img src={this.props.data.imgUrl} alt={this.props.data.name} />
            <p>{this.props.data.description}</p>
          </section>
          <footer>
          </footer>
        </article>
      </aside>
    );
  }
}



export default ContentSection;
