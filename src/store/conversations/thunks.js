import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  postConversationsStart,
  postConversationsSuccess,
  postConversationsError,
  deleteConversationsStart,
  deleteConversationsSuccess,
  deleteConversationsError,
  patchConversationsStart,
  patchConversationsError,
  patchConversationsSuccess,
} from "./actions";

export const getConversationsFB = () => async (dispatch, _, api) => {
  const conversations = [];
  try {
    dispatch(getConversationsStart());

    const snapshot = await api.getConversationsApi();

    snapshot.forEach((element) => {
      conversations.push(element.val());
    });

    dispatch(getConversationsSuccess(conversations));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};

export const addConversationsFB =
  (roomId) => async (dispatch, getState, api) => {
    const priority = getState().conversations.conversations.length + 1;
    try {
      dispatch(postConversationsStart());

      await api.addConversationApi(roomId, priority);

      dispatch(postConversationsSuccess(roomId));
    } catch (e) {
      dispatch(postConversationsError(e));
    }
  };

export const deleteConversationFB = (roomId) => async (dispatch, _, api) => {
  try {
    dispatch(deleteConversationsStart());

    await api.deleteConversationApi(roomId);

    dispatch(deleteConversationsSuccess(roomId));
    api.deleteMessageRoomApi(roomId);
  } catch (e) {
    dispatch(deleteConversationsError(e));
  }
};

export const editConversationFB =
  (roomId, val) => async (dispatch, getState, api) => {
    let value;

    if (val === "") {
      value = val;
    } else {
      value =
        getState().conversations.conversations.filter(
          (el) => el.name === roomId
        )[0].inputValue ?? "";
    }

    try {
      dispatch(patchConversationsStart());

      await api.editInputValueApi(value, roomId);

      dispatch(patchConversationsSuccess(value, roomId));
    } catch (e) {
      dispatch(patchConversationsError(e));
    }
  };
