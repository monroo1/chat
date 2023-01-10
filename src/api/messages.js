import {
  getDatabase,
  ref,
  child,
  get,
  set,
  remove,
  update,
  setPriority,
} from "firebase/database";

export const getMessageApi = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, "messages"));
};

export const addMessageApi = (roomId, message) => {
  const db = getDatabase();

  set(ref(db, `messages/${roomId}/${message.id}`), {
    id: message.id,
    date: message.dateString,
    author: message.author,
    message: message.message,
  });

  const messageRef = ref(db, `messages/${roomId}/${message.id}`);
  setPriority(messageRef, message.length);
};

export const deleteMessageRoomApi = (roomId) => {
  const db = getDatabase();
  const messages = ref(db, `messages/${roomId}`);
  return remove(messages);
};

export const deleteMessageApi = (id, roomId) => {
  const db = getDatabase();

  const message = ref(db, `messages/${roomId}/${id}`);
  return remove(message);
};

export const editMessageApi = (value, message, roomId) => {
  const db = getDatabase();

  const postData = {
    ...message,
    message: value,
    isEdit: true,
  };

  const updates = {};
  updates[`/messages/${roomId}/${message.id}`] = postData;

  return update(ref(db), updates);
};
