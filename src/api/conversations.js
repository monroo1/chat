import { getDatabase, ref, child, get, remove, set } from "firebase/database";

export const getConversationsApi = () => {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, "conversations"));
};

export const addConversationApi = (roomId) => {
  const db = getDatabase();
  return set(ref(db, `conversations/${roomId}`), {
    name: roomId,
    inputValue: "",
  });
};

export const deleteConversationApi = (roomId) => {
  const db = getDatabase();
  const conversation = ref(db, `conversations/${roomId}`);
  return remove(conversation);
};

// export const editInputValueApi = (value, roomId) => {
//   const db = getDatabase();

//   const postData = {
//     name: roomId,
//     inputValue: value,
//   };

//   const updates = {};
//   updates[`/conversations/${roomId}`] = postData;
//   return update(ref(db), updates);
// };
