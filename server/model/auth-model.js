const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;

  try {
    if (!user.isModified) {
      next();
    }
    const salt = (await bcrypt.genSalt(10)).toString();
    const hashPassword = await bcrypt.hash(user.password, salt);

    user.password = hashPassword;

    next();
  } catch (error) {
    console.log(error);
  }
});

userSchema.methods.checkPass = async function (entersPass) {
  return bcrypt.compare(entersPass, this.password);
};

const USER = new mongoose.model("user", userSchema);

module.exports = USER;
