import axios from "axios";

export const getMovieByImdbId = async (imdbId) => {
  try {

    const response = await axios.get(
      "https://www.omdbapi.com/",
      {
        params: {
          i: imdbId,
          apikey: process.env.OMDB_API_KEY
        }
      }
    );

    if (response.data.Response === "False") {
      throw new Error(response.data.Error);
    }

    return {
      title: response.data.Title,
      year: response.data.Year,
      rating: parseFloat(response.data.imdbRating) || 0,
      poster: response.data.Poster,
      plot: response.data.Plot,
      cast: response.data.Actors
    };

  } catch (error) {

    console.error("OMDb Service Error:", error.message);

    throw new Error("Failed to fetch movie from OMDb");
  }
};