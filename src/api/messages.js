import {
  getDatabase,
  ref,
  child,
  get,
  push,
  set,
  remove,
} from "firebase/database";

export const getMessageApi = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, "messages"));
};

export const addMessageApi = (roomId, message) => {
  const db = getDatabase();
  return set(ref(db, `messages/${roomId}/${message.id}`), {
    id: message.id,
    date: message.dateString,
    author: message.author,
    message: message.message,
  });
};

export const deleteMessageRoomApi = (roomId) => {
  const db = getDatabase();
  const messages = ref(db, `messages/${roomId}`);
  return remove(messages);
};
