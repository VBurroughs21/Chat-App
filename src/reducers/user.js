import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  READ_USER_REQUEST,
  READ_USER_SUCCESS,
} from '../actions/userActions';

const user = (
  state = {
    isFetching: false,
    id: null,
    email: null,
    name: null,
    token: null,
  }, action,
) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        id: null,
        email: null,
        token: null,
      });
    case CREATE_USER_SUCCESS:
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        id: action.data.id,
        email: action.data.email,
        token: null,
      });
    case LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        id: null,
        email: null,
        token: null,
      });
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        id: action.data.id,
        email: action.data.email,
        token: null,
      });
    case UPDATE_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        id: null,
        email: null,
        token: null,
      });
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        id: action.data.id,
        email: action.data.email,
        token: null,
      });
    case READ_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        id: null,
        email: null,
        token: null,
      });
    case READ_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        id: action.data.id,
        email: action.data.email,
        name: action.data.name,
        token: null,
      });
    default:
      return state;
  }
};

export default user;
