import {
  READ_CHAT_ROOMS_REQUEST,
  READ_CHAT_ROOMS_SUCCESS,
  CREATE_CHAT_REQUEST,
  CREATE_CHAT_SUCCESS,
} from '../actions/chatActions';

const chat = (
  state = {
    isFetching: false,
    rooms: [],
  }, action,
) => {
  switch (action.type) {
    case READ_CHAT_ROOMS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        rooms: [],
      });
    case READ_CHAT_ROOMS_SUCCESS:
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        rooms: action.data,
      });
    case CREATE_CHAT_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case CREATE_CHAT_SUCCESS:
      // VB update chatrooms push
      return Object.assign({}, state, {
        isFetching: false,
        id: action.data.id,
        email: action.data.email,
        token: null,
      });
    default:
      return state;
  }
};

export default chat;
