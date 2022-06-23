import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postsSchema = new Schema({
  userId: Number,
  Id: Number,
  title: String,
  body: String,
});
export default model("Posts", postsSchema, "posts");
