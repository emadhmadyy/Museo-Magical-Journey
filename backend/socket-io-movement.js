const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
const { instrument } = require("@socket.io/admin-ui");

app.get("/", (req, res) => {
  res.send("server is running");
});
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://admin.socket.io"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const players = {};
io.on("connection", (socket) => {
  console.log(`A user connected with id: ${socket.id}`);

  // players[socket.id] = {
  //   position: [Math.random() * 10 - 5, 0, Math.random() * 10 - 5],
  //   rotation: [0, 0, 0],
  // };
  // io.emit("updateState", players);

  socket.on("joinRoom", (id) => {
    socket.join(id);
    if (!players[id]) {
      players[id] = {};
    }
    players[id][socket.id] = {
      position: [Math.random() * 10 - 5, 0, Math.random() * 10 - 5],
      rotation: [0, 0, 0],
    };
    console.log(players);
    io.to(id).emit("updateState", players[id]);
  });

  socket.on("keypress", (position) => {
    players[socket.id].position = position;
    io.emit("updateState", players);
  });

  // socket.on("mousemove", (v) => {
  //   // players[socket.id].rotation = rotation;
  //   let a = Math.asin(v.y);
  //   a = Math.cos(a);
  //   players[socket.id].rotation[0] = v.x / a;
  //   players[socket.id].rotation[1] = 0;
  //   players[socket.id].rotation[2] = v.z / a;
  //   io.emit("updateState", players);
  // });
  // socket.on("mousemove", (v) => {
  //   let a = Math.asin(v.y);
  //   a = Math.cos(a);
  //   players[socket.id].rotationX = v.x / a;
  //   players[socket.id].rotationY = 0;
  //   players[socket.id].rotationZ = v.z / a;
  //   io.emit("updateState", players);
  // });

  // Listen for disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
    delete players[socket.id];
    io.emit("updateState", players);
  });
});

instrument(io, {
  auth: {
    type: "basic",
    username: "admin",
    password: "$2b$10$Z7kFtEfA/nT/B9AQmD8EC.Isks3JQpaOmHUCyKULLChWGFeyCza.O",
  },
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
