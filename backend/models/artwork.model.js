const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema({
  artwork_name: {
    type: String,
    required: true,
  },
  model_file_url: {
    type: String,
    required: true,
  },
  textures: [
    {
      texture_name: { type: String, required: true },
      texture_file_url: { type: String, required: true },
    },
  ],
});

const Artwork = mongoose.model("Artwork", artworkSchema);

module.exports = Artwork;
