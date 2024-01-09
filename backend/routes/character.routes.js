const express = require("express");
const router = express.Router();
const { addCharacter } = require("../controllers/character.controllers");

router.post("/create", addCharacter);

module.exports = router;
