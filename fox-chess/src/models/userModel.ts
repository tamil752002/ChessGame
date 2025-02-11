import mongoose, { Schema, model, models } from "mongoose";

// Define the User Schema
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// Export the model (avoid redefining if already created)
const User = models.User || model("User", UserSchema);

export default User;
