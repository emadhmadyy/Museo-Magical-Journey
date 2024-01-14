const express = require("express");
const app = express();
const connectToMongoDb = require("./configs/mongoDb.configs.js");
require("dotenv").config();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200); // Respond to preflight requests with HTTP 200 OK
  } else {
    next();
  }
});

const authMiddleware = require("./middlewares/auth.middleware.js");
const userRoutes = require("./routes/user.routes.js");
app.use("/user", userRoutes);

const roomRoutes = require("./routes/room.routes.js");
app.use("/room", authMiddleware, roomRoutes);

const inquiryRoutes = require("./routes/inquiry.routes.js");
app.use("/inquiry", inquiryRoutes);
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});

connectToMongoDb();
