const mongoose = require("mongoose");

const Userimage = new mongoose.Schema({
  img: {
    type: String,
  },
});

const UserImage = mongoose.model("UserImage", Userimage);
module.exports = UserImage;
