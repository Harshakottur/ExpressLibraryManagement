// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: String,
  email: String,
  contactNumber: String
});

module.exports = mongoose.model('User', userSchema);
