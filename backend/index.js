var express = require("express");
var app = express();
app.use(express.json());
require("dotenv").config();
const path = require("path");
const { generateFileUrls } = require("./middlewares/upload.middleware.js");

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
const artworkRoutes = require("./routes/artwork.routes.js");
app.use("/upload", artworkRoutes);

// 'profile' and 'background' should match the name attribute in your HTML form for the file inputs
// req.files contains an object with keys 'profile' and 'background', each holding an array of uploaded files
// console.log(req.files);
// const profileFile = req.files["profile"][0];
// const backgroundFile1 = req.files["background"][0];
// const backgroundFile2 = req.files["background"][1];

// console.log("Profile File:", profileFile);
// console.log("Background File:", backgroundFile1, backgroundFile2);

const userRoutes = require("./routes/user.routes.js");
app.use("/user", userRoutes);

const inquiryRoutes = require("./routes/inquiry.routes.js");
app.use("/inquiry", inquiryRoutes);

const museumRoutes = require("./routes/museum.routes.js");
const authMiddleware = require("./middlewares/auth.middleware.js");
app.use("/museum", authMiddleware, museumRoutes);

app.get("/", function (req, res) {
  res.send("this is the main route");
});

app.listen(8000, () => console.log("listening on port " + 8000));

connectToMongoDb();
