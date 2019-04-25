const faculty = require("../models/Faculty");
const users = require("../models/users");
module.exports = {
  addFaculty: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    var newFaculty = new faculty(req.body);
    if (
      ((user.Type === "admin" && user) || user.Type === "SuperAdmin") &&
      newAdmin.Type === "Faculty"
    ) {
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
  createEvent: async (res, req, done) => {
    var newEvents = new events(req.body);
    newEvents.Created_By = req.user.name;
    await newEvents
      .save()
      .then(st => {
        return res.json({
          msg:
            "you have created event successfully, Please wait for Approvement"
        });
      })
      .catch(err => {
        return res.json({ msg: "Not valid input" });
      });
  }
};
