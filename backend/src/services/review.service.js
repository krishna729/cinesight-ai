import { getMovieByImdbId } from "./omdb.service.js";

export const getMovieReviews = async (imdbId) => {

  try {

    const movie = await getMovieByImdbId(imdbId);

    const title = movie.title;
    const rating = movie.rating;

    // ⭐ Positive reviews
    const positiveReviews = [
      `${title} is an absolute masterpiece with brilliant storytelling.`,
      `The performances in ${title} were outstanding and unforgettable.`,
      `${title} delivers breathtaking visuals and incredible direction.`,
      `Audiences loved the strong character development in ${title}.`,
      `${title} stands out as one of the best movies in its genre.`,
      `${title} received overwhelmingly positive reactions from viewers.`,
      `${title} impressed audiences with its powerful narrative.`
    ];

    // ⭐ Mixed reviews
    const mixedReviews = [
      `${title} had some entertaining moments but felt inconsistent.`,
      `The performances in ${title} were decent but not exceptional.`,
      `${title} had an interesting concept but execution was uneven.`,
      `Some viewers enjoyed ${title} while others felt it was average.`,
      `${title} is watchable but could have been better.`,
      `${title} had good visuals but pacing issues.`,
      `Audience reactions to ${title} were somewhat mixed.`
    ];

    // ⭐ Negative reviews
    const negativeReviews = [
      `${title} was disappointing with a weak storyline.`,
      `Many viewers criticized ${title} for poor pacing.`,
      `The acting in ${title} felt unconvincing.`,
      `${title} failed to engage audiences throughout.`,
      `${title} received largely negative reactions from viewers.`,
      `${title} struggled with weak character development.`,
      `Overall ${title} failed to meet audience expectations.`
    ];

    // randomize reviews
    const getRandomReviews = (pool) => {
      return [...pool]
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
    };

    // rating based selection
    if (rating >= 8) {
      return getRandomReviews(positiveReviews);
    }

    if (rating >= 6) {
      return getRandomReviews(mixedReviews);
    }

    return getRandomReviews(negativeReviews);

  } catch (error) {

    console.error("Review Service Error:", error.message);

    return [
      "Audience reactions to the movie were mixed.",
      "Some viewers enjoyed the story while others felt it was average.",
      "Overall the movie received moderate feedback."
    ];

  }

};