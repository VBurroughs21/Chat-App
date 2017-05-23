export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

export const READ_USER_REQUEST = 'READ_USER_REQUEST';
export const READ_USER_SUCCESS = 'READ_USER_SUCCESS';

export const UPDATE_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'LOGIN_USER_SUCCESS';


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

export function loginUserRequest(data) {
  return {
    type: LOGIN_USER_REQUEST,
    data,
  };
}

export function loginUserSuccess(data) {
  return {
    type: LOGIN_USER_SUCCESS,
    data,
  };
}

export function readUserRequest(data) {
  return {
    type: READ_USER_REQUEST,
    data,
  };
}

export function readUserSuccess(data) {
  return {
    type: READ_USER_SUCCESS,
    data,
  };
}

export function updateUserRequest(data) {
  return {
    type: UPDATE_USER_REQUEST,
    data,
  };
}

export function updateUserSuccess(data) {
  return {
    type: UPDATE_USER_SUCCESS,
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

export function loginUser(user) {
  return dispatch => {
    dispatch(loginUserRequest(user));
    return fetch('https://private-93240c-oracodechallenge.apiary-mock.com/auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .then(response => response.json())
      .then(json => dispatch(loginUserSuccess(json.data)),
      );
  };
}

// NEED AUTH
export function readUser(user) {
  return dispatch => {
    dispatch(readUserRequest(user));
    return fetch('https://private-93240c-oracodechallenge.apiary-mock.com/users/current',
      {
        method: 'GET',
        // Authorization
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .then(response => response.json())
      .then(json => dispatch(readUserSuccess(json.data)),
      );
  };
}

// NEED AUTH
export function updateUser(user) {
  return dispatch => {
    dispatch(updateUserRequest(user));
    return fetch('https://private-93240c-oracodechallenge.apiary-mock.com/users/current',
      {
        method: 'PATCH',
        // Authorization
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .then(response => response.json())
      .then(json => dispatch(updateUserSuccess(json.data)),
      );
  };
}
