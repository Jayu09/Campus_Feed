const mongoose = require("mongoose");
const schema = mongoose.Schema;
const user = require("./users");

const Drive = new schema({
  Company_name: {
    type: String,
    require: true
  },
  JobTitle: {
    type: [String],
    require: true
  },
  Criteria: {
    type: String,
    require: true
  },
  Email: {
    type: String,
    require: true
  },
  DriveDate: {
    type: Date,
    require: true
  }
});

const DriveModel = mongoose.model("Drive", Drive);
module.exports = DriveModel;
