import "./index.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const MessageBox = () => {
  const socket = io.connect("http://localhost:4000");
  const [messages, setMessages] = useState([
    { name: "emad", message: "Hello", id: 1 },
    { name: "khaled", message: "Hello everyone", id: 2 },
  ]);
  const [message, setMessage] = useState({
    name: "",
    message: "",
  });
  const handleNewMessage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  };
  useEffect(() => {
    handleNewMessage();
  }, []);
  //   socket.on("newMessage",)
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
