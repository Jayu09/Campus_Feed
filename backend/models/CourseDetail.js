const mongoose = require("mongoose");
const schema = mongoose.Schema;
const course = require("./Course");
const subject = require("./Subject");

const CourseDetail = new schema({
  CourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: course
  },
  Sem: {
    type: Number,
    require: true
  },
  Subject: [subject]
});

const CourseDetailModel = mongoose.model("CourseDetail", CourseDetail);
module.exports = CourseDetailModel;
