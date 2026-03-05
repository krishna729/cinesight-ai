import { getMovieByImdbId } from "../services/omdb.service.js";

export const getMovieDetails = async (req, res) => {
  try {
    const { imdbId } = req.params;

    if (!imdbId) {
      return res.status(400).json({ error: "IMDb ID is required" });
    }

    const movie = await getMovieByImdbId(imdbId);

    res.json(movie);
  } catch (error) {
    console.error("Movie Controller Error:", error.message);
    res.status(500).json({ error: "Failed to fetch movie details" });
  }
};