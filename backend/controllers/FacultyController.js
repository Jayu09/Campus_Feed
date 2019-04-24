const faculty = require("../models/Faculty");

module.exports = {
  addFaculty: async (req, res, done) => {
    var user = await users.findOne({ _id: req.user._id });
    var newFaculty = new faculty(req.body);
    if (user.Type === "admin" && user) {
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
  }
};
