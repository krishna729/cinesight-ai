import express from "express";
import { getReviews } from "../controllers/reviews.controller.js";

const router = express.Router();

// GET /api/reviews/:imdbId
router.get("/:imdbId", getReviews);

export default router;