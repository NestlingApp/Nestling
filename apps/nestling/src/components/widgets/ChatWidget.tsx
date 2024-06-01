import React, { useState } from "react";
import {
  Chip,
  ClickAwayListener,
  Grow,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  TextField,
} from "@mui/material";

import styles from "@Styles/App.module.css";

import { PencilSquareIcon, InboxIcon } from "@heroicons/react/24/outline";

const ChatWidget = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  const actions = [
    { icon: <InboxIcon className="w-6" />, name: "Chat Log" },
    { icon: <PencilSquareIcon className="w-6" />, name: "New Chat" },
  ];
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  return (
    <div className=" flex fixed bottom-10 right-10 items-end">
      <ClickAwayListener
        onClickAway={() => {
          console.log("click ", showChat);
          if (showChat) setShowChat(false);
        }}
      >
        <Grow style={{ transformOrigin: "bottom right" }} in={showChat}>
          <div
            style={{ height: "300px", width: "300px" }}
            className={`flex flex-col justify-end  items-end mr-3 ${styles.fade}`}
          >
            {messages
              .slice(0, 5)
              .reverse()
              .map((message, idx) => (
                <Chip
                  key={`id-${message}-${idx}`}
                  className="my-1 py-2 mr-4 bg-green-800 text-white w-auto h-auto"
                  label={message}
                  sx={{
                    ".MuiChip-label": {
                      display: "block",
                      whiteSpace: "normal",
                    },
                  }}
                />
              ))}

            <TextField
              label="Chat"
              fullWidth
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
              onKeyDown={(ev) => {
                console.log(`Pressed keyCode ${ev.key}`);
                if (ev.key === "Enter") {
                  messages.unshift(message);
                  setMessages(messages);
                  setMessage("");
                  ev.preventDefault();
                }
              }}
            />
          </div>
        </Grow>
      </ClickAwayListener>
      <SpeedDial
        icon={<SpeedDialIcon />}
        ariaLabel={""}
        onOpen={() => setShowChat(true)}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          console.log("here", showChat);
          setShowChat(!showChat);
          e.stopPropagation();
        }}
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
