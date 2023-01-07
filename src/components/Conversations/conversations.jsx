import { Link } from "react-router-dom";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { conversationsSelector } from "../../store/conversations";
import {
  createConversation,
  deleteConversation,
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
    <Link to={"chat/" + element}>
      <ListItem
        button
        divider
        secondaryAction={
          <>
            {!!lastMessage && (
              <span style={{ fontSize: 12 + "px", fontWeight: 600 }}>
                {format(new Date(lastMessage.date), "k:mm")}
              </span>
            )}
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteConversation(element))}
            >
              <DeleteIcon />
            </IconButton>
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
  );
};

const Conversations = () => {
  const dispatch = useDispatch();
  const conversations = useSelector(conversationsSelector);

  const handleCreateConversation = () => {
    const name = prompt("Введите название чата:");
    if (!!name) {
      const isValidName = conversations.find((el) => el.name === name);

      !isValidName
        ? dispatch(addConversationsFB(name))
        : alert("Такая комната уже существует!");
    } else {
      alert("Невалидное название команты!");
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
            <ListItemText>Создать чат</ListItemText>
          </MenuItem>
        </div>
      </div>
    </Paper>
  );
};

export default Conversations;
