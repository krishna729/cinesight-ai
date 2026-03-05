"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ElectricBorder from "@/components/ElectricBorder";
import { Github, Linkedin, Heart } from "lucide-react";



const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
  const borderColor = theme === "dark" ? "#7df9ff" : "#ff0a91";
  return (
    <section id="contact" className="py-28 text-center px-6">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Connect With{" "}
        <span
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
          bg-clip-text text-transparent"
        >
          Me
        </span>
      </h2>

      {/* Subtitle */}
      <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-16">
        Feel free to explore my work or connect with me on GitHub and LinkedIn.
      </p>

      {/* Social Cards */}
      <div className="flex justify-center gap-10 flex-wrap">

        {/* GitHub */}
        <ElectricBorder
          color={borderColor}
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="relative overflow-hidden rounded-xl">
          <a
            href="https://github.com/krishna729"
            className="p-10 w-40 h-40 flex flex-col items-center justify-center
             dark:bg-zinc-900 rounded-xl
            hover:scale-105 transition-transform"
          >
            <Github size={38} className="mb-3 text-cyan-400" />

            <span className="font-medium text-gray-700 dark:text-gray-300">
              GitHub
            </span>
          </a>
          </div>
        </ElectricBorder>

        {/* LinkedIn */}
        <ElectricBorder
          color="#0ea5e9"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="relative overflow-hidden rounded-xl">
          <a
            href="https://www.linkedin.com/in/krishna4236/"
            className="p-10 w-40 h-40 flex flex-col items-center justify-center
             dark:bg-zinc-900 rounded-xl
            hover:scale-105 transition-transform"
          >
            <Linkedin size={38} className="mb-3 text-sky-400" />

            <span className="font-medium text-gray-700 dark:text-gray-300">
              LinkedIn
            </span>
          </a>
         </div>
        </ElectricBorder>

      </div>

      {/* Footer note */}
      <p className="mt-16 text-sm text-gray-500 dark:text-gray-500 flex items-center justify-center gap-2">
        Built with
        <Heart size={16} className="text-red-500" />
        using Next.js and AI tools.
      </p>

    </section>
  );
};

export default ContactSection;