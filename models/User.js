const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  forename: String,
  surname: String,
  imageUrl: String,
  displayName: String,
  settings: {
    city: { type: String, default: "Katowice" },
    forecastHours: { type: Number, default: 72 },
    twitters: []
  }
});

mongoose.model("users", userSchema);
