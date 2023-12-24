const checkUserType = (req, res, next) => {
  if (req.user_type === 0) {
    next();
  } else {
    res.status(403).json({ error: "Unauthorized" });
  }
};

module.exports = checkUserType;
