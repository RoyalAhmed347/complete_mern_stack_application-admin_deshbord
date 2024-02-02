const { Router } = require("express");
const { contectForm } = require("../controller/contact-controller");
const validate = require("../middlewares/validate-middleware");
const contectSchema = require("../validator/contect-zodvalidate");

const router = Router();

router.route("/").post(validate(contectSchema), contectForm);

module.exports = router;
