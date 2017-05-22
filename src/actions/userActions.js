export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

export function createUserRequest(data) {
  return {
    type: CREATE_USER_REQUEST,
    data,
  };
}

export function createUserSuccess(data) {
  return {
    type: CREATE_USER_SUCCESS,
    data,
  };
}

export function createUser(user) {
  return dispatch => {
    dispatch(createUserRequest(user));
    return fetch('https://private-93240c-oracodechallenge.apiary-mock.com/users',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .then(response => response.json())
      .then(json => dispatch(createUserSuccess(json.data)),
      );
  };
}
