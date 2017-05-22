import React from 'react';
import ChatRoomItem from './ChatRoomItem';
import AddChatButton from './AddChatButton';
import '../assets/styles/App.css';

class ChatRoom extends React.Component {
  // getInitialState() {
  //   return {
  //     value: '',
  //   };
  // }

  // getValidationState() {

  // }

  // addChatRoom () {

  // }
  render() {
    return (
      <div>
        <header>
          <h2>OraChat</h2>
        </header>
        <ChatRoomItem />
        <AddChatButton submitFunction={this.addChatRoom} />
      </div>
    );
  }
}

export default ChatRoom;
