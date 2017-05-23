import React from 'react';
import { connect } from 'react-redux';
import ChatRoomItem from './ChatRoomItem';
import AddChatButton from './AddChatButton';
import Header from './shared/Header';
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
        <Header
          title="OraChat"
        />
        <ChatRoomItem />
        <AddChatButton submitFunction={this.addChatRoom} />
      </div>
    );
  }
}

export default connect((state) => state, {
  // loginUser,
})(ChatRoom);

