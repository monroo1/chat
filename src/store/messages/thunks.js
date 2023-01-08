import { nanoid } from "nanoid";
import {
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
  postMessageStart,
  postMessageSuccess,
  postMessageError,
  deleteMessageStart,
  deleteMessageSuccess,
  deleteMessageError,
  patchMessageStart,
  patchMessageSuccess,
  patchMessageError,
} from "./actions";
import { changeInputValue } from "../conversations";

export const sendMessageBot = (roomId, length) => async (dispatch, _) => {
  const dateSting = new Date();
  dispatch(
    addMessageFB(roomId, {
      message: "Hello from bot with thunk",
      author: "Bot",
      date: dateSting.toString(),
      length: length + 1,
    })
  );
};

export const getMessagesFB = () => async (dispatch, _, api) => {
  const messages = {};
  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessageApi();

    snapshot.forEach((element) => {
      messages[element.key] = Object.values(element.val());
    });

    dispatch(getMessagesSuccess(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
};

export const addMessageFB =
  (roomId, { message, author, date, length }) =>
  async (dispatch, _, api) => {
    try {
      dispatch(postMessageStart());

      const dateString = date.toString();
      const id = nanoid();

      await api.addMessageApi(roomId, {
        id,
        message,
        author,
        dateString,
        length: length + 1,
      });

      dispatch(postMessageSuccess({ id, message, author, dateString }, roomId));
      dispatch(changeInputValue("", roomId));
      if (author !== "Bot") {
        dispatch(sendMessageBot(roomId, length));
      }
    } catch (e) {
      dispatch(postMessageError(e));
    }
  };

export const deleteMessageFB = (id, roomId) => async (dispatch, _, api) => {
  try {
    dispatch(deleteMessageStart());

    await api.deleteMessageApi(id, roomId);

    dispatch(deleteMessageSuccess(id, roomId));
  } catch (e) {
    dispatch(deleteMessageError(e));
  }
};

export const patchMessageFB =
  (value, message, roomId) => async (dispatch, _, api) => {
    try {
      dispatch(patchMessageStart());

      await api.editMessageApi(value, message, roomId);

      dispatch(patchMessageSuccess(value, message.id, roomId));
    } catch (e) {
      dispatch(patchMessageError(e));
    }
  };
