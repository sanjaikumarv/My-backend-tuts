import express from "express";
import postsRoutes from "./posts/post.routes";
const router = express.Router();

router.use("/posts", postsRoutes);
export default router;
