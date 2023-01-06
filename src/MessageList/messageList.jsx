import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  messagesSelector,
  sendMessageBot,
  editMessage,
  deleteMessage,
} from "../store/messages";
import { inputSelector, changeInputValue } from "../store/conversations";
import { useNavigate, useParams } from "react-router-dom";

import Message from "./Message/message";
import { TextField, Divider, Icon } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import "./messageList.scss";

const MessageList = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editStatus, setEditStatus] = useState(false);
  const [editMessageId, setEditMessageId] = useState(null);
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
    if (code === "Enter" && !editStatus) {
      handleSendMessages();
    }
    if (code === "Enter" && editStatus) {
      handleEditMessageSave();
    }
  };

  const handleEditMessage = (message) => {
    console.log(message);
    setEditStatus(true);
    dispatch(changeInputValue(message.message, roomId));
    setEditMessageId(message.id);
  };

  const handleEditMessageCancel = () => {
    setEditStatus(false);
    dispatch(changeInputValue("", roomId));
    setEditMessageId(null);
  };

  const handleEditMessageSave = () => {
    dispatch(editMessage(value, editMessageId, roomId));
    handleEditMessageCancel();
  };

  const handleDeleteMessage = (message) => {
    dispatch(deleteMessage(message.id, roomId));
  };

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        if (editStatus) {
          handleEditMessageCancel();
        } else {
          navigate("/chat");
        }
      }
    };
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate, editStatus]);

  return (
    roomId && (
      <div className="message-list">
        <div className="message-list__container" ref={ref}>
          {messages.map((el, index) => (
            <Message
              key={index}
              message={el}
              handleEditMessage={handleEditMessage}
              handleDeleteMessage={handleDeleteMessage}
            />
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
            {!editStatus ? (
              <Icon
                style={{ cursor: "pointer" }}
                color="primary"
                fontSize="large"
                children={<SendIcon />}
                onClick={handleSendMessages}
              />
            ) : (
              <div className="edit">
                <Icon
                  style={{ cursor: "pointer" }}
                  color="primary"
                  children={<CheckCircleOutlineIcon />}
                  onClick={handleEditMessageSave}
                />
                <div className="edit-cansel" onClick={handleEditMessageCancel}>
                  Отменить
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MessageList;
