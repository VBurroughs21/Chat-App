import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavItem } from 'react-bootstrap';
// import '../assets/styles/App.css';

const Header = ({ right, title, left, rightClick, leftClick }) => (
  <Navbar>
    { left ?
      <Navbar.Link href={leftClick}>{left}</Navbar.Link>
      :
      ''
    }
    <Navbar.Header>
      <Navbar.Brand>
        { title }
      </Navbar.Brand>
    </Navbar.Header>
    { right ?
      <NavItem eventKey={1} onClick={rightClick}>{right}</NavItem>
      :
      ''
    }
  </Navbar>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  right: PropTypes.string,
  left: PropTypes.string,
  rightClick: PropTypes.func,
  leftClick: PropTypes.string,
};

Header.defaultProps = {
  right: null,
  left: null,
  rightClick: null,
  leftClick: null,
};

export default Header;
