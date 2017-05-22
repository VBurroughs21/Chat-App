import React from 'react';
import { Switch, Route } from 'react-router';
import Register from '../components/Register';
import ChatRoom from '../components/ChatRoom';
import Login from '../components/Login';
import '../assets/styles/App.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/chat-rooms" component={ChatRoom} />
    </Switch>
  </main>
);

export default Main;
