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

// **********************
// Shape of data
// const x = new Museum({
//   artworks: [
//     {
//       artwork_name: "x",
//       model_file_url: "xxxxx",
//       textures: [{ texture_name: "xxxxx", texture_file_url: "xxxxxxx" }],
//     },
//   ],
//   rooms: [
//     {
//       users: [{ user: "user_id", character: "character_id", isHost: true }],
//       status: "Open",
//     },
//   ],
// });
