"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import HomeSection from "@/components/HomeSection";
import FindMoviesSection from "@/components/FindMoviesSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-6 pt-24 pb-16 transition-colors duration-300">

        <div className="max-w-5xl mx-auto">

          <HomeSection />

          <FindMoviesSection/>

          <AboutSection />

          <HowItWorksSection />

          <ContactSection />

        </div>

        <Footer />

      </main>
    </>
  );
}