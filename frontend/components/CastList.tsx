interface CastListProps {
  actors: string; // OMDb gives comma-separated string
}

export default function CastList({ actors }: CastListProps) {
  if (!actors) return null;

  const actorArray = actors.split(",").map((actor) => actor.trim());

  return (
    <div className="mt-8">

      <h3 className="text-lg font-semibold mb-4">
        Cast
      </h3>

      <div className="flex flex-wrap gap-3">
        {actorArray.map((actor, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm rounded-full 
                       bg-white/10 dark:bg-white/5 
                       border border-white/10 
                       backdrop-blur-md
                       text-gray-800 dark:text-gray-200
                       transition-all duration-300
                       hover:scale-105 hover:bg-purple-500/20"
          >
            {actor}
          </span>
        ))}
      </div>

    </div>
  );
}