import { SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (message, roomId) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
});

export const editMessage = (value, id, roomId) => ({
  type: EDIT_MESSAGE,
  payload: { value, id, roomId },
});

export const deleteMessage = (id, roomId) => ({
  type: DELETE_MESSAGE,
  payload: { id, roomId },
});
