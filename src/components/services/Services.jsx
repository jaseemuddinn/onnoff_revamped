import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

function Services() {
  return (
    <section className="b-zinc-950 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <h2 className="text-3xl md:text-5xl xxl:text-7xl font-poppins">A <span className=""> creative agency </span> that specializes in </h2>
        </div>
        <Link heading="Creative Direction" />
        <Link heading="Video Production" />
        <Link heading="Visual Design" />
        <Link heading="Branding" />
        <Link heading="Web Dev" />
        <h1 className="relative mt-6 text-3xl md:text-4xl xxl:text-6xl font-poppins">Caffeine and Creativity comes together so let's meet - <span className="underline"><a href="mailto:contact@onnoff.in">contact@onnoff.in</a></span> </h1>
      </div>
    </section>
  );
}

const Link = ({ heading }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <>
      <div>
        <motion.a
          ref={ref}
          onMouseMove={handleMouseMove}
          initial="initial"
          whileHover="whileHover"
          className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-900 md:py-8"
        >
          <div>
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: -16 },
              }}
              transition={{
                type: "spring",
                staggerChildren: 0.075,
                delayChildren: 0.25,
              }}
              className="relative z-10 block text-3xl font-bold text-neutral-900 transition-colors duration-500 group-hover:text-neutral-900 md:text-6xl lg:text-9xl font-montserrat"
            >
              {heading.split("").map((l, i) => (
                <motion.span
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  transition={{ type: "spring" }}
                  className="inline-block"
                  key={i}
                >
                  {l}
                </motion.span>
              ))}
            </motion.span>
          </div>

          <motion.div
            variants={{
              initial: {
                x: "25%",
                opacity: 0,
              },
              whileHover: {
                x: "0%",
                opacity: 1,
              },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 p-4"
          ></motion.div>
        </motion.a>
      </div>
    </>
  );
};

export default Services;
