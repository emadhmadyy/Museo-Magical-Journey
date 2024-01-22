const MessageBox = () => {
  const messages = [
    { name: "emad", message: "Hello", id: 1 },
    { name: "khaled", message: "Hello everyone", id: 2 },
  ];
  return (
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <p className="sender_name">{message.name}</p>
            <p className="message">{message.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageBox;
