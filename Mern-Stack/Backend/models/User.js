const mongoose = require("mongoose");
const database = require("../models/database");


const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  token: String,
});

module.exports = mongoose.model("User", UserSchema);
