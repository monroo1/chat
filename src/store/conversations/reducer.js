import {
  CHANGE_INPUT_VALUE,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  POST_CONVERSATION_ERROR,
  POST_CONVERSATION_START,
  POST_CONVERSATION_SUCCESS,
  PATCH_CONVERSATION_INPUT_START,
  PATCH_CONVERSATION_INPUT_SUCCESS,
  PATCH_CONVERSATION_INPUT_ERROR,
} from "./types";
import {
  DELETE_CONVERSATION_START,
  DELETE_CONVERSATION_SUCCESS,
  DELETE_CONVERSATION_ERROR,
} from "../types";

const inititalState = {
  conversations: [],
  conversationsLoading: false,
  conversationsError: null,

  conversationCreateLoading: false,
  conversationCreateError: null,

  conversationDeleteLoading: false,
  conversationDeleteError: null,

  conversationEditLoading: false,
  conversationEditError: null,
};

export const conversationsReducer = (state = inititalState, action) => {
  switch (action.type) {
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
        conversations: [
          ...state.conversations,
          { name: action.payload, inputValue: "" },
        ],
      };
    case POST_CONVERSATION_ERROR:
      return {
        ...state,
        conversationCreateLoading: false,
        conversationCreateError: action.payload,
      };
    case DELETE_CONVERSATION_START:
      return {
        ...state,
        conversationDeleteLoading: true,
        conversationDeleteError: null,
      };
    case DELETE_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversationDeleteLoading: false,
        conversations: state.conversations.filter(
          (element) => element.name !== action.payload
        ),
      };
    case DELETE_CONVERSATION_ERROR:
      return {
        ...state,
        conversationDeleteLoading: false,
        conversationDeleteError: action.payload,
      };
    case PATCH_CONVERSATION_INPUT_START:
      return {
        ...state,
        conversationEditLoading: true,
        conversationEditError: null,
      };
    case PATCH_CONVERSATION_INPUT_SUCCESS:
      return {
        ...state,
        conversationEditLoading: false,
        conversations: state.conversations.map((el) => {
          return el.name === action.payload.roomId
            ? { ...el, inputValue: action.payload.value }
            : el;
        }),
      };
    case PATCH_CONVERSATION_INPUT_ERROR:
      return {
        ...state,
        conversationEditLoading: false,
        conversationEditError: action.payload,
      };
    default:
      return state;
  }
};
