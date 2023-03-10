import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { conversationsSelector } from "../../store/conversations";
import {
  deleteConversationFB,
  addConversationsFB,
} from "../../store/conversations";
import { messagesSelector } from "../../store/messages";

import {
  Divider,
  Paper,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import LoupeIcon from "@mui/icons-material/Loupe";
import DeleteIcon from "@mui/icons-material/Delete";

const ConversationItem = ({ element }) => {
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelector(element));
  const lastMessage = messages.at(-1);

  return (
    <div style={{ position: "relative" }} onClick={(e) => e.stopPropagation()}>
      <div
        style={{
          position: "absolute",
          right: 12 + "px",
          bottom: 0,
          zIndex: 999,
        }}
        onClick={(e) => dispatch(deleteConversationFB(element))}
      >
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
      <Link to={"chat/" + element}>
        <ListItem
          button
          divider
          secondaryAction={
            <>
              {!!lastMessage && (
                <span
                  style={{
                    fontSize: 12 + "px",
                    fontWeight: 600,
                    position: "absolute",
                    top: -20 + "px",
                    right: -7 + "px",
                  }}
                >
                  {format(new Date(lastMessage.date), "k:mm")}
                </span>
              )}
            </>
          }
        >
          <ListItemText
            primary={element}
            secondary={
              !!lastMessage &&
              lastMessage.author + ": " + lastMessage.message.slice(0, 20)
            }
          />
        </ListItem>
      </Link>
    </div>
  );
};

const Conversations = () => {
  const dispatch = useDispatch();
  const conversations = useSelector(conversationsSelector);

  const handleCreateConversation = () => {
    const name = prompt("?????????????? ???????????????? ????????:");
    if (!!name) {
      const isValidName = conversations.find((el) => el.name === name);

      !isValidName
        ? dispatch(addConversationsFB(name))
        : alert("?????????? ?????????????? ?????? ????????????????????!");
    } else {
      alert("???????????????????? ???????????????? ??????????????!");
    }
  };

  return (
    <Paper sx={{ width: 320 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 100 + "%",
        }}
      >
        <div className="chats-list">
          <List component="nav" aria-label="mailbox folders">
            {conversations.map((element, id) => (
              <ConversationItem key={id} element={element.name} />
            ))}
          </List>
        </div>
        <div>
          <Divider />
          <MenuItem sx={{ height: 74 }} onClick={handleCreateConversation}>
            <ListItemIcon>
              <LoupeIcon />
            </ListItemIcon>
            <ListItemText>?????????????? ??????</ListItemText>
          </MenuItem>
        </div>
      </div>
    </Paper>
  );
};

export default Conversations;
