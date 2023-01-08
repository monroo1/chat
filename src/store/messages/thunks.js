import { nanoid } from "nanoid";
import {
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
  postMessageStart,
  postMessageSuccess,
  postMessageError,
} from "./actions";
import { changeInputValue } from "../conversations";

export const sendMessageBot = (roomId) => async (dispatch, _) => {
  const dateSting = new Date();
  dispatch(
    addMessageFB(roomId, {
      message: "Hello from bot with thunk",
      author: "Bot",
      date: dateSting.toString(),
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
  (roomId, { message, author, date }) =>
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
      });

      dispatch(postMessageSuccess({ id, message, author, dateString }, roomId));
      dispatch(changeInputValue("", roomId));
      if (author !== "Bot") {
        dispatch(sendMessageBot(roomId));
      }
    } catch (e) {
      dispatch(postMessageError(e));
    }
  };
