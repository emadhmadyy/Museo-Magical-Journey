import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const MessageBox = () => {
  const navigate = useNavigate();
  const socket = io.connect("http://localhost:4000");
  const [messages, setMessages] = useState([
    { name: "emad", message: "Hello", id: 1 },
    { name: "khaled", message: "Hello everyone", id: 2 },
  ]);
  const [message, setMessage] = useState({
    name: "",
    message: "",
  });
  const handleNewMessage = () => {};
  const addUserInfo = () => {
    if (localStorage.getItem("user")) {
      const user_info = JSON.parse(localStorage.getItem("user"));
      const user_name = user_info.first_name + " " + user_info.last_name;
      setMessage((prevData) => ({
        ...prevData,
        name: user_name,
      }));
    } else {
      localStorage.clear();
      navigate("/");
    }
  };
  useEffect(() => {
    addUserInfo();
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
      <p>{message.name}</p>
    </div>
  );
};

export default MessageBox;
