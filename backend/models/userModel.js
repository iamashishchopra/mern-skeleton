import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true } // timestamps maintains record for when user is created and updated
);

const User = mongoose.model("User", userSchema);
export default User;
