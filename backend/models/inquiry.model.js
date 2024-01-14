const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minlength: 1,
  },
  last_name: {
    type: String,
    required: true,
    minlength: 1,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 26,
  },
  phone_number: {
    type: String,
    required: true,
    trim: true,
    minlength: 11,
  },
  inquiry_text: {
    type: String,
    required: true,
    minlength: 10,
  },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
