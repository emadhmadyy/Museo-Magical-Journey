var express = require("express");
const router = express.Router();
const addInquiry = require("../controllers/inquiry.controllers");

router.post("/", addInquiry);

module.exports = router;
