const mongoose = require("mongoose");
const schema = mongoose.Schema;
const course = new schema({
  code: {
    type: String,
    unique: true,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  Session: {
    type: String,
    require: true
  },
  duration: {
    type: String,
    require: true
  },
  Type: {
    type: String,
    require: true
  }
});

const courseModel = mongoose.model("course", course);
module.exports = courseModel;
