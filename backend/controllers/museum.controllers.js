const Museum = require("../models/museum.model");

const createMuseum = async (req, res) => {
  if (req.user.user_type == 0) {
    try {
      const museum = new Museum({
        name: req.body.name,
      });
      await museum.save();
      return res
        .status(200)
        .send({ message: "Museum is created successfully" });
    } catch (e) {
      return res.status(500).send({ error: e });
    }
  } else {
    res.status(403).send({ message: "Forbidden" });
  }
};

module.exports = { createMuseum };
