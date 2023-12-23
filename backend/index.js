var express = require("express");
var app = express();
app.use(express.json());
require("dotenv").config();
const path = require("path");

const connectToMongoDb = require("./configs/mongoDb.configs.js");

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

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const userRoutes = require("./routes/user.routes.js");
app.use("/user", userRoutes);

const inquiryRoutes = require("./routes/inquiry.routes.js");
app.use("/inquiry", inquiryRoutes);

const authMiddleware = require("./middlewares/auth.middleware.js");

app.get("/", function (req, res) {
  res.send("this is the main route");
});

app.listen(8000, () => console.log("listening on port " + 8000));

connectToMongoDb();
