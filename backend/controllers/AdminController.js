const admin = require("../models/Admin");
const users = require("../models/users");
const events = require("../models/Event");
module.exports = {
  addAdmin: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    var newAdmin = new admin(req.body);
    if (
      ((user.Type === "admin" && user) || user.Type === "SuperAdmin") &&
      newAdmin.Type === "Admin"
    ) {
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
  },
  createEvent: async (res, req, done) => {
    var newEvents = new events(req.body);
    newEvents.Approved = true;
    newEvents.Created_By = req.user.name;
    await newEvents
      .save()
      .then(st => {
        return res.json({
          msg: "you have created event success fully"
        });
      })
      .catch(err => {
        return res.json({ msg: "Not valid input" });
      });
  }
};
