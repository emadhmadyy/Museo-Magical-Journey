const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
  },
  last_name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 20,
  },
  phone_number: {
    type: String,
    required: true,
    trim: true,
    minlength: 11,
    maxlength: 13,
  },
  inquiry_text: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 75,
  },
  status: {
    type: String,
    default: "Pending",
    enum: ["Pending", "Resolved"],
  },
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
