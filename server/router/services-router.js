const express = require("express");
const { getServices ,addService} = require("../controller/services-controller");

const router = express.Router();

router
  .route("/services")
  .get(getServices)
  .post(addService);

module.exports = router;
