const mongoose = require("mongoose");
const Artwork = require("./artwork.model");
const Room = require("./room.model");

const museumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artworks: [Artwork.schema],
  rooms: [Room.schema],
});

const Museum = mongoose.model("Museum", museumSchema);

module.exports = Museum;
