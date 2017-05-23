import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import ChatRoomList from '../components/ChatRoomList';
import ChatRoom from '../components/ChatRoom';
import Footer from '../components/Footer';
import '../assets/styles/App.css';

class Chat extends React.Component {
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
        <Switch>
          <Route path={`${this.props.match.url}/rooms`} component={ChatRoomList} />
          <Route path={`${this.props.match.url}/room/:id`} component={ChatRoom} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

Chat.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
  ]).isRequired,
};

export default connect((state) => state, {
  // loginUser,
})(Chat);

