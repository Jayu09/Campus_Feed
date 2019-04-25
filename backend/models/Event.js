const mongoose = require("mongoose");
const schema = mongoose.Schema;
const user = require("./users");

const Event = new schema({
  Created_By: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user
  },
  title: {
    type: String,
    require: true
  },
  Date: {
    type: Date,
    require: true
  },
  Time: {
    type: TimeRanges,
    require: true
  },
  venue: {
    type: String,
    require: true
  },
  Conducted_By: {
    type: String,
    require: true
  },
  Compulsary_for: {
    type: Array,
    default: []
  }
});

const EventModel = mongoose.model("Event", Event);
module.exports = EventModel;
