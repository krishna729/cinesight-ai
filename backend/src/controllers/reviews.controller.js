import { getMovieReviews } from "../services/review.service.js";

export const getReviews = async (req, res) => {
  try {
    const { imdbId } = req.params;

    if (!imdbId) {
      return res.status(400).json({ error: "IMDb ID is required" });
    }

    const reviews = await getMovieReviews(imdbId);

    res.json(reviews);
  } catch (error) {
    console.error("Reviews Controller Error:", error.message);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
};