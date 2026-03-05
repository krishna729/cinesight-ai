import { getMovieByImdbId } from "../services/omdb.service.js";
import { getMovieReviews } from "../services/review.service.js";
import { analyzeSentiment } from "../services/sentiment.service.js";

export const getMovieInsights = async (req, res) => {
  try {
    const { imdbId } = req.params;

    if (!imdbId) {
      return res.status(400).json({ error: "IMDb ID is required" });
    }

    // 1️⃣ movie details
    const movie = await getMovieByImdbId(imdbId);

    // 2️⃣ reviews
    const reviews = await getMovieReviews(imdbId);

    // 3️⃣ sentiment analysis
    const sentiment = await analyzeSentiment(reviews);

    res.json({
      movie,
      reviews,
      sentiment
    });

  } catch (error) {
    console.error("Insights Controller Error:", error.message);
    res.status(500).json({ error: "Failed to fetch movie insights" });
  }
};