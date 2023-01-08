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
import { DELETE_CONVERSATION_SUCCESS } from "../types";

const inititalState = {
  messages: {},
  messagesLoading: false,
  messagesError: null,

  addMessageLoading: false,
  addMessageError: null,

  deleteMessageLoading: false,
  deleteMessageError: null,

  editMessageLoading: false,
  editMessageError: null,
};

export const messagesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case GET_MESSAGES_START:
      return {
        ...state,
        messagesLoading: true,
        messagesError: null,
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesLoading: false,
        messages: action.payload,
      };
    case GET_MESSAGES_ERROR:
      return {
        ...state,
        messagesLoading: false,
        messagesError: action.payload,
      };
    case POST_MESSAGE_START:
      return {
        ...state,
        addMessageLoading: true,
        addMessageError: null,
      };
    case POST_MESSAGE_SUCCESS:
      return {
        ...state,
        addMessageLoading: false,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            {
              id: action.payload.message.id,
              date: new Date(),
              author: action.payload.message.author,
              message: action.payload.message.message,
            },
          ],
        },
      };
    case POST_MESSAGE_ERROR:
      return {
        ...state,
        addMessageLoading: true,
        addMessageError: action.payload,
      };
    case DELETE_CONVERSATION_SUCCESS:
      delete state.messages[action.payload];
      return { ...state };
    case DELETE_MESSAGE_START:
      return {
        ...state,
        deleteMessageLoading: true,
        deleteMessageError: null,
      };
    case DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        deleteMessageLoading: false,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (el) => el.id !== action.payload.id
          ),
        },
      };
    case DELETE_MESSAGE_ERROR:
      return {
        ...state,
        deleteMessageLoading: false,
        deleteMessageError: action.payload,
      };
    case PATCH_MESSAGE_START:
      return {
        ...state,
        editMessageLoading: true,
        editMessageError: null,
      };
    case PATCH_MESSAGE_SUCCESS:
      return {
        ...state,
        editMessageLoading: false,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].map(
            (el) => {
              return el.id === action.payload.id
                ? { ...el, message: action.payload.value, isEdit: true }
                : el;
            }
          ),
        },
      };
    case PATCH_MESSAGE_ERROR:
      return {
        ...state,
        editMessageLoading: false,
        editMessageError: action.payload,
      };
    default:
      return state;
  }
};
