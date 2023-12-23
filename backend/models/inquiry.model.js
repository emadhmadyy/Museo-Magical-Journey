const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  last_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 26,
  },
  phone_number: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  inquiry_text: {
    type: String,
    required: true,
    minlength: 10,
  },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
