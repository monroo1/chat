import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/create-store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ChatPage, Profile } from "./pages";
import MessageList from "./MessageList/messageList";

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
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
