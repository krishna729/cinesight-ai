"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div
       onClick={() => setTheme(isDark ? "light" : "dark")}
       className="theme-switch relative w-16 h-8 flex items-center 
                 rounded-full cursor-pointer transition-all duration-300 
                bg-zinc-300 dark:bg-zinc-700"
    >
      {/* Sliding Circle */}
        <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full 
                  shadow-md transform transition-all duration-300 ease-in-out 
                  flex items-center justify-center
                  ${isDark ? "translate-x-8 bg-white" : "bg-black"}`}
        >
       {isDark ? (
         <Moon size={14} className="text-black" />
          ) : (
        <Sun size={14} className="text-yellow-400" />
        )}
</div>
    </div>
  );
}