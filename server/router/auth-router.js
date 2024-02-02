const { Router } = require("express");
const {
  register,
  login,
  user,

} = require("../controller/auth-controller");
const singUpSchema = require("../validator/singUp-zodvalidate");
const singInSchema = require("../validator/singIn-zodvalidate");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const adminValidate = require("../middlewares/adminValidate-middleware");
const router = Router();

router.route("/register").post(validate(singUpSchema), register);
router.route("/login").post(validate(singInSchema), login);

router.route("/user").get(authMiddleware, user);
module.exports = router;
