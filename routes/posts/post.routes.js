import express from "express";
import { getPosts, createPosts } from "./post.controller";
const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);

export default router;
