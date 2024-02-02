const SERVICES = require("../model/services-model");

const getServices = async (req, res) => {
  try {
    const data = await SERVICES.find({});
    console.log("🚀 ~ getServices ~ result:", data);

    res.json(data);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const addService = async (req, res) => {
  const { serviceName, description, startPrice, endPrice, provider } = req.body;

  try {
    const createService = await SERVICES.create({
      serviceName,
      description,
      startPrice,
      endPrice,
      provider,
    });
    res.status(201).json({ message: "Created" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { getServices, addService };
