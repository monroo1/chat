import { CREATE_CONVERSATION } from "./types";
import { DELETE_CONVERSATION } from "../types";

const inititalState = {
  conversations: ["react", "js", "личное", "проекты"],
};

export const conversationsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (element) => element !== action.payload
        ),
      };
    default:
      return state;
  }
};
