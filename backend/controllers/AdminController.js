const admin = require("../models/Admin");

module.exports = {
  addAdmin: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    var newAdmin = new admin(req.body);
    if ((user.Type === "admin" && user) || user.Type === "SuperAdmin") {
      await newAdmin
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
      return res.json({ msg: "Not Authorized to add Admin" });
    }
  }
};