import mongoose from "mongoose";

//Schema for the database
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
 export const users = mongoose.model("user", userSchema); //model for the schema