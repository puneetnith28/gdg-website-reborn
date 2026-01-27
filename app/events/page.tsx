"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- IMPORTS ---
import SciFiCard from "../components/SciFiCard";
import YearSelector from "./YearSelector";
import { events as eventsData } from "../data/events-data";

export default function EventsPage() {
  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState("2026");

  // Helper to assign neon colors
  const getThemeColor = (index: number) => {
    // Google Colors Palette
    const colors = ["#EA4335", "#FBBC04", "#4285F4", "#34A853", "#FACC15"];
    return colors[index % colors.length];
  };

  // 1. Initialize Years (Run once)
  useEffect(() => {
    const uniqueYears = Array.from(new Set(eventsData.map((e) => e.year))).sort().reverse();
    setYears(uniqueYears);
    if (uniqueYears.length > 0) setSelectedYear(uniqueYears[0]);
  }, []);

  // 2. Filter Events INSTANTLY (No loading delay)
  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => event.year === selectedYear);
  }, [selectedYear]);

  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a] text-white">

        {/* --- GOOGLE THEMED HEADER --- */}
        <div className="relative w-full pt-24 pb-12 flex flex-col items-center justify-center z-10">
          
          {/* Background Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200px] bg-gradient-to-r from-[#4285F4]/10 via-[#EA4335]/10 to-[#34A853]/10 blur-[80px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Title with Developer Brackets */}
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#4285F4] opacity-80 font-mono">&lt;</span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white">Events</h1>
              <span className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#34A853] opacity-80 font-mono">/&gt;</span>
            </div>

            {/* Tagline */}
            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed font-medium">
              Learn, Connect, and Grow. Join our upcoming
              <span className="text-[#4285F4] mx-1">workshops</span>,
              <span className="text-[#EA4335] mx-1">hackathons</span>, and
              <span className="text-[#FBBC04] mx-1">tech talks</span>.
            </p>

            {/* Google Dots Decoration */}
            <div className="mt-8 flex gap-4">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]" />
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
            </div>
          </motion.div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="max-w-[1400px] mx-auto px-4 pb-20 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12">

            {/* SIDEBAR BUTTONS (Desktop) */}
            <div className="sm:w-32 hidden sm:block sticky top-24 z-20">
              <YearSelector
                years={years}
                selectedYear={selectedYear}
                onYearSelect={setSelectedYear}
              />
            </div>

            {/* MOBILE BUTTONS (Centered & Switchable) */}
            {/* UPDATED: Added w-full, justify-center, and snap-x */}
            <div className="flex sm:hidden w-full justify-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide snap-x">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  // UPDATED: Added snap-center and active state scaling
                  className={`min-w-[4.5rem] px-5 py-2.5 border rounded-full text-sm font-bold font-exo whitespace-nowrap transition-all snap-center ${
                    selectedYear === year
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)] border-white scale-105"
                      : "bg-transparent text-white border-gray-700 hover:border-gray-500 opacity-70"
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* --- GRID OF SCIFI CARDS --- */}
            <div className="flex-1 min-h-[50vh]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedYear}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                >
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                      <motion.div
                        key={event.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="w-full max-w-[90%] mx-auto"
                      >
                        <SciFiCard
                          title={event.title}
                          bgImageSrc={event.image}
                          themeColor={getThemeColor(index)}
                          onClick={() => console.log("Clicked", event.title)}
                        />
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-32 flex flex-col items-center justify-center text-gray-500 border border-dashed border-gray-800 rounded-3xl bg-gray-900/20">
                      <p className="font-mono text-lg">NO SIGNAL DETECTED FOR {selectedYear}</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}