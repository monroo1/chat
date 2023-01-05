import { format } from "date-fns";
import "./message.scss";

const Message = ({ message }) => {
  const classList =
    message.author !== "add" ? "message message-from" : "message";

  return (
    <div className={classList}>
      <div className="message-top">
        <span className="message-top__author">{message.author}</span>
        <span className="message-top__date">
          {format(message.date, "k:mm")}
        </span>
      </div>
      <div className="message-text">
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default Message;
