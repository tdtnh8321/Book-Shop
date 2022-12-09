const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
  },
  gender: {
    type: String, //Male,Female
  },
  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
  date: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: Number, //0:admin,1:user
  },
});
module.exports = mongoose.model("Users", UserSchema);
