import { nanoid } from "nanoid";
import { getDatabase, ref, child, get, push } from "firebase/database";

export const getConversationsApi = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, "conversations"));
};

export const addConversationApi = (roomId) => {
  const dbRef = ref(getDatabase());
  return push(child(dbRef, "conversations"), { name: roomId, inputValue: "" });
};
