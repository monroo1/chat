import { CREATE_CONVERSATION, CHANGE_INPUT_VALUE } from "./types";
import { DELETE_CONVERSATION } from "../types";

const inititalState = {
  conversations: [
    { name: "react", inputValue: "" },
    { name: "js", inputValue: "" },
  ],
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
    default:
      return state;
  }
};
