const admin = require("../models/Admin");
const users = require("../models/users");
module.exports = {
  addAdmin: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    var newAdmin = new admin(req.body);
    console.log(newAdmin);
    if (
      (user.Type === "admin" && user) ||
      user.Type === "SuperAdmin" // newAdmin.Type === "admin"
    ) {
      await users.findOneAndUpdate(
        { _id: req.body.Id },
        { $set: { Verified: true } }
      );
      await newAdmin
        .save()
        .then(st => {
          return res.json({
            msg: "success"
          });
        })
        .catch(err => {
          console.log(err);
          return res.json({ msg: "Not valid input" });
        });
    } else {
      return res.json({ msg: "Not Authorized to add Admin" });
    }
  },
  deleteAdmin: async (req, res, done) => {
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
      return res.json({ msg: "Not Authorized to add Faculty" });
    }
  },
  editProfie: async (req, res, next) => {
    var Admin = await admin.findOne({ Id: req.user._id });
    await admin
      .findOneAndUpdate(
        { Id: req.user._id },
        {
          $set: {
            image: req.file ? req.file.path : Admin.image,
            contact: req.body.contact ? req.body.contact : Admin.contact,
            PermanentAddress: req.body.PermanentAddress
              ? req.body.PermanentAddress
              : Admin.PermanentAddress,
            LocalAddress: req.body.LocalAddress
              ? req.body.LocalAddress
              : Admin.LocalAddress
          }
        }
      )
      .then(res.send({ msg: "your personal information sucessfully updated" }))
      .catch(err => {
        throw err;
      });
  }
};
