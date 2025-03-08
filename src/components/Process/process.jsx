"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 'step-1',
    title: "Step 1: The Flirtation (Strategy Call)",
    description: [
      "Let's get to know each other. No roses, no candlelight — just a brutally honest chat about where your brand's at, where it's going, and why it's stuck scrolling reels at 2 AM.",
      <br />,
      "We'll dig into your competition (yes, even that one brand you low-key hate). We'll set goals so clear, you'll wonder why you didn't do this sooner.",
      <br />,
      <br />,
      "And yes, you'll walk away with a free brand audit. Consider it our first date gift. 🧧",
    ],
  },
  {
    id: 'step-2',
    title: "Step 2: The Slow Burn (Research and Optimization)",
    description: [
      "We don't believe in rushing.",
      <br />,
      "Before execution, we make sure your brand is optimized to attract and convert.",
      <br />,
      <br />,
      <span style={{ color: "red" }}> What happens here? </span>,
      <br />,<span style={{paddingLeft: "1.5rem"}}>We,</span> , 
      <ul style={{listStyleType: "disc", paddingLeft: "1.5rem"}}><li>Find all the gaps (because we know where to look).</li>
      <li>Refine your brand, website, and social media so you're irresistible.</li>
      </ul>,
    ],
  },
  {
    id: 'step-3',
    title: "Step 3: The Blueprint (Strategy and Execution Plan)",
    description: [
      <span style={{ color: "red" }}>What happens here?</span>,
      <br />,<span style={{paddingLeft: "1.5rem"}}>We,</span> , 
      <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem"  }}>
        <li>Create a step by step approach to hit all the right spots.</li>
        <li>Design a brand that's so you, you'll wonder why you ever settled for less.</li>
        <li>Create a content calendar that's so organized, you'll never have to worry about what to post next.</li>
        <li>Create a contract, but with benefits. </li>
      </ul>,
    ],
  },
  {
    id: 'step-4',
    title: "Step 4: The Climax (Lights, Camera, Impact)",
    description: [
        "Your audience doesn't just want content. They want a show & performance.", <br />,"And honey, We are all about the hardcore.", <br />,
        <span style={{ color: "red" }}>What happens here?</span>,
        <br />,<span style={{paddingLeft: "1.5rem"}}>We,</span> , 
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem"  }}>
          <li>Shoot products, create commercial ads and design with development that makes jaws drop.</li>
          <li>Craft reels that actually stop the scroll.</li>
        </ul>,
      ],
  },
  {
    id: 'step-5',
    title: "Step 5: The Afterglow (Marketing that Sticks)",
    description: [
        "Marketing isn't a one time thing (like bad ads that disappear overnight). It's about evolving and dominating", <br />,"We monitor what's working, tweak strategies, and ensure your brand keeps growing.", <br />,
        <span style={{ color: "red" }}>What happens here?</span>,
        <br />, <span style={{paddingLeft: "1.5rem"}}>We,</span> , 
        <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem"  }}>
          <li>Just take over everything. Yes, you heard it right "Everything".</li>
          <li>Get connected with your audience, whispers in DM's & shouts in feeds. </li>
        </ul>,
      ],
  },
];

export default function Process() {
  return (
    <>
      <div
        className="min-h-screen max-w-9xl mx-auto container"
        style={{ height: "500vh", position: "relative" }}
      >
        <div className="flex flex-col lg:flex-row px-4 lg:px-20">
          {/* Left Side: Static content */}
          <div className="lg:w-1/2 w-full sticky top-0 h-screen flex items-center justify-center">
            <div className="max-w-full lg:max-w-[90%]">
              <h1 className="text-5xl md:text-8xl font-bold font-montserrat text-black">
                Professional <span className="text-stroke-2 text-transparent"> Foreplay </span>
              </h1>
              <br />
              <p className="font-poppins text-justify">
                The term "foreplay" here refers to the process of doing
                everything involved in onboarding. The key is to make the
                connection clear without being awkward.this is the preparatory
                phase before the main work begins.
                <br />
                <br />
                (Because great branding, like great chemistry, needs the perfect
                build-up.)
              </p>
            </div>
          </div>

          {/* Right Side: Animated timeline cards */}
          <div className="lg:w-1/2 w-full">
            <div className="max-w-4xl mx-auto">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className="timeline-card relative top-0 flex flex-col items-center justify-center h-screen px-4"
                  initial={{ opacity: 1, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white px-10 py-10 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                    <h2 className="md:text-3xl text-xl font-bold text-gray-900 text-center font-montserrat">
                      {step.title}
                    </h2>
                    <p className="mt-4 md:text-lg  text-gray-700 max-w-xl text-justify font-poppins">
                      {/* {Array.isArray(step.description)
                        ? step.description.join(" ")
                        : step.description} */}
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden block h-screen"></div>
    </>
  );
}
