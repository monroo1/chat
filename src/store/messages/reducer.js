import { SEND_MESSAGE } from "./types";
import { DELETE_CONVERSATION } from "../types";

const inititalState = {
  messages: {
    react: [{ date: new Date(), author: "andrey", message: "text test" }],
    js: [{ date: new Date(), author: "bot", message: "asdasd test" }],
  },
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
    default:
      return state;
  }
};
