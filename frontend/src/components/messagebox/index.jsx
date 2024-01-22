import "./index.css";
import { useState } from "react";

const MessageBox = () => {
  const [messages, setMessages] = useState([
    { name: "emad", message: "Hello", id: 1 },
    { name: "khaled", message: "Hello everyone", id: 2 },
  ]);
  return (
    <div className="messages-container">
      {messages.map((message) => {
        return (
          <div key={message.id} className="message-box">
            <p className="sender-name">{message.name}</p>
            <p className="message">{message.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageBox;
