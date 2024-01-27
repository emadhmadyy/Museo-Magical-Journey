var express = require("express");
const router = express.Router();
const {
  addInquiry,
  getAllInquires,
} = require("../controllers/inquiry.controllers");

router.post("/", addInquiry);
router.get("/all", getAllInquires);

module.exports = router;
