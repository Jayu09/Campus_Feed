const mongoose = require("mongoose");
const schema = mongoose.Schema;
const students = require("./Student");
const courseDetail = require("./CourseDetail");

const Grade = new schema({
  SemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: courseDetail
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: students
  },
  Credit: {
    type: Number,
    require: true
  },
  gained_credit: {
    type: Number,
    require: true
  },
  Internal_1: {
    type: Number,
    require: true
  },
  Internal_2: {
    type: Number,
    require: true
  },
  Internal_3: {
    type: Number
  },
  External: {
    type: Number,
    require: true
  },
  Practical: {
    type: Number
  }
});

const GradeModel = mongoose.model("Grade", Grade);
module.exports = GradeModel;
