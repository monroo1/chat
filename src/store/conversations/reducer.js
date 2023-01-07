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

const inititalState = {
  conversations: [],
  conversationsLoading: false,
  conversationsError: null,

  conversationCreateLoading: false,
  conversationCreateError: null,
};

export const conversationsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [
          ...state.conversations,
          { name: action.payload, inputValue: "" },
        ],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (element) => element.name !== action.payload
        ),
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        conversations: state.conversations.map((el) => {
          return el.name === action.payload.roomId
            ? { ...el, inputValue: action.payload.value }
            : el;
        }),
      };
    case GET_CONVERSATIONS_START:
      return {
        ...state,
        conversationsLoading: true,
        conversationsError: null,
      };
    case GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversationsLoading: false,
        conversations: action.payload,
      };
    case GET_CONVERSATIONS_ERROR:
      return {
        ...state,
        conversationsLoading: false,
        conversationsError: action.payload,
      };

    case POST_CONVERSATION_START:
      return {
        ...state,
        conversationCreateLoading: true,
        conversationCreateError: null,
      };
    case POST_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversationCreateLoading: false,
        // conversations: action.payload,
      };
    case POST_CONVERSATION_ERROR:
      return {
        ...state,
        conversationCreateLoading: false,
        conversationCreateError: action.payload,
      };
    default:
      return state;
  }
};
