const users = require("../models/users");
const students = require("../models/Student");

module.exports = {
  addStudent: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    var newStudent = new students(req.body);
    var student = users.findOne({ _id: req.body.Id, Type: "student" });
    if ((user.Type === "admin" || user.Type === "SuperAdmin") && student) {
      await users.findOneAndUpdate(
        { _id: req.body.Id },
        { $set: { Verified: true } }
      );
      await newStudent
        .save()
        .then(st => {
          return res.json({
            msg: "success"
          });
        })
        .catch(err => {
          return res.json({ msg: "Not valid input" });
        });
    } else {
      return res.json({ msg: "Not Authorized to add Student" });
    }
  },
  deleteStudent: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    if (user.Type === "admin" || user.Type === "SuperAdmin") {
      await students
        .findOneAndRemove({ Id: req.body.Id })
        .then(st => {
          return res.json({
            msg: "Deleted Successfully"
          });
        })
        .catch(err => {
          return res.json({ msg: "Not valid input" });
        });
    } else {
      return res.json({ msg: "Not Authorized to delete Student" });
    }
  },
  editProfie: async (req, res, next) => {
    var student = await students.findOne({ Id: req.user._id });
    await students
      .findOneAndUpdate(
        { Id: req.user._id },
        {
          $set: {
            image: req.file ? req.file.path : student.image,
            contact: req.body.contact ? req.body.contact : student.contact,
            PermanentAddress: req.body.PermanentAddress
              ? req.body.PermanentAddress
              : student.PermanentAddress,
            LocalAddress: req.body.LocalAddress
              ? req.body.LocalAddress
              : student.LocalAddress
          }
        }
      )
      .then(res.send({ msg: "your personal information sucessfully updated" }))
      .catch(err => {
        throw err;
      });
  },
  addDocument: async (req, res, next) => {
    var student = await students.findOne({ Id: req.user._id });
    var doc = await student.StudentDocument.push({
      DocName: req.body.DcoName,
      DocAddress: req.file.path
    });
    await students
      .findOneAndUpdate({ Id: req.user._id }, { $set: { DcoName: doc } })
      .then(res.send({ msg: "Document Successfully Updated" }))
      .catch(err => res.send(err));
  }
};
