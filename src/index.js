import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/create-store";
import { PersistGate } from "redux-persist/integration/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { persistor } from "./store/create-store";

import App from "./App";
import { ChatPage, Profile } from "./pages";
import MessageList from "./components/MessageList/messageList";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
    children: [
      {
        path: "chat",
        element: <ChatPage />,
        children: [{ path: ":roomId", element: <MessageList /> }],
      },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
