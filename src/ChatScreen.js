import { React, useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
function ChatScreen() {
  const [input, setInput] = useState([""]);
  const [messages, setMessages] = useState([
    {
      name: "Sarah",
      image:
        "https://images.outlookindia.com/public/uploads/articles/2019/11/23/Narendra_Modi_571_855.jpg",
      message: "whats up!",
    },
    {
      name: "Sarah",
      image:
        "https://images.outlookindia.com/public/uploads/articles/2019/11/23/Narendra_Modi_571_855.jpg",
      message: "hows it going!",
    },
    {
      message: "Hey Sarah!",
    },
  ]);
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timespan">You Matched With Sarah 18/10/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen_input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen_inputField"
            placeholder="Type a message"
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            classNme="chatScreen_inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
