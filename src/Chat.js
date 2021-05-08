import React from "react";
import {Link }from 'react-router-dom'
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";
function Chat({ name, message, profilePic, times }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" src={profilePic} />
        <div className="chat_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat_times">{times}</p>
      </div>
    </Link>
  );
}

export default Chat;
