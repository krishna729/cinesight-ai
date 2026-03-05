"use client";

import React, { useState, FormEvent } from "react";
import { Search, Film, Star, Users, Sparkles } from "lucide-react";
import ElectricBorder from "@/components/ElectricBorder";
import Loader from "@/components/Loader";

/* ---------------------------------
   Types for Movie + Sentiment
----------------------------------*/

// movie object from backend
type Movie = {
  title: string;
  year: string;
  rating: string;
  poster: string;
  plot: string;
  cast: string;
};

// sentiment object from backend
type Sentiment = {
  sentiment: string;
  confidence: number;
};

/* ---------------------------------
   Main Component
----------------------------------*/

const FindMoviesSection: React.FC = () => {

  /* -----------------------------
     State variables
  ------------------------------*/

  const [imdbId, setImdbId] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [movie, setMovie] = useState<Movie | null>(null);

  const [sentiment, setSentiment] = useState<Sentiment | null>(null);

  const [reviews, setReviews] = useState<string[]>([]);

  const [error, setError] = useState<string>("");

  /* -----------------------------
     Handle form submit
  ------------------------------*/

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imdbId.trim()) {
      setError("IMDb ID is required");
      return;
    }

    setError("");
    setLoading(true);

    // reset old data
    setMovie(null);
    setSentiment(null);
    setReviews([]);

    try {

      const res = await fetch(
        `http://localhost:5000/api/insights/${imdbId}`
      );

      if (!res.ok) {
        setError("Invalid IMDb ID or movie not found");
        setLoading(false);
        return;
      }

      const data = await res.json();

      // store fetched data
      setMovie(data.movie);
      setSentiment(data.sentiment);
      setReviews(data.reviews || []);

    } catch (err) {

      setError("Failed to fetch movie insights");

    }

    setLoading(false);
  };

  /* ---------------------------------
     JSX UI
  ----------------------------------*/

  return (
    <section id="find" className="py-28 text-center px-6">

      {/* Section Heading */}

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Find Movie{" "}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Insights
        </span>
      </h2>

      <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-12">
        Enter an IMDb movie ID to analyze movie details and discover
        AI-generated audience sentiment insights.
      </p>

      {/* ---------------------------------
         Search Form
      ----------------------------------*/}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
      >

        {/* Input field */}

        <div className="relative w-full sm:w-96">

          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Enter IMDb ID (e.g. tt0133093)"
            value={imdbId}
            onChange={(e) => setImdbId(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg
           bg-white dark:bg-zinc-900
           text-black dark:text-white
           border border-zinc-300 dark:border-zinc-700
           placeholder:text-gray-400 dark:placeholder:text-gray-500
           focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Analyze Button */}

        <button
          type="submit"
          className="px-6 py-3 rounded-lg font-medium
          bg-gradient-to-r from-purple-500 to-indigo-500
          text-white flex items-center gap-2
          hover:scale-105 hover:shadow-lg
          transition-all"
        >
          <Sparkles size={18} />
          Analyze
        </button>

      </form>

      {/* Error Message */}

      {error && <p className="text-red-500 mb-6">{error}</p>}

      {/* Loading */}

      {loading && <Loader />}

      {/* ---------------------------------
         Result Section
      ----------------------------------*/}

      {movie && (

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* ---------------------------------
             Movie Details Card
          ----------------------------------*/}

          <ElectricBorder color="#f97316" speed={1} chaos={0.15} style={{ borderRadius: 16 }}>

            <div className="p-5 dark:bg-zinc-900 rounded-xl text-left">

              {/* Poster */}
              <div className="mb-4 flex justify-start">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-[380px] rounded-lg shadow-lg hover:scale-105 transition"
                />
              </div>
              {/* Title */}

              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Film size={18} />
                {movie.title}
              </h3>

              {/* Year */}

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Year: {movie.year}
              </p>

              {/* Rating */}

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-2">
                <Star size={16} />
                IMDb Rating: {movie.rating}
              </p>

              {/* Cast */}

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
                <Users size={16} />
                Cast: {movie.cast}
              </p>

              {/* Plot */}

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {movie.plot}
              </p>

            </div>

          </ElectricBorder>

          {/* ---------------------------------
             Sentiment + Reviews Card
          ----------------------------------*/}

          {sentiment && (

            <ElectricBorder color="#a855f7" speed={1} chaos={0.12} style={{ borderRadius: 16 }}>

              <div className="p-5 dark:bg-zinc-900 rounded-xl text-left">

                <h3 className="text-lg font-semibold mb-4">
                  Audience Sentiment
                </h3>

                {/* Sentiment Badge */}

                <span
                  className={`px-4 py-1 text-sm rounded-full font-medium
                  ${sentiment.sentiment === "positive"
                      ? "bg-green-500/20 text-green-400"
                      : sentiment.sentiment === "negative"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-black-400"
                    }`}
                >
                  {sentiment.sentiment}
                </span>

                {/* Confidence */}

                <p className="text-sm text-gray-500 mt-2">
                  Confidence: {sentiment.confidence}%
                </p>

                {/* Reviews */}

                <div className="mt-6">

                  <h4 className="font-medium mb-3 text-sm text-white-300">
                    Audience Reviews
                  </h4>

                  <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2">

                    {reviews.map((review, index) => (

                      <p
                        key={index}
                        className="text-sm text-gray-400 border-l-2 border-purple-500 pl-3"
                      >
                        {review}
                      </p>

                    ))}

                  </div>

                </div>

              </div>

            </ElectricBorder>

          )}

        </div>

      )}

    </section>
  );
};

export default FindMoviesSection;