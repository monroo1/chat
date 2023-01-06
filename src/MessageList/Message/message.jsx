import { format } from "date-fns";
import { SvgIcon } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./message.scss";

const Message = ({ message, handleEditMessage, handleDeleteMessage }) => {
  const classList =
    message.author !== "User" ? "message message-from" : "message";

  return (
    <div className={classList}>
      <div className="message-top">
        <span className="message-top__author">{message.author}</span>
        <span className="message-top__date">
          {format(new Date(message.date), "k:mm")}
        </span>
      </div>
      <div className="message-text">
        <p>{message.message}</p>
        <div className="message-text__contoll">
          <SvgIcon
            sx={{ cursor: "pointer" }}
            onClick={() => handleDeleteMessage(message)}
          >
            <DeleteForeverIcon color="disabled" fontSize="small" />
          </SvgIcon>
          <div
            className="message-text__contoll-edit"
            onClick={() => handleEditMessage(message)}
          >
            edit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
