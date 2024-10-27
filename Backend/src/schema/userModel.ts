import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
  name: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  gender: { type: String, required: false, unique: false },
  age: { type: String, required: false, unique: false },
  location: { type: String, required: false, unique: false },
  interests: { type: Array<String>, required: false, unique: false },
  bio: { type: String, required: false, unique: false },
  proudmoment: { type: String, required: false, unique: false },
  description: { type: String, required: false, unique: false },
  track: { type: String, required: false, unique: false },
  communities: { type: Array<String>, required: false, unique: false },
});

export const UserModel = mongoose.model("User", userSchema);
