

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-z\s]+$/.test(v); 
      },
      message: props => `${props.value} is not a valid fullname! Only letters are allowed.`
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
