const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  forename: String,
  surname: String,
  imageUrl: String,
  displayName: String
});

mongoose.model("users", userSchema);
