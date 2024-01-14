const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://admin.socket.io"], // front-end URL
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const cubes = {}; // Store user cubes

io.on("connection", (socket) => {
  console.log(`A user connected with id: ${socket.id}`);

  // Create a cube for the new user
  cubes[socket.id] = {
    x: Math.random() * 10 - 5,
    z: Math.random() * 10 - 5,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
  };
  // Broadcast to all users
  io.emit("updateState", cubes);

  socket.on("keydown", (position) => {
    cubes[socket.id].x = position.x;
    cubes[socket.id].z = position.z;
    io.emit("updateState", cubes);
  });

  socket.on("mousemove", (v) => {
    let a = Math.asin(v.y);
    a = Math.cos(a);
    cubes[socket.id].rotationX = v.x / a;
    cubes[socket.id].rotationY = 0;
    cubes[socket.id].rotationZ = v.z / a;
    io.emit("updateState", cubes);
  });
  
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
