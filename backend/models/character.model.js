const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  model_url: {
    type: String,
    required: true,
  },
  texture_url: {
    type: String,
    required: true,
  },
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
