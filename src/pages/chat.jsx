import { useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { conversationsSelector } from "../store/conversations";
import { getConversationsFB } from "../store/conversations";

import MessageList from "../components/MessageList/messageList";
import Conversations from "../components/Conversations/conversations";

export const ChatPage = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(conversationsSelector);
  const navigate = useNavigate();
  let { roomId } = useParams();

  useEffect(() => {
    const isRoom = rooms.find((el) => el.name === roomId);
    !isRoom && navigate("/chat");
  }, [roomId]);

  useEffect(() => {
    dispatch(getConversationsFB());
  }, []);

  return (
    <div className="app-content">
      <Conversations />
      <Routes>
        <Route path="/chat/*" element={<MessageList />} />
      </Routes>
    </div>
  );
};
