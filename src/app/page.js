"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Process from "@/components/Process/process";
import Hero from "@/components/Hero/hero";
import Services from "@/components/services/Services";
import { World } from "@/components/world/World";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Wait a short moment before hiding the loader
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (

          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center "
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <div className="w-96 h-96 rounded-full left-72 animate-blob opacity-60 blur-2xl fixed bg-red-400"></div>
            <div className="w-96 h-96 rounded-full right-72 animation-delay-1 animate-blob opacity-60 blur-2xl fixed bg-blue-400"></div>
            <div className="w-72 h-72 rounded-full opacity-60 animation-delay-2 blur-2xl bottom-40 fixed bg-orange-300 animate-blob"></div>
            {/* Optionally, you could add your grainy SVG filter here as an overlay */}
            <div className="w-full">
              {/* Progress Bar Container */}
              <motion.div className="w-full h-screen bg-gray-200 overflow-hidden">
                {/* The inner bar width is controlled by progress */}

                <motion.div
                  className="h-full bg-white"
                  style={{ width: `${progress}%` }}
                >
                  <motion.p className="text-center relative font-montserrat px-20 text-9xl font-bold text-gray-900">
                    {progress}
                  </motion.p>
                </motion.div>
              </motion.div>
              {/* Percentage Text */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <svg className="pointer-events-none absolute w-full h-full">
        <filter id="grainy">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
            xresult="colorNoise"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="hard-light" />
        </filter>
      </svg>

      {/* Animated Gradient Blobs */}
      <div className="w-96 h-96 rounded-full left-72 animate-blob opacity-80 blur-2xl fixed bg-red-400"></div>
      <div className="w-96 h-96 rounded-full right-72 animation-delay-1 animate-blob opacity-80 blur-2xl fixed bg-blue-400"></div>
      <div className="w-72 h-72 rounded-full opacity-80 animation-delay-2 blur-2xl bottom-40 fixed bg-orange-300 animate-blob"></div>
      <div
        className={loading ? "hidden" : "block"}
      >
        <Hero />
        <Services />
        <Process />
        {/* <World /> */}
      </div>
    </>
  );
}
