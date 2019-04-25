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
  Compulsory_for: {
    type: Array,
    default: []
  },
  Approved: {
    type: Boolean,
    require: true,
    default: false
  }
});

const EventModel = mongoose.model("Event", Event);
module.exports = EventModel;
