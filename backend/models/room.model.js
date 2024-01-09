const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  users: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      character: { type: mongoose.Schema.Types.ObjectId, ref: "Character" },
      isHost: { type: Boolean },
    },
  ],
  status: { type: String, default: "Open", enum: ["Open", "Closed"] },
});

const validateUsersArrayLength = function (users) {
  return users.length <= 10;
};

roomSchema.path("users").validate(validateUsersArrayLength, "Room is full");

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
