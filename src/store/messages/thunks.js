import { sendMessage } from "./actions";
import { changeInputValue } from "../conversations";

export const sendMessageBot =
  (message, roomId) => async (dispatch, getState) => {
    dispatch(sendMessage(message, roomId));
    dispatch(changeInputValue("", roomId));

    if (message.author === "User") {
      setTimeout(() => {
        dispatch(
          sendMessage(
            { author: "Bot", message: "Hello from bot with thunk" },
            roomId
          )
        );
      }, 1500);
    }
  };
