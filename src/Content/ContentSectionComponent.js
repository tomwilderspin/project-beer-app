import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContentSection.css';


class ContentSection extends Component {

  static propTypes() {
    return {
      style: PropTypes.object
    }
  }

  render() {
    return (
      <aside className="content-aside">
        <article>
        <header>
          <h2>Bottle Shop Name</h2>
        </header>
        <section>
          <img src="http://venues.slm.digital/app/uploads/2016/01/DPS0350-1024x680.jpg" alt="bottles of beer" />
          <p>some information about said bottleshop turns out it has beer!</p>
        </section>
        <footer>

        </footer>
        </article>

      </aside>
    );
  }
}

export default ContentSection;
