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
