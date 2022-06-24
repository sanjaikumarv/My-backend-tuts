import express from "express";
import postsRoutes from "./posts/post.routes";
import commentRoutes from "./comments/comments.routes";
import photoRoutes from "./photos/photos.routes";
const router = express.Router();

router.use("/posts", postsRoutes);
router.use("/comments", commentRoutes);
router.use("/photos", photoRoutes);
export default router;
