/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const MessageBox = () => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [messages, setMessages] = useState([
    { name: "emad", message: "Hello", id: 1 },
    { name: "khaled", message: "Hello everyone", id: 2 },
  ]);
  const [message, setMessage] = useState({
    name: "",
    message: "",
  });

  const sendMessage = () => {
    socket.emit("newMessage", roomId, message);
    setMessage((prevData) => ({
      ...prevData,
      message: "",
    }));
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
  useEffect(() => {
    const newsocket = io.connect("http://localhost:4000");
    const room_id = localStorage.getItem("room_id");
    setRoomId(room_id);
    newsocket.on("newMessage", handleNewMessage);
    newsocket.emit("joinRoom", room_id);
    setSocket(newsocket);
    return () => socket.disconnect();
  }, []);
  useEffect(() => {
    addUserInfo();
  }, []);

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
      <div className="flex send-message">
        <textarea
          onChange={handleInputChange}
          value={message.message}
        ></textarea>
        <button onClick={sendMessage}>send message</button>
      </div>
    </>
  );
};

export default MessageBox;
