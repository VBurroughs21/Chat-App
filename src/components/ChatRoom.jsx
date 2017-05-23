import React from 'react';
import ChatRoomItem from '../components/ChatRoomItem';
import AddChatButton from '../components/AddChatButton';
import Header from '../components/shared/Header';
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
        <p>Chat room list</p>
        <ChatRoomItem />
        <AddChatButton submitFunction={this.addChatRoom} />
      </div>
    );
  }
}

// export default connect((state) => state, {
//   // loginUser,
// })(Chat);

export default ChatRoom;

