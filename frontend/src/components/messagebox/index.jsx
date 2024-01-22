import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const MessageBox = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { name: "emad", message: "Hello", id: 1 },
    { name: "khaled", message: "Hello everyone", id: 2 },
  ]);
  const [message, setMessage] = useState({
    name: "",
    message: "",
  });

  const sendMessage = () => {
    socket.emit("newMessage", message);
  };
  const handleInputChange = (e) => {
    const new_message = e.target.value;
    setMessage((prevData) => ({
      ...prevData,
      message: new_message,
    }));
  };
  const handleNewMessage = (data) => {
    const id = messages.length + 1;
    const m = { ...data, id: id };
    const new_message = [...messages, m];
    setMessages(new_message);
  };
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
  const socket = io("http://localhost:4000");
  useEffect(() => {
    addUserInfo();
  }, []);
  socket.on("newMessage", handleNewMessage);
  return (
    <>
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
      <div>
        <textarea onChange={handleInputChange}></textarea>
        <button onClick={sendMessage}>send message</button>
      </div>
    </>
  );
};

export default MessageBox;
