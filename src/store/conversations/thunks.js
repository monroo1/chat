import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  postConversationsStart,
  postConversationsSuccess,
  postConversationsError,
  createConversation,
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

export const addConversationsFB = (roomId) => async (dispatch, _, api) => {
  try {
    dispatch(postConversationsStart());

    await api.addConversationApi(roomId);

    dispatch(postConversationsSuccess());
    dispatch(createConversation(roomId));
  } catch (e) {
    dispatch(postConversationsError(e));
  }
};
