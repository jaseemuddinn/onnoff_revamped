"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Step 1: The Flirtation (Strategy Call)",
    description: [
      "Let's get to know each other. No roses, no candlelight—just a brutally honest chat about where your brand's at, where it's going, and why it's stuck scrolling reels at 2 AM. We'll dig into your competition (yes, even that one brand you low-key hate). We'll set goals so clear, you'll wonder why you didn't do this sooner. And yes, you'll walk away with a free brand audit. Consider it our first date gift.",
    ],
  },
  {
    title: "Step 2: The Slow Burn (Research and Optimization)",
    description: [
      "We don't believe in rushing. Before execution, we make sure your brand is optimized to attract and convert. We find all the gaps (because we know where to look) and refine your brand, website, and social media so you're irresistible.",
    ],
  },
  {
    title: "Step 3: The Blueprint (Strategy and Execution Plan)",
    description: [
      "We create a step-by-step approach to hit all the right spots! We share a detailed plan (for example, a Notion board) with you every two weeks, ensuring everything is crystal clear without any push.",
    ],
  },
  {
    title: "Step 4: The Climax (Lights, Camera, Impact)",
    description:
      "Your audience doesn't just want content—they want a show. We shoot products, create commercial ads, and design reels that stop the scroll, leaving your brand unforgettable.",
  },
  {
    title: "Step 5: The Afterglow (Marketing that Sticks)",
    description:
      "Marketing isn't a one-time thing. It's about evolving and dominating. We take over your social media with strategic campaigns, performance marketing, and deep analytics that keep your brand growing.",
  },
];

export default function Process() {
  return (
    <>
      <div
        className="min-h-screen container"
        style={{ height: "500vh", position: "relative" }}
      >
        <div className="flex flex-col md:flex-row px-4 md:px-20">
          {/* Left Side: Static content */}
          <div className="md:w-1/2 w-full sticky top-0 h-screen flex items-center justify-center">
            <div>
              <h1 className="text-5xl font-bold text-black">Process</h1>
            </div>
          </div>

          {/* Right Side: Animated timeline cards */}
          <div className="md:w-1/2 w-full">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="timeline-card sticky top-0 flex flex-col items-center justify-center h-screen px-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="bg-white px-10 py-10 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                    <h2 className="text-3xl font-bold text-gray-900 text-center">
                      {step.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 max-w-xl text-center">
                      {Array.isArray(step.description)
                        ? step.description.join(" ")
                        : step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
