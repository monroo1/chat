import { nanoid } from "nanoid";
import { getDatabase, ref, child, get, push } from "firebase/database";

export const getMessageApi = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, "messages"));
};

export const addMessageApi = (roomId, message) => {
  const dbRef = ref(getDatabase());
  return push(child(dbRef, `messages/${roomId}`), {
    id: nanoid(),
    date: message.dateString,
    author: message.author,
    message: message.message,
  });
};
