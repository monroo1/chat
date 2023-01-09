import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  getConversationsApi,
  addConversationApi,
  deleteConversationApi,
  editInputValueApi,
} from "../api/conversations";
import {
  getMessageApi,
  addMessageApi,
  deleteMessageRoomApi,
  deleteMessageApi,
  editMessageApi,
} from "../api/messages";
import { logger } from "./middlewares";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile"],
};

const rootReducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
});

const presistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  presistedReducer,
  compose(
    applyMiddleware(
      logger,
      thunk.withExtraArgument({
        getConversationsApi,
        addConversationApi,
        editInputValueApi,
        getMessageApi,
        addMessageApi,
        deleteConversationApi,
        deleteMessageRoomApi,
        deleteMessageApi,
        editMessageApi,
      })
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
