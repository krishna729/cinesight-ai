"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Brain, Database, BarChart3 } from "lucide-react";
import ElectricBorder from "@/components/ElectricBorder";

const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const borderColor = theme === "dark" ? "#7df9ff" : "#ff0a91";
  return (
    <section id="about" className="py-28 text-center">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        About{" "}
        <span
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
          bg-clip-text text-transparent"
        >
          CineSight AI
        </span>
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-16">
        CineSight AI is an intelligent movie insight platform that analyzes
        IMDb movie data and audience feedback to generate meaningful
        sentiment summaries. It helps viewers quickly understand how a movie
        is perceived by audiences using AI-powered analysis.
      </p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {/* Card 1 */}
        <ElectricBorder
          color="#a855f7"
          speed={1}
          chaos={0.15}
          style={{ borderRadius: 16 }}
        >
          <div className="p-8  dark:bg-zinc-900 rounded-xl text-center transition-transform hover:scale-105">
            <Brain className="mx-auto mb-4 text-purple-500" size={40} />

            <h3 className="text-lg font-semibold mb-3">
              AI Sentiment Analysis
            </h3>

            <p className="text-gray-600 dark:text-white text-sm">
              Advanced AI analyzes audience reviews and comments to determine
              whether the movie sentiment is positive, mixed, or negative.
            </p>
          </div>
        </ElectricBorder>

        {/* Card 2 */}
        <ElectricBorder
          color={borderColor}
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="p-8  dark:bg-zinc-900 rounded-xl text-center transition-transform hover:scale-105">
            <Database className="mx-auto mb-4 text-cyan-400" size={40} />

            <h3 className="text-lg font-semibold mb-3">
              IMDb Movie Data
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              CineSight retrieves movie metadata including poster,
              cast, release year, ratings, and plot summary directly
              from IMDb sources.
            </p>
          </div>
        </ElectricBorder>

        {/* Card 3 */}
        <ElectricBorder
          color="#22c55e"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="p-8  dark:bg-zinc-900 rounded-xl text-center transition-transform hover:scale-105">
            <BarChart3 className="mx-auto mb-4 text-green-500" size={40} />

            <h3 className="text-lg font-semibold mb-3">
              Insightful Summaries
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              CineSight AI summarizes audience reactions into easy-to-read
              insights so users can instantly understand movie perception.
            </p>
          </div>
        </ElectricBorder>

      </div>
    </section>
  );
};

export default AboutSection;