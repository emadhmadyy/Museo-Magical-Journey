const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 26,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
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
  user_type: {
    type: Number,
    required: true,
    maxlength: 1,
  },
  profile_url: {
    type: String,
  },
});

serschema.pre(
  "save",
  async function (next) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
