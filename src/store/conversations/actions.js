import {
  CHANGE_INPUT_VALUE,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  POST_CONVERSATION_ERROR,
  POST_CONVERSATION_START,
  POST_CONVERSATION_SUCCESS,
  PATCH_CONVERSATION_INPUT_SUCCESS,
  PATCH_CONVERSATION_INPUT_START,
  PATCH_CONVERSATION_INPUT_ERROR,
} from "./types";
import {
  DELETE_CONVERSATION_START,
  DELETE_CONVERSATION_SUCCESS,
  DELETE_CONVERSATION_ERROR,
} from "../types";

export const changeInputValue = (value, roomId) => ({
  type: CHANGE_INPUT_VALUE,
  payload: { value, roomId },
});

export const getConversationsStart = () => ({
  type: GET_CONVERSATIONS_START,
});

export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: conversations,
});

export const getConversationsError = (error) => ({
  type: GET_CONVERSATIONS_ERROR,
  payload: error,
});

export const postConversationsStart = () => ({
  type: POST_CONVERSATION_START,
});

export const postConversationsSuccess = (conversation) => ({
  type: POST_CONVERSATION_SUCCESS,
  payload: conversation,
});

export const postConversationsError = (error) => ({
  type: POST_CONVERSATION_ERROR,
  payload: error,
});

export const deleteConversationsStart = () => ({
  type: DELETE_CONVERSATION_START,
});

export const deleteConversationsSuccess = (roomId) => ({
  type: DELETE_CONVERSATION_SUCCESS,
  payload: roomId,
});

export const deleteConversationsError = (error) => ({
  type: DELETE_CONVERSATION_ERROR,
  payload: error,
});

export const patchConversationsStart = () => ({
  type: PATCH_CONVERSATION_INPUT_START,
});

export const patchConversationsSuccess = (value, roomId) => ({
  type: PATCH_CONVERSATION_INPUT_SUCCESS,
  payload: { value, roomId },
});

export const patchConversationsError = (error) => ({
  type: PATCH_CONVERSATION_INPUT_ERROR,
  payload: error,
});
