import React from "react";

const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute -top-40 w-[520px] h-[520px] bg-purple-500/20 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* AI badge */}
      <div
        className="mb-6 px-4 py-1 text-sm font-medium rounded-full
        bg-purple-100 dark:bg-purple-900/40
        text-purple-600 dark:text-purple-300
        border border-purple-300/40"
      >
        AI Powered Movie Insights
      </div>

      {/* Title */}
      <h1
        className="text-4xl md:text-6xl font-bold tracking-tight leading-tight
        max-w-4xl"
      >
        Discover Movie Insights with{" "}
        <span
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
          bg-clip-text text-transparent"
        >
          CineSight AI
        </span>
      </h1>

      {/* Description */}
      <p
        className="mt-6 max-w-2xl text-lg
        text-gray-600 dark:text-gray-400"
      >
        Enter an IMDb movie ID to instantly explore movie details,
        cast information, ratings, and AI-generated audience sentiment
        insights. CineSight AI helps you understand how audiences feel
        about a movie in seconds.
      </p>

      {/* CTA */}
      <a
        href="#find"
        className="mt-10 px-8 py-3 rounded-lg font-medium
        bg-gradient-to-r from-purple-500 to-indigo-500
        text-white
        hover:scale-105 hover:shadow-xl
        transition-all duration-300"
      >
        Try Movie Analyzer
      </a>

      {/* Example
      <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
        Example IMDb ID:{" "}
        <span className="font-mono text-purple-500">tt0133093</span>
      </p> */}
    </section>
  );
};

export default HomeSection;