const CONTECT = require("../model/contect-models");
const contectForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;
    await CONTECT.create({ username, email, message });
    res.status(201).json({ message: "message has been sent" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { contectForm };
