const events = require("../models/Event");

module.exports = {
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
  },
  approveEvent: async (res, req, done) => {
    await events.findByIdAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          Approved: req.body.Approved
        }
      }
    );
    res.send({ msg: "Event Status Updated sucessfully" });
  },
  getEvent: async (req, res, done) => {
    await events
      .find()
      .sort({ date: 1 })
      .then(event => {
        res.send(event);
        console.log(event);
      });
  }
};
