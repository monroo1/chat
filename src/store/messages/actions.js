import {
  SEND_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  POST_MESSAGE_START,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_ERROR,
} from "./types";

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
});

export const editMessage = (value, id, roomId) => ({
  type: EDIT_MESSAGE,
  payload: { value, id, roomId },
});

export const deleteMessage = (id, roomId) => ({
  type: DELETE_MESSAGE,
  payload: { id, roomId },
});

export const getMessagesStart = () => ({
  type: GET_MESSAGES_START,
});

export const getMessagesSuccess = (conversations) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: conversations,
});

export const getMessagesError = (error) => ({
  type: GET_MESSAGES_ERROR,
  payload: error,
});

export const postMessageStart = () => ({
  type: POST_MESSAGE_START,
});

export const postMessageSuccess = () => ({
  type: POST_MESSAGE_SUCCESS,
});

export const postMessageError = (error) => ({
  type: POST_MESSAGE_ERROR,
  payload: error,
});
