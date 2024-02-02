const JWT = require("jsonwebtoken");
const USER = require("../Model/auth-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Unauthorized HTTP, Token not provided" });
  }

  try {
    const jwtToken = token.replace("Bearer ", "").trim();

    const isVerified = await JWT.verify(jwtToken, process.env.JWT_KEY);

    const userData = await USER.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = userData.token;
    req.userId = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;
