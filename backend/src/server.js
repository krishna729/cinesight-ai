import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import movieRoutes from "./routes/movie.routes.js";
import reviewRoutes from "./routes/reviews.routes.js";
import sentimentRoutes from "./routes/sentiment.routes.js";
import insightsRoutes from "./routes/insights.routes.js";


dotenv.config();

const app = express();

/* Middleware */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));

app.use(express.json());

/* Health check */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "AI Movie Insight Backend Running 🚀"
  });
});

/* API Routes */
app.use("/api/movie", movieRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/sentiment", sentimentRoutes);
app.use("/api/insights", insightsRoutes);



/* Start server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});