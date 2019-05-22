const mongoose = require("mongoose");
const schema = mongoose.Schema;
const subject = require("./Subject");
const course = require("./Course");
const faculty = require("./Faculty");

const Assignment = new schema({
  CourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: course
  },
  Sem: {
    type: Number,
    require: true
  },
  Subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: subject
  },
  FacultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: faculty
  },
  Topic: {
    type: String,
    require: true
  },
  Description: {
    type: String,
    default: Date.now
  },
  DateOfSubmission: {
    type: Date,
    require: true
  }
});

const AssignmentModel = mongoose.model("Assignment", Assignment);
module.exports = AssignmentModel;
