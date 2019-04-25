const users = require("../models/users");
const student = require("../models/Student");

module.exports = {
  addStudent: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    var newStudent = new student(req.body);
    if (
      ((user.Type === "admin" && user) || user.Type === "SuperAdmin") &&
      newAdmin.Type === "Student"
    ) {
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
  }
};
