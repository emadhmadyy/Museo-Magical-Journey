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
    return res.status(500).send({ message: "Internal Server error", error: e });
  }
};

const joinRoom = async (req, res) => {
  const { room_id } = req.body;
  if (!room_id) {
    return res.status(400).send({ message: "Tour id is required" });
  }
  if (!ObjectId.isValid(room_id)) {
    return res.status(400).send({ message: "Tour doesn't exist" });
  }
  try {
    const roomId = new ObjectId(room_id);
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(400).send({ message: "Tour doesn't exist" });
    } else if (room.status == "Closed") {
      return res.status(400).send({ message: "Tour has ended" });
    } else if (room.status == "Full") {
      return res.status(400).send({ message: "Tour is full" });
    }
    await Room.findByIdAndUpdate(roomId, {
      $push: {
        users: {
          user: req.user._id,
          isHost: false,
        },
      },
    });
    const updatedRoom = await Room.findById(roomId);
    const usersArrayLength = updatedRoom.users.length;
    if (usersArrayLength === 10) {
      await Room.findByIdAndUpdate(roomId, { status: "Full" });
    }
    return res
      .status(200)
      .send({ message: "User added to room successfully", room_id });
  } catch (e) {
    return res.status(500).send({ message: "Server error", error: e });
  }
};

const leaveRoom = async (req, res) => {
  const { room_id } = req.body;
  if (!room_id) {
    return res.status(400).send({ message: "All fields are required" });
  }
  if (!ObjectId.isValid(room_id)) {
    return res.status(400).send({ message: "Room doesn't exist" });
  }
  try {
    const roomId = new ObjectId(room_id);
    const existingRoom = await Room.findByIdAndUpdate(roomId, {
      $pull: { users: { user: req.user._id } },
    });
    if (!existingRoom) {
      return res.status(400).send({ message: "Room doesn't exist" });
    }
    return res.status(200).send({ message: "User removed successfully" });
  } catch (e) {
    return res.status(500).send({ message: "Server error", error: e });
  }
};

const endRoom = async (req, res) => {
  const { room_id } = req.body;
  if (!room_id) {
    return res.status(400).send({ message: "All fields are required" });
  }
  if (!ObjectId.isValid(room_id)) {
    return res.status(400).send({ message: "Room doesn't exist" });
  }
  try {
    const roomId = new ObjectId(room_id);
    const existingRoom = await Room.findByIdAndUpdate(roomId, {
      status: "Closed",
    });
    if (!existingRoom) {
      return res.status(400).send({ message: "Room doesn't exist" });
    }
    return res.status(200).send({ message: "Room has ended" });
  } catch (e) {
    return res.status(400).send({ message: "Server error", error: e });
  }
};
module.exports = {
  createRoom,
  joinRoom,
  leaveRoom,
  endRoom,
};
