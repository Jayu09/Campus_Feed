const mongoose = require("mongoose");
const schema = mongoose.Schema;

const subject = new schema({
  code: {
    type: String,
    unique: true,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  credit: {
    type: Number,
    require: true
  },
  Theory: {
    type: String,
    require: true
  },
  Practical: {
    type: String
  }
});

const subjectModel = mongoose.model("subject", subject);
module.exports = subjectModel;
