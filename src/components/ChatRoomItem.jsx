import React from 'react';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../assets/styles/App.css';

class ChatRoomItem extends React.Component {
  // getInitialState() {
  //   return {
  //     value: '',
  //   };
  // }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  //   return true;
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
