const USER = require("../Model/auth-model");
const CONTECT = require("../model/contect-models");
const SERVICES = require("../model/services-model");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await USER.find({}).select({ password: 0 });
    if (!allUsers) {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ users: allUsers });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getAllContects = async (req, res) => {
  try {
    const allContects = await CONTECT.find({});
    if (!allContects) {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ contects: allContects });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getAllServices = async (req, res) => {
  try {
    const allServices = await SERVICES.find({});
    if (!allServices) {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ services: allServices });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  try {
    const result = await USER.findOneAndUpdate(
      { _id: id },
      { ...user },
      { new: true }
    ).select({ password: 0 });
    res.json({ message: "Success Update", ...result._doc });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};
const delelteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await USER.findOneAndDelete({ _id: id });
    res.json({ message: "Success Deleted" });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};

module.exports = {
  getAllUsers,
  getAllContects,
  getAllServices,
  updateUser,
  delelteUser,
};
