const faculties = require("../models/Faculty");
const users = require("../models/users");
module.exports = {
  addFaculty: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    var newFaculty = new faculties(req.body);
    var faculty = await users.findOne({ _id: req.body.Id, Type: "faculty" });
    if ((user.Type === "admin" || user.Type === "SuperAdmin") && faculty) {
      await users.findOneAndUpdate(
        { _id: req.body.Id },
        { $set: { Verified: true } }
      );
      await newFaculty
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
      return res.json({ msg: "Not Authorized to add Faculty" });
    }
  },
  deleteFaculty: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    if (user.Type === "admin" || user.Type === "SuperAdmin") {
      await faculties
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
      return res.json({ msg: "Not Authorized to Delete Faculty" });
    }
  },
  editProfie: async (req, res, next) => {
    var faculty = await faculties.findOne({ Id: req.user._id });
    await faculties
      .findOneAndUpdate(
        { Id: req.user._id },
        {
          $set: {
            Designation: req.body.Designation
              ? req.body.Designation
              : faculty.Designation,
            Qualification: req.body.Qualification
              ? req.body.Qualification
              : faculty.Qualification,
            image: req.file ? req.file.path : faculty.image,
            contact: req.body.contact ? req.body.contact : faculty.contact,
            PermanentAddress: req.body.PermanentAddress
              ? req.body.PermanentAddress
              : faculty.PermanentAddress,
            LocalAddress: req.body.LocalAddress
              ? req.body.LocalAddress
              : faculty.LocalAddress
          }
        }
      )
      .then(res.send({ msg: "your personal information sucessfully updated" }))
      .catch(err => {
        throw err;
      });
  }
};
