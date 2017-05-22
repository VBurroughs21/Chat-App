import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/App.css';

const AddChatButton = () => (
  <Button bsStyle="warning" className="add-chat" onClick={this.addChatRoom}>
    <span className="glyphicon glyphicon-plus" aria-hidden="true" />
  </Button>
);

export default AddChatButton;
