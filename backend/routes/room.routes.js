const express = require("express");
const router = express.Router();
const {
  createRoom,
  joinRoom,
  leaveRoom,
  endRoom,
} = require("../controllers/room.controllers");
router.post("/create", createRoom);
router.post("/join", joinRoom);
router.post("/leave", leaveRoom);
router.post("/end", endRoom);

module.exports = router;
