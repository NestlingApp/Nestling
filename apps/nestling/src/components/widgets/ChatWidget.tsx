import React, { KeyboardEvent, MouseEvent, useState } from "react";
import {
  Chip,
  ClickAwayListener,
  Grow,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TextField,
} from "@mui/material";
import {
  PencilSquareIcon,
  InboxIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import styles from "@Styles/App.module.css";

const ChatWidget = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  const actions = [
    { icon: <InboxIcon className="w-6" />, name: "Chat Log" },
    { icon: <PencilSquareIcon className="w-6" />, name: "New Chat" },
  ];

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && message !== "") {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage("");
      event.preventDefault();
    }
  };

  const toggleShowChat = (event: MouseEvent<HTMLDivElement>) => {
    setShowChat((prevShowChat) => !prevShowChat);
    event.stopPropagation();
  };

  return (
    <div className="flex fixed bottom-10 right-10 items-end">
      <ClickAwayListener onClickAway={() => setShowChat(false)}>
        <Grow style={{ transformOrigin: "bottom right" }} in={showChat}>
          <div
            className={`flex flex-col justify-end items-end mr-3 ${styles.fade}`}
            style={{ height: "300px", width: "300px" }}
          >
            {messages.map((message, idx) => (
              <Chip
                key={`id-${message}-${idx}`}
                label={message}
                color="primary"
                className="my-1 py-2 mr-4 text-white w-auto h-auto"
                sx={{
                  ".MuiChip-label": { whiteSpace: "normal", display: "block" },
                }}
              />
            ))}
            <TextField
              variant="outlined"
              className="mt-2 bg-white"
              label="Chat"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </Grow>
      </ClickAwayListener>
      <SpeedDial
        color="primary"
        icon={<SparklesIcon className="w-6" />}
        ariaLabel="Chat options"
        onOpen={() => setShowChat(true)}
        onClick={toggleShowChat}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default ChatWidget;
