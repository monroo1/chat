import {
  CREATE_CONVERSATION,
  CHANGE_INPUT_VALUE,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  POST_CONVERSATION_ERROR,
  POST_CONVERSATION_START,
  POST_CONVERSATION_SUCCESS,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
});

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
});

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

export const postConversationsSuccess = () => ({
  type: POST_CONVERSATION_SUCCESS,
});

export const postConversationsError = (error) => ({
  type: POST_CONVERSATION_ERROR,
  payload: error,
});
