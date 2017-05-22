import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../assets/styles/App.css';

const Header = ({ right, title, left, onSubmit }) => (
  <Navbar>
    { left ?
      <Nav>
        <NavItem eventKey={1} href="#">{this.props.left}</NavItem>
      </Nav>
      :
      ''
    }
    <Navbar.Header>
      <Navbar.Brand>
        { title }
      </Navbar.Brand>
    </Navbar.Header>
    { right ?
      <Nav pullRight>
        <NavItem eventKey={1} onClick={onSubmit}>{right}</NavItem>
      </Nav>
      :
      ''
    }
  </Navbar>
);

Header.propTypes = {
  right: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Header;
