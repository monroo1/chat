import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messagesSelector, sendMessageBot } from "../store/messages";
import { inputSelector, changeInputValue } from "../store/conversations";
import { useNavigate, useParams } from "react-router-dom";

import Message from "./Message/message";
import { TextField, Divider, Icon } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import "./messageList.scss";

const MessageList = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { roomId } = useParams();
  const messages = useSelector(messagesSelector(roomId));
  const value = useSelector(inputSelector(roomId));

  const handleSendMessages = () => {
    dispatch(sendMessageBot({ author: "User", message: value }, roomId));

    ref.current.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handlePressEnter = ({ code }) => {
    if (code === "Enter") {
      handleSendMessages();
    }
  };

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);

  return (
    roomId && (
      <div className="message-list">
        <div className="message-list__container" ref={ref}>
          {messages.map((el, index) => (
            <Message key={index} message={el} />
          ))}
          <span></span>
        </div>
        <div>
          <Divider />
          <div className="message-list__form">
            <TextField
              fullWidth
              id="standard-basic"
              label="Введите сообщение"
              variant="standard"
              onKeyDown={handlePressEnter}
              value={value}
              onChange={(e) =>
                dispatch(changeInputValue(e.target.value, roomId))
              }
            />
            <Icon
              style={{ cursor: "pointer" }}
              color="primary"
              fontSize="large"
              children={<SendIcon />}
              onClick={handleSendMessages}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default MessageList;
