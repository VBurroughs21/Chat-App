import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { readChatRooms } from '../actions/chatActions';
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

  componentWillMount() {
    this.props.readChatRooms();
  }

  render() {
    const sortedRooms = _.sortBy(this.props.chat.rooms,
    [function (o) { return o.last_chat_message.created_at; }]);
    return (
      <div>
        <Header
          title="OraChat"
        />
        <p>Searchbar!!!!!!!</p>
        {sortedRooms.map(item => (
          <ChatRoomItem room={item} />
        ))}
        <AddChatButton submitFunction={this.addChatRoom} />
      </div>
    );
  }
}


ChatRoomList.propTypes = {
  readChatRooms: PropTypes.func.isRequired,
  // chat:
};

export default connect((state) => state, {
  readChatRooms,
})(ChatRoomList);

// export default ChatRoomList;

