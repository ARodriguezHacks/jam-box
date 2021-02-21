import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// defining the fields for a user
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Add a piece of middleware to a mongoose model
// We can set certain things to happen on saves and finds and other methods/actions

// Before we save our new user we want to encrypt our user's password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  // this.password represents the instance or the current user and is being reassigned from a plain text password to a password that is first salted (addition of random string) and then encrypted via the hash method
});

const User = mongoose.model("User", userSchema);

export default User;
