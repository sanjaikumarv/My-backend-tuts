import express from "express";
import { getPhotos } from "../photos/photos.controller";

const router = express.Router();
router.get("/", getPhotos);

export default router;
