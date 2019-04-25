const mongoose = require("mongoose");
const schema = mongoose.Schema;
const user = require("./users");

const admin = new schema({
  Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    unique: true
  },
  FatherName: {
    type: String,
    require: true
  },
  EmployeeId: {
    type: String,
    require: true
  },
  MotherName: {
    type: String,
    require: true
  },
  LocalAddress: {
    type: String,
    require: true
  },
  PermanentAddress: {
    type: String,
    require: true
  },
  contact: {
    type: String,
    require: true
  },
  image: {
    type: String,
    default: "postImages/user.svg"
  },
  Designation: {
    type: String,
    require: true
  },
  Qualification: {
    type: [],
    require: true
  }
});
const adminModel = mongoose.model("Admin", admin);
module.exports = adminModel;
