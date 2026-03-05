import express from "express";
import { getMovieInsights } from "../controllers/insights.controller.js";

const router = express.Router();

// GET /api/insights/:imdbId
router.get("/:imdbId", getMovieInsights);

export default router;