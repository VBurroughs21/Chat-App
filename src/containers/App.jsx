import React from 'react';
import { Col, Button } from 'react-bootstrap';
import '../assets/styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" />
        <div className="App-footer">
          <Col xs={6} md={4}>
            <Button
              bsSize="large"
              href="#"
              block
            >
              <span className="glyphicon glyphicon-th-list" aria-hidden="true" />
                Chats
            </Button>
          </Col>
          <Col xs={6} md={4}>
            <Button
              bsSize="large"
              href="#"
              block
            >
              <span className="glyphicon glyphicon-user" aria-hidden="true" />
              Account
            </Button>
          </Col>
        </div>
      </div>
    );
  }
}

export default App;
