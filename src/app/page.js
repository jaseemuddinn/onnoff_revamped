"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const steps = [
  {
    title: "Step 1: The Flirtation (Strategy Call)",
    description: [
      "Let’s get to know each other. No roses, no candlelight—just a brutally honest chat about where your brand’s at, where it’s going, and why it's stuck scrolling reels at 2 AM. We'll dig into your competition (yes, even that one brand you low-key hate). We'll set goals so clear, you'll wonder why you didn't do this sooner. And yes, you'll walk away with a free brand audit. Consider it our first date gift.",
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

export default function StackingTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  return (
    <div
      className="min-h-screen container "
      style={{ height: "500vh", position: "relative" }}
    >
      {/* Grainy Effect */}
      <svg className="pointer-events-none absolute w-full h-full">
        <filter id="grainy">
          <feTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch' xresult="colorNoise" />
          <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="hard-light" />
        </filter>
      </svg>

      {/* Animated Gradient Blobs */}
      <div className="w-96 h-96 rounded-full left-72 animate-blob opacity-60 blur-2xl fixed bg-red-400"></div>
      <div className="w-96 h-96 rounded-full right-72 animation-delay-1 animate-blob opacity-60 blur-2xl fixed bg-blue-400"></div>
      <div className="w-72 h-72 rounded-full opacity-60 animation-delay-2 blur-2xl bottom-40 fixed bg-orange-300 animate-blob"></div>
      {/* <div className="hidden md:block">
        <div className="w-72 h-72 rounded-full fixed left-1/4 animate-blob opacity-60 blur-2xl bg-red-400"></div>
        <div className="w-72 h-72 rounded-full fixed right-1/4 animation-delay-1 animate-blob opacity-60 blur-2xl bg-blue-400"></div>
        <div className="w-56 h-56 rounded-full fixed bottom-10 animate-blob opacity-60 blur-2xl bg-orange-300 animation-delay-2"></div>
      </div> */}

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
                <div className="bg-red-200 px-10 py-10 rounded-xl shadow-xl">
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



    // <div
    //   className="min-h-screen relative overflow-y-scroll bg-gradient-to-br from-slate-300 to-red-400"
    //   style={{ height: "500vh" }}
    // >
    //   {/* Grainy Effect (SVG Filter) */}
    //   <svg className="pointer-events-none absolute w-full h-full">
    //     <filter id="grainy">
    //       <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" xresult="colorNoise" />
    //       <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
    //       <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
    //       <feBlend in="SourceGraphic" in2="monoNoise" mode="hard-light" />
    //     </filter>
    //   </svg>

    //   {/* Animated Gradient Blobs (visible on medium+ screens) */}
    //   <div className="hidden md:block">
    //     <div className="w-72 h-72 rounded-full fixed left-1/4 animate-blob opacity-60 blur-2xl bg-red-400"></div>
    //     <div className="w-72 h-72 rounded-full fixed right-1/4 animation-delay-1 animate-blob opacity-60 blur-2xl bg-blue-400"></div>
    //     <div className="w-56 h-56 rounded-full fixed bottom-10 animate-blob opacity-60 blur-2xl bg-orange-300 animation-delay-2"></div>
    //   </div>

    //   {/* Main Content: Two-Column Layout */}
    //   <div className="flex flex-col md:flex-row px-4 md:px-20">
    //     {/* Left Side: Fixed Static Content */}
    //     <div className="md:w-1/2 w-full sticky top-0 h-screen flex items-center justify-center">
    //       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">Process</h1>
    //     </div>

    //     {/* Right Side: Animated Timeline Cards */}
    //     <div className="w-full md:w-1/2">
    //       <div className="max-w-4xl mx-auto">
    //         {steps.map((step, index) => (
    //           <motion.div
    //             key={index}
    //             className="timeline-card sticky top-0 flex flex-col items-center justify-center h-screen px-4"
    //             initial={{ opacity: 0, y: 50 }} 
    //             whileInView={{ opacity: 1, y: 0 }} 
    //             viewport={{ once: true, amount: 0.5 }} 
    //             transition={{ duration: 0.8, ease: "easeOut" }} 
    //           >
    //             <div className="bg-red-200 px-8 py-8 md:px-10 md:py-10 rounded-xl shadow-xl w-full max-w-md md:max-w-lg text-center">
    //               <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h2>
    //               <p className="mt-3 text-md md:text-lg text-gray-700">{step.description}</p>
    //             </div>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
