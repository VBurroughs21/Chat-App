import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user';
import chat from './reducers/chat';

export default function configureStore() {
  const reducer = combineReducers({
    user,
    chat,
  });
  const store = createStore(
    reducer,
    applyMiddleware(thunk),
  );

  return store;
}

