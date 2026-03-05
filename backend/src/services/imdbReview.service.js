import axios from "axios";
import * as cheerio from "cheerio";

export const getImdbReviews = async (imdbId) => {
  try {

    const url = `https://www.imdb.com/title/${imdbId}/reviews`;

    const { data } = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const $ = cheerio.load(data);

    const reviews = [];

    $(".ipc-html-content-inner-div").each((i, el) => {

      if (i < 5) {
        reviews.push($(el).text().trim());
      }

    });

    return reviews;

  } catch (error) {

    console.error("IMDb Scraping Error:", error.message);

    return [];
  }
};