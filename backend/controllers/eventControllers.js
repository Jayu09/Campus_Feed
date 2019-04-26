const events = require("../models/Event");
module.exports = {
  createEvent: async (res, req, done) => {
    var newEvents = new events(req.body);
    newEvents.Created_By = req.user.name;
    newEvents.AuthId = req.user._id;
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
  },
  approveEvent: async (res, req, done) => {
    if (
      ((user.Type === "admin" && user) || user.Type === "SuperAdmin") &&
      newAdmin.Type === "Faculty"
    )
      await events
        .findByIdAndUpdate(
          { _id: req.body.id },
          {
            $set: {
              Approved: req.body.Approved
            }
          }
        )
        .then(res.send({ msg: "Event Status Updated sucessfully" }))
        .catch(err => res.send({ msg: "Event can not be Appproved" }));
  },
  getEvent: async (req, res, done) => {
    await events
      .find()
      .sort({ date: 1 })
      .then(event => {
        res.send(event);
        console.log(event);
      });
  },
  deleteEvent: async (req, res, done) => {
    var userType = req.user.Type;
    if (userType === "Admin" || userType === "SuperAdmin")
      await events
        .findOneAndDelete({ _id: req.body.id })
        .then(res.send({ msg: "event deleted sucessfully" }))
        .catch(err => res.send({ msg: "not Authorized to delete Event" }));
    else
      await events
        .findOneAndDelete()
        .and([{ _id: req.body.id }, { AuthId: req.user._id }])
        .then(res.send({ msg: "event deleted sucessfully" }))
        .catch(err => res.send({ msg: "not Authorized to delete Event" }));
  }
};
