const JWT = require("jsonwebtoken");

const adminValidate = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user.isAdmin) {
      res.status(403).json({ message: "user is not an admin " });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = adminValidate;
