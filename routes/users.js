const mongoose = require('mongoose');
const plm =require('passport-local-mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/awstest");
// fields created usermname , email, passwaord, dp, email ,fullname 
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },

  dp: {
    type: String // Assuming the dp (display picture) is stored as a URL or path
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullname: {
    type: String,
    require: true
  }
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);


