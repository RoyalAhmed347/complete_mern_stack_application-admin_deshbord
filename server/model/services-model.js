const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  startPrice: {
    type: String,
    require: true,
  },
  endPrice: {
    type: String,
    require: true,
  },
  provider: {
    type: String,
    require: true,
  },
});

const SERVICES = new mongoose.model("service", servicesSchema);

module.exports = SERVICES;
