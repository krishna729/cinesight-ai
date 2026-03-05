"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Search, Database, Brain, BarChart3 } from "lucide-react";
import ElectricBorder from "@/components/ElectricBorder";

const HowItWorksSection: React.FC = () => {
  const { theme } = useTheme();
  const borderColor = theme === "dark" ? "#7df9ff" : "#ff0a91";
  return (
    <section id="how" className="py-28 text-center">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        How{" "}
        <span
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
          bg-clip-text text-transparent"
        >
          CineSight AI
        </span>{" "}
        Works
      </h2>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-white-400 mb-16">
        CineSight AI combines movie metadata with AI-powered sentiment
        analysis to generate meaningful audience insights in seconds.
      </p>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">

        {/* Step 1 */}
        <ElectricBorder
          color="#f97316"
          speed={1}
          chaos={0.15}
          style={{ borderRadius: 16 }}
        >
          <div className="p-8  dark:bg-zinc-900 rounded-xl text-center hover:scale-105 transition-transform">
            <Search className="mx-auto mb-4 text-orange-500" size={40} />

            <h3 className="font-semibold mb-2">
              1. Enter IMDb ID
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Start by entering the IMDb movie ID such as
              <span className="font-mono"> tt0133093</span>.
            </p>
          </div>
        </ElectricBorder>

        {/* Step 2 */}
        <ElectricBorder
          color={borderColor}
          speed={1}
          chaos={0.12}
        
          style={{ borderRadius: 16 }}
        >
          <div className="p-8  dark:bg-zinc-900 rounded-xl text-center hover:scale-105 transition-transform">
            <Database className="mx-auto mb-4 text-cyan-400" size={40} />

            <h3 className="font-semibold mb-2">
              2. Fetch Movie Data
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              CineSight retrieves movie metadata including title,
              poster, cast, ratings, and release year.
            </p>
          </div>
        </ElectricBorder>

        {/* Step 3 */}
        <ElectricBorder
          color="#a855f7"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="p-8  dark:bg-zinc-900 rounded-xl text-center hover:scale-105 transition-transform">
            <Brain className="mx-auto mb-4 text-purple-500" size={40} />

            <h3 className="font-semibold mb-2">
              3. AI Sentiment Analysis
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              AI analyzes audience reviews to determine whether
              sentiment is positive, mixed, or negative.
            </p>
          </div>
        </ElectricBorder>

        {/* Step 4 */}
        <ElectricBorder
          color="#22c55e"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16 }}
        >
          <div className="p-8  dark:bg-zinc-900 rounded-xl text-center hover:scale-105 transition-transform">
            <BarChart3 className="mx-auto mb-4 text-green-500" size={40} />

            <h3 className="font-semibold mb-2">
              4. Generate Insights
            </h3>

            <p className="text-gray-600 dark:text-grey-400 text-sm">
              CineSight AI summarizes audience feedback and presents
              easy-to-read movie insights.
            </p>
          </div>
        </ElectricBorder>

      </div>

    </section>
  );
};

export default HowItWorksSection;