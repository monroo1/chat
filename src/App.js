import { Routes, Route } from "react-router-dom";

import Header from "./Header/header";
import { ChatPage, Profile } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/*" || "chat/*"} element={<ChatPage />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
