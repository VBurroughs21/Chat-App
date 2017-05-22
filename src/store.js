import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user';

export default function configureStore() {
  const reducer = combineReducers({
    user,
  });
  const store = createStore(
    reducer,
    applyMiddleware(thunk),
  );

  return store;
}

