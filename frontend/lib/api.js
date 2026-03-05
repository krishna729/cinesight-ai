export const getMovieInsights = async (imdbId) => {
  try {
    const res = await fetch(`http://localhost:5000/api/insights/${imdbId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch movie insights");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
};