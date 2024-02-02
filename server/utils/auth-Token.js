const USER = require("../Model/auth-model");
const JWT = require("jsonwebtoken");

const createToken = async (id) => {
  const user = await USER.findOne({ _id: id });
  console.log("🚀 ~ createToken ~ user:", user)
  const { _id, email } = user;
  const token = JWT.sign({ _id, email }, process.env.JWT_KEY, {
    expiresIn: "30d",
  });
  return token;
};

module.exports = { createToken };
