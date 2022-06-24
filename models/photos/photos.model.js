import mongoose from "mongoose";
const { Schema, model } = mongoose;

const photosSchema = new Schema({
  albumId: {
    type: String,
    required: true,
  },
  id: Number,
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
});

export default model("Photos", photosSchema, "photos");
