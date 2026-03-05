"use client";

import { useState } from "react";

interface Props {
  onSearch: (id: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [imdbId, setImdbId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = imdbId.trim();

    if (!trimmed) {
      setError("IMDb ID is required");
      return;
    }

    if (!/^tt\d{7,8}$/.test(trimmed)) {
      setError("Invalid IMDb ID format (example: tt0133093)");
      return;
    }

    setError("");
    onSearch(trimmed);
  };

  return (
    <div className="mb-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <input
          type="text"
          placeholder="e.g. tt0133093"
          value={imdbId}
          onChange={(e) => setImdbId(e.target.value.trimStart())}
          className="w-full sm:w-96 px-4 py-3 rounded-md 
          bg-white dark:bg-zinc-900 
          text-black dark:text-white 
          border border-zinc-300 dark:border-zinc-700 
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-md 
          bg-gradient-to-r from-purple-500 to-indigo-500 
          text-white hover:opacity-90 
          transition-all duration-300"
        >
          Analyze
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-sm mt-3 text-center">
          {error}
        </p>
      )}
    </div>
  );
}