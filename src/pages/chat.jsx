import { useEffect, useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { conversationsSelector } from "../store/conversations";

import { getConversationsFB } from "../store/conversations";
import { getMessagesFB } from "../store/messages";

import MessageList from "../components/MessageList/messageList";
import Conversations from "../components/Conversations/conversations";

export const ChatPage = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(conversationsSelector);
  const navigate = useNavigate();
  let { roomId } = useParams();
  const [isRoom, setIsRoom] = useState(rooms.find((el) => el.name === roomId));

  useEffect(() => {
    setIsRoom(rooms.find((el) => el.name === roomId));
    !rooms.find((el) => el.name === roomId) && navigate("/chat");
  }, [roomId, rooms, navigate]);

  useEffect(() => {
    dispatch(getConversationsFB());
    dispatch(getMessagesFB());
  }, [dispatch]);

  return (
    <div className="app-content">
      <Conversations />
      {!!isRoom ? (
        <Routes>
          <Route path="/chat/*" element={<MessageList />} />
        </Routes>
      ) : (
        <></>
      )}
    </div>
  );
};
