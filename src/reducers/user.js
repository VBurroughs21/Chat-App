import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from '../actions/userActions';

const user = (
  state = {
    isFetching: false,
    current: {},
  }, action,
) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        current: {},
      });
    case CREATE_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        current: action.data,
      });
    default:
      return state;
  }
};

export default user;
