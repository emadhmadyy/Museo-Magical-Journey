const Room = require("../models/room.model");
const User = require("../models/user.model");
const Character = require("../models/character.model");
const { ObjectId } = require("mongoose").Types;

const createRoom = async (req, res) => {
  const { character_id } = req.body;
  if (!character_id) {
    return res.status(400).send({
      message: "All fields are required",
    });
  }
  if (!ObjectId.isValid(character_id)) {
    return res.status(400).send({ message: "Character doesn't exist" });
  }
  try {
    const char_id = new ObjectId(character_id);
    const existingCharacter = await Character.findById(char_id);
    if (!existingCharacter) {
      return res.status(400).send({ message: "Character doesn't exist" });
    }
    const room = new Room({
      users: [{ user: req.user._id, character: character_id, isHost: true }],
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
  const { room_id, character_id } = req.body;
  if (!room_id || !character_id) {
    res.status(400).send({ message: "All fields are required" });
  }
  if (!ObjectId.isValid(room_id) || !ObjectId.isValid(character_id)) {
    return res.status(400).send({ message: "Room or Character doesn't exist" });
  }
  try {
    const roomId = new ObjectId(room_id);
    const characterId = new ObjectId(character_id);
    const existingCharacter = Character.findById(characterId);
    if (!existingCharacter) {
      res.status(400).send({ message: "Character doesn't exist" });
    }
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
    res.status(500).send({ message: "Error", error: e });
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
  //$pull: { users: { user: userId } }
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
    res.status(500).send({ message: "Error", error: e });
  }
};
module.exports = {
  createRoom,
  joinRoom,
  leaveRoom,
};