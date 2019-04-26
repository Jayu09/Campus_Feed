const mongoose = require("mongoose");
const schema = mongoose.Schema;
const user = require("./users");

const Event = new schema({
  AuthId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: user
  },
  Created_By: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  Date_Time: {
    type: Date,
    require: true
  },
  Time: {
    type: Number,
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
