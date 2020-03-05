const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Student = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number }
});

module.exports = mongoose.model("Student", Student);
