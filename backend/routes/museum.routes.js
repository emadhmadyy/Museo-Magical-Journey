var express = require("express");
const router = express.Router();
const { createMuseum } = require("../controllers/museum.controllers");
router.post("/", createMuseum);

module.exports = router;
