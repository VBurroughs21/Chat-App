import React from 'react';
// import { connect } from 'react-redux';
import ChatRoomItem from '../components/ChatRoomItem';
import AddChatButton from '../components/AddChatButton';
import Header from '../components/shared/Header';
import '../assets/styles/App.css';

class ChatRoomList extends React.Component {
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
        <p>Searchbar!!!!!!!</p>
        <ChatRoomItem />
        <AddChatButton submitFunction={this.addChatRoom} />
      </div>
    );
  }
}

// export default connect((state) => state, {
//   // loginUser,
// })(Chat);

export default ChatRoomList;

