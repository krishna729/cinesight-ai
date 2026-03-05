import express from "express";
import { getSentiment } from "../controllers/sentiment.controller.js";

const router = express.Router();

// POST /api/sentiment
router.post("/", getSentiment);

export default router;