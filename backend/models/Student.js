const mongoose = require("mongoose");
const schema = mongoose.Schema;
const user = require("./users");
const course = require("./Course");
const Document = new schema({
  DocName: {
    type: String,
    require: true
  },
  DocAddress: {
    type: String,
    require: true
  }
});

const student = new schema({
  Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user,
    unique: true
  },
  CourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: course
  },
  FatherName: {
    type: String,
    require: true
  },
  RollNo: {
    type: Number,
    require: true
  },
  Enrollment: {
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
  CourseName: {
    type: String,
    require: true
  },
  Sem: {
    type: Number,
    require: true
  },
  Session: {
    type: String,
    require: true
  },
  StudentDocument: [Document]
});
const studentModel = mongoose.model("Student", student);
module.exports = studentModel;
