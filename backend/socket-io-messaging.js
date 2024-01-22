const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
const { instrument } = require("@socket.io/admin-ui");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://admin.socket.io"], // front-end URL
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`A user connected with id: ${socket.id}`);
  socket.on("joinRoom", (id) => {
    socket.join(id);
  });
  // data will include user name and message
  socket.on("newMessage", (id, data) => {
    io.to(id).emit("newMessage", data);
  });

  // Listen for disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

instrument(io, {
  auth: {
    type: "basic",
    username: "admin",
    password: "$2b$10$Z7kFtEfA/nT/B9AQmD8EC.Isks3JQpaOmHUCyKULLChWGFeyCza.O",
  },
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
