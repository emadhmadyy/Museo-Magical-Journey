const Character = require("../models/character.model");

const addCharacter = async (req, res) => {
  const { model_url } = req.body;
  const character = new Character({
    model_url,
  });
  await character.save();
  return res.status(200).send({ message: "Character added successfully" });
};

module.exports = { addCharacter };
