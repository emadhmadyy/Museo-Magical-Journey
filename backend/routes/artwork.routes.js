var express = require("express");
const router = express.Router();
const { addArtwork } = require("../controllers/artwork.controllers");
const upload = require("../middlewares/upload.middleware");

router.post(
  "/add",
  upload.fields([
    { name: "model", maxCount: 1 },
    { name: "texture", maxCount: 2 },
  ]),
  addArtwork
);

module.exports = router;
