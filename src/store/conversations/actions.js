import { CREATE_CONVERSATION, CHANGE_INPUT_VALUE } from "./types";
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
