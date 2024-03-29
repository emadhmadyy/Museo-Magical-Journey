const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "all fields are required" });
  }

  // check if user is available in DB
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send({ message: "Invalid email/password" });

  // check if password is correct
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword)
    return res.status(400).send({ message: "Invalid email/password" });
  try {
    const { password: hashedPassword, _id, ...userDetails } = user.toJSON();

    // generate JWT token
    const token = jwt.sign(
      {
        ...userDetails,
      },
      process.env.SECRET_KEY,
      { expiresIn: "2 days" }
    );

    return res.status(200).send({
      message: "Loggedin Successfully",
      user: userDetails,
      token,
    });
  } catch (e) {
    res.status(500).send({ message: "Internal Server Error", error: e });
  }
};

const register = async (req, res) => {
  const { email, password, first_name, last_name } = req.body;
  if (!email || !password || !first_name || !last_name) {
    return res.status(400).send({ message: "all fields are required" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .send({ message: "User with this email already exists" });
  }
  try {
    const user = new User({
      email,
      password,
      first_name,
      last_name,
      user_type: 1,
    });

    await user.save();

    return res.status(200).send({ message: "Registered Successfully" });
  } catch (e) {
    return res.status(500).send({ message: "Internal server error", error: e });
  }
};

module.exports = {
  login,
  register,
};
