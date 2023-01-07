import { nanoid } from "nanoid";
import {
  EDIT_MESSAGE,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES_START,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  POST_MESSAGE_START,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_ERROR,
} from "./types";
import { DELETE_CONVERSATION } from "../types";

const inititalState = {
  messages: {},
  messagesLoading: false,
  messagesError: null,

  addMessageLoading: false,
  addMessageError: null,
};

export const messagesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            {
              id: nanoid(),
              date: new Date(),
              author: action.payload.message.author,
              message: action.payload.message.message,
            },
          ],
        },
      };
    case DELETE_CONVERSATION:
      delete state.messages[action.payload];
      return {
        ...state,
      };
    case EDIT_MESSAGE:
      return {
        ...state,
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
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (el) => el.id !== action.payload.id
          ),
        },
      };
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
      };
    case POST_MESSAGE_ERROR:
      return {
        ...state,
        addMessageLoading: true,
        addMessageError: action.payload,
      };
    default:
      return state;
  }
};
