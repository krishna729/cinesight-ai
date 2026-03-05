import express from "express";
import { getMovieDetails } from "../controllers/movie.controller.js";

const router = express.Router();
router.get("/test", (req, res) => {
  res.send("Movie route working");
});

// GET /api/movie/:imdbId
router.get("/:imdbId", getMovieDetails);

export default router;