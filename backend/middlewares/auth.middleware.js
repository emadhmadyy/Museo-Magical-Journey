const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(403).send({ message: "Forbidden" });
    } else {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findOne({ email: decoded.email }).select(
        "-password"
      );
      req.user = user;
      next();
    }
  } catch (e) {
    res.status(403).send({ message: "Forbidden" });
  }
};

module.exports = authMiddleware;
