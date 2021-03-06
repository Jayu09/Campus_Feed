const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const schema = mongoose.Schema;

const notificationSchema = new schema({
  name: {
    type: String,
    require: true
  },
  profileId: {
    type: String,
    require: true
  },
  notificationType: {
    type: String,
    required: true
  }
});
const userSchema = new schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
    index: true
  },
  notification: [notificationSchema],
  password: {
    type: String,
    require: true,
    default: "123456"
  },
  Type: {
    type: String,
    require: true
  },
  Verified: {
    type: Boolean,
    default: false
  }
});
userSchema.pre("save", async function(next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(this.password, salt);
    this.password = hashpass;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function(newpassword) {
  try {
    return await bcrypt.compare(newpassword, this.password);
  } catch (err) {
    throw err;
  }
};

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
