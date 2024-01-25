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
    io.to(id).emit("updateState", players[id]);
  });

  socket.on("keypress", (id, pos) => {
    players[id][socket.id].position = pos;
    io.to(id).emit("updateState", players[id]);
  });

  socket.on("mousemove", (id, v) => {
    let a = Math.asin(v.y);
    a = Math.cos(a);
    players[id][socket.id].rotation[0] = v.x / a;
    players[id][socket.id].rotation[1] = 0;
    players[id][socket.id].rotation[2] = v.z / a;
    io.to(id).emit("updateState", players[id]);
  });

  // Listen for disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
    for (const roomId in players) {
      if (players[roomId][socket.id]) {
        delete players[roomId][socket.id];
        io.to(roomId).emit("updateState", players[roomId]);
        break;
      }
    }
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
