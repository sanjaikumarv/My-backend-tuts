import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  getPost,
  deletePost,
} from "./post.controller";
const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
