import { nanoid } from "nanoid";
import { EDIT_MESSAGE, SEND_MESSAGE, DELETE_MESSAGE } from "./types";
import { DELETE_CONVERSATION } from "../types";

const inititalState = {
  messages: {
    room1: [
      {
        id: nanoid(),
        date: new Date(),
        author: "andrey",
        message: "text test",
      },
    ],
    room2: [
      { id: nanoid(), date: new Date(), author: "bot", message: "asdasd test" },
    ],
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
    default:
      return state;
  }
};
