import { useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { conversationsSelector } from "../store/conversations";

import MessageList from "../MessageList/messageList";
import Conversations from "../Conversations/conversations";

const ChatPage = () => {
  const rooms = useSelector(conversationsSelector);
  const navigate = useNavigate();
  let { roomId } = useParams();

  useEffect(() => {
    const isRoom = rooms.includes(roomId);
    !isRoom && navigate("/chat");
  }, [roomId]);

  return (
    <div className="app-content">
      <Conversations />
      <Routes>
        <Route path="/chat/*" element={<MessageList />} />
      </Routes>
    </div>
  );
};

export default ChatPage;
