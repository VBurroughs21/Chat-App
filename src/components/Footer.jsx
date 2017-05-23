import React from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';
import '../assets/styles/App.css';

class Footer extends React.Component {
  // Display which is active

  render() {
    return (
      <Navbar className="App-footer">
        <Nav>
          <Col xs={6} md={4}>
            <Navbar.Link href="/chat/rooms">
              <span className="glyphicon glyphicon-th-list" aria-hidden="true" />
                Chats
            </Navbar.Link>
          </Col>
          <Col xs={6} md={4}>
            <Navbar.Link href="/chat/account">
              <span className="glyphicon glyphicon-user" aria-hidden="true" />
              Account
            </Navbar.Link>
          </Col>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
