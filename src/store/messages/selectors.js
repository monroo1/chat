export const messagesSelector = (roomId) => (state) =>
  state.messages.messages[roomId] ?? [];
