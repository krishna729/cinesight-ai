"use client";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      {/* Animated Circle */}
      <div className="relative w-16 h-16 mb-6">
        
        {/* Outer Pulse */}
        <div className="absolute inset-0 rounded-full 
                        bg-purple-500/20 
                        animate-ping" />

        {/* Inner Core */}
        <div className="relative w-16 h-16 rounded-full 
                        bg-gradient-to-r 
                        from-purple-500 
                        to-indigo-600 
                        flex items-center justify-center 
                        shadow-lg">
          <div className="w-6 h-6 rounded-full 
                          bg-white dark:bg-black" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="flex gap-2 text-gray-500 dark:text-gray-400 text-sm tracking-wide">

        <span className="animate-bounce [animation-delay:-0.3s]">.</span>
        <span className="animate-bounce [animation-delay:-0.15s]">.</span>
        <span className="animate-bounce">.</span>

      </div>

      <p className="mt-4 text-gray-400 text-sm">
        Analyzing movie insights
      </p>

    </div>
  );
}