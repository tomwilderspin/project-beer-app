import React, { Component } from 'react';
import {Nav, Navbar, NavItem } from 'react-bootstrap';
import BrandLogo from '../Map/default-marker-icon.png';

import './NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <header className="nav-header">
        <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <img src={BrandLogo} alt="beer map" />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">About</NavItem>
          <NavItem eventKey={2} href="#">Register</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
    )
  }
}

export default NavBar;
