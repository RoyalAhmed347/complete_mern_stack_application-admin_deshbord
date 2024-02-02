const USER = require("../Model/auth-model");
const { createToken } = require("../utils/auth-Token");

const register = async (req, res) => {
  try {
    const { username, email, phone, password, isAdmin } = req.body;

    const isExsit = await USER.findOne({ email });

    if (isExsit) {
      res.status(400).json({ message: "user already register pleas login" });
    } else {
      const createdUser = await USER.create({
        username,
        email,
        phone,
        password,
        isAdmin,
      });

      const token = await createToken(createdUser._id);

      res.status(201).json({
        message: "user is created",
        createdUser,
        token,
        UserID: createdUser._id.toString(),
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const isUser = await USER.findOne({ email });
  if (!isUser) {
    res.status(401).json({
      message: "user not found",
    });
  } else {
    const isMatch = await isUser.checkPass(password);
    const token = await createToken(isUser._id);

    if (isMatch) {
      res.status(200).json({
        message: "user is login",
        isUser,
        token,
        UserID: isUser._id.toString(),
      });
    } else {
      res.status(401).json({
        message: "password not found",
      });
    }
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;

    res.status(200).json(userData);
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};

module.exports = { register, login, user };
