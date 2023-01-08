import {
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  POST_MESSAGE_START,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_ERROR,
  DELETE_MESSAGE_START,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_ERROR,
  PATCH_MESSAGE_START,
  PATCH_MESSAGE_SUCCESS,
  PATCH_MESSAGE_ERROR,
} from "./types";

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

export const postMessageSuccess = (message, roomId) => ({
  type: POST_MESSAGE_SUCCESS,
  payload: { message, roomId },
});

export const postMessageError = (error) => ({
  type: POST_MESSAGE_ERROR,
  payload: error,
});

export const deleteMessageStart = () => ({
  type: DELETE_MESSAGE_START,
});

export const deleteMessageSuccess = (id, roomId) => ({
  type: DELETE_MESSAGE_SUCCESS,
  payload: { id, roomId },
});

export const deleteMessageError = (error) => ({
  type: DELETE_MESSAGE_ERROR,
  payload: error,
});

export const patchMessageStart = () => ({
  type: PATCH_MESSAGE_START,
});

export const patchMessageSuccess = (value, id, roomId) => ({
  type: PATCH_MESSAGE_SUCCESS,
  payload: { value, id, roomId },
});

export const patchMessageError = (error) => ({
  type: PATCH_MESSAGE_ERROR,
  payload: error,
});
