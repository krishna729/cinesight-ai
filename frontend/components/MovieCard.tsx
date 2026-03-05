import { Star } from "lucide-react";
import CastList from "./CastList";

type Movie = {
  Poster: string;
  Title: string;
  Year: string;
  imdbRating: string;
  Plot: string;
  Actors: string;
};

export default function MovieCard({ movie }: { movie: Movie | null }) {
  if (!movie) return null;

  return (
    <div className="max-w-5xl mx-auto mt-12 
                    bg-white/5 dark:bg-white/5 
                    backdrop-blur-lg 
                    border border-white/10 
                    rounded-2xl 
                    p-8 
                    shadow-2xl 
                    transition-all duration-300">

      <div className="grid md:grid-cols-3 gap-10">

        {/* Poster */}
        <div className="flex justify-center">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="rounded-xl shadow-xl w-64 object-cover"
          />
        </div>

        {/* Movie Info */}
        <div className="md:col-span-2 space-y-6">

          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {movie.Title}
            </h2>

            <div className="flex items-center gap-6 mt-3 text-gray-400">
              <span>{movie.Year}</span>

              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-400" />
                <span>{movie.imdbRating}</span>
              </div>
            </div>
          </div>

          {/* Plot */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Overview
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {movie.Plot}
            </p>
          </div>

          {/* Cast */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Cast
            </h3>
            <p className="text-gray-400">
              <CastList actors={movie.Actors} />
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}