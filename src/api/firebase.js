import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1-mZzvTckvuB8oF3iSivrPx_6JHcF7BE",
  authDomain: "chat-7a8a3.firebaseapp.com",
  databaseURL:
    "https://chat-7a8a3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-7a8a3",
  storageBucket: "chat-7a8a3.appspot.com",
  messagingSenderId: "32315127882",
  appId: "1:32315127882:web:acfeeb21fe6ad1e6020eb3",
  measurementId: "G-6EYGMWCSNF",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
export const auth = getAuth(firebaseApp);
