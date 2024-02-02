const express = require("express");
const {
  getAllUsers,
  getAllContects,
  getAllServices,
  updateUser,
  delelteUser,
} = require("../controller/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminValidate = require("../middlewares/adminValidate-middleware");

const router = express.Router();

router.route("/users").get(authMiddleware, adminValidate, getAllUsers);
router.route("/contects").get(authMiddleware, adminValidate, getAllContects);
router.route("/services").get(authMiddleware, adminValidate, getAllServices);
router
  .route("/user")
  .put(authMiddleware, adminValidate, updateUser)
  .delete(authMiddleware, adminValidate, delelteUser);
router
  .route("/user/:id")
  .put(authMiddleware, adminValidate, updateUser)
  .delete(authMiddleware, adminValidate, delelteUser);
module.exports = router;
