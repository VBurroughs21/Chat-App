export const READ_CHAT_ROOMS_REQUEST = 'READ_CHAT_ROOMS_REQUEST';
export const READ_CHAT_ROOMS_SUCCESS = 'READ_CHAT_ROOMS_SUCCESS';

export const CREATE_CHAT_REQUEST = 'CREATE_CHAT_REQUEST';
export const CREATE_CHAT_SUCCESS = 'CREATE_CHAT_SUCCESS';

export function readChatRoomsRequest() {
  return {
    type: READ_CHAT_ROOMS_REQUEST,
  };
}

export function readChatRoomsSuccess(data) {
  return {
    type: READ_CHAT_ROOMS_SUCCESS,
    data,
  };
}

export function createChatRequest(data) {
  return {
    type: CREATE_CHAT_REQUEST,
    data,
  };
}

export function createChatSuccess(data) {
  return {
    type: CREATE_CHAT_SUCCESS,
    data,
  };
}

// NEED AUTH
export function readChatRooms() {
  return dispatch => {
    dispatch(readChatRoomsRequest());
    return fetch('https://private-93240c-oracodechallenge.apiary-mock.com/chats',
      {
        method: 'GET',
        // Authorization
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .then(response => response.json())
      .then(json => dispatch(readChatRoomsSuccess(json.data)),
      );
  };
}
