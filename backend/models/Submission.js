const mongoose = require("mongoose");
const schema = mongoose.Schema;
const subject = require("./Subject");
const student = require("./Student");
const faculty = require("./Faculty");
const Assignment = require("./Assignment");

const AssignmentSubmission = new schema({
  AssignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Assignment
  },
  Subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: subject
  },
  DateOfSubmission: {
    type: Date,
    default: Date.now
  },
  Submited_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: faculty
  },
  Submited_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: student
  },
  remark: {
    type: String,
    require: true
  },
  Score: {
    type: Number,
    require: true
  }
});

const AssignmentSubmissionModel = mongoose.model(
  "AssignmentSubmission",
  AssignmentSubmission
);
module.exports = AssignmentSubmissionModel;
