import React from 'react';
import PropTypes from 'prop-types';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { timePassed, displayDate } from '../utils';
import '../assets/styles/App.css';

const ChatRoomItem = ({ room }) => (
  <Link to={`/chat/room/${room.id}`}>
    <p>{displayDate(room.last_chat_message.created_at)}</p>
    <p>{room.name} by {room.users.name}</p>
    <p>{room.last_chat_message.user.name} - {
      timePassed(room.last_chat_message.created_at, new Date()) } ago</p>
    <p>{room.last_chat_message.message}</p>
  </Link>
);

ChatRoomItem.propTypes = {
  room: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
};

export default ChatRoomItem;
