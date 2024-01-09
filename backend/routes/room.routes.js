const express = require("express");
const router = express.Router();
const {
  createRoom,
  joinRoom,
  leaveRoom,
} = require("../controllers/room.controllers");
router.post("/create", createRoom);
router.post("/join", joinRoom);
router.post("/leave", leaveRoom);

module.exports = router;
