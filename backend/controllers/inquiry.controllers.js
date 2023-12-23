const Inquiry = require("../models/inquiry.model");

const addInquiry = async (req, res) => {
  const { email, first_name, last_name, phone_number, inquiry_text } = req.body;
  if (!email || !first_name || !last_name || !phone_number || !inquiry_text) {
    res.status(400).send({ message: "All fields are required" });
  }
  try {
    const inquiry = new Inquiry({
      first_name,
      last_name,
      email,
      phone_number,
      inquiry_text,
    });
    await inquiry.save();
    res.status(200).send({ message: "Inquiry added successfully" });
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

module.exports = addInquiry;
