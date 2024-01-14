//create a mock id
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  users: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      isHost: { type: Boolean },
    },
  ],
  status: { type: String, default: "Open", enum: ["Open", "Closed", "Full"] },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
