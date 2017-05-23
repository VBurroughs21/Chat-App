import React from 'react';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../assets/styles/App.css';

class ChatRoomItem extends React.Component {
  // getInitialState() {
  //   return {
  //     value: '',
  //   };
  // }

  // handleChange () {

  // }

  // Group by date
  render() {
    return (
      <div>
        <p>this.props.name by user created it</p>
        <p>this.props.last_chat_message - time ago this.props.created_at</p>
        <p>this.props.last_chat_message.message</p>
      </div>
    );
  }
}

export default ChatRoomItem;
