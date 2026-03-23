const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  userId: String,
  type: String, // transport / food / energy
  action: String, // car / metro / veg / non-veg
  carbon: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Activity", activitySchema);