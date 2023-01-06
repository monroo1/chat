export const conversationsSelector = (state) =>
  state.conversations.conversations;

export const inputSelector = (roomId) => (state) =>
  state.conversations.conversations.find(
    (conversation) => conversation.name === roomId
  )?.inputValue ?? "";
