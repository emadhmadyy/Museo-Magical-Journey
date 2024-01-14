const Room = require("../models/room.model");
const User = require("../models/user.model");
const Character = require("../models/character.model");
const { ObjectId } = require("mongoose").Types;

const createRoom = async (req, res) => {
  try {
    const room = new Room({
      users: [{ user: req.user._id, isHost: true }],
    });
    await room.save();
    return res
      .status(200)
      .send({ message: "room created successfully", room_id: room._id });
  } catch (e) {
    return res.status(500).send({ message: "Error", error: e });
  }
};

const joinRoom = async (req, res) => {
  const { room_id } = req.body;
  if (!room_id) {
    return res.status(400).send({ message: "room id is required" });
  }
  if (!ObjectId.isValid(room_id)) {
    return res.status(400).send({ message: "Room doesn't exist" });
  }
  try {
    const roomId = new ObjectId(room_id);
    const existingRoom = await Room.findByIdAndUpdate(roomId, {
      $push: {
        users: {
          user: req.user._id,
          character: characterId,
          isHost: false,
        },
      },
    });
    if (!existingRoom) {
      res.status(400).send({ message: "Room doesn't exist" });
    }
    res.status(200).send({ message: "User added to room successfully" });
  } catch (e) {
    res.status(500).send({ message: "Server error", error: e });
  }
};

const leaveRoom = async (req, res) => {
  const { room_id } = req.body;
  if (!room_id) {
    res.status(400).send({ message: "All fields are required" });
  }
  if (!ObjectId.isValid(room_id)) {
    return res.status(400).send({ message: "Room doesn't exist" });
  }
  try {
    const roomId = new ObjectId(room_id);
    const existingRoom = await Room.findByIdAndUpdate(roomId, {
      $$pull: { users: { user: req.user._id } },
    });
    if (!existingRoom) {
      res.status(400).send({ message: "Room doesn't exist" });
    }
    res.status(200).send({ message: "User removed successfully" });
  } catch (e) {
    res.status(500).send({ message: "Server error", error: e });
  }
};
module.exports = {
  createRoom,
  joinRoom,
  leaveRoom,
};
