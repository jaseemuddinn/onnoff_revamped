// import React, { useEffect, useRef } from "react";

// export const Contact = () => {
//   const containerRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     resizeText();

//     window.addEventListener("resize", resizeText);

//     return () => {
//       window.removeEventListener("resize", resizeText);
//     };
//   }, []);

//   const resizeText = () => {
//     const container = containerRef.current;
//     const text = textRef.current;

//     if (!container || !text) {
//       return;
//     }

//     const containerWidth = container.offsetWidth;
//     let min = 1;
//     let max = 2500;

//     while (min <= max) {
//       const mid = Math.floor((min + max) / 2);
//       text.style.fontSize = mid + "px";

//       if (text.offsetWidth <= containerWidth) {
//         min = mid + 1;
//       } else {
//         max = mid - 1;
//       }
//     }

//     text.style.fontSize = max + "px";
//   };

//   return (
//     <div
//       className="flex h-screen relative w-full items-center overflow-hidden "
//       ref={containerRef}
//     >
//       <span
//         className="bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-black"
//         ref={textRef}
//       >
//         Contact Us
//       </span>
//     </div>
//   );
// };


'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [0, 500], [15, -15])
  const rotateY = useTransform(x, [0, 500], [-15, 15])

  // Resize text to fit container width
  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current
      const text = textRef.current

      if (!container || !text) return

      const containerWidth = container.offsetWidth
      let min = 1
      let max = 2500

      while (min <= max) {
        const mid = Math.floor((min + max) / 2)
        text.style.fontSize = mid + 'px'

        if (text.offsetWidth <= containerWidth) {
          min = mid + 1
        } else {
          max = mid - 1
        }
      }

      text.style.fontSize = max + 'px'
    }

    resizeText()
    window.addEventListener('resize', resizeText)
    return () => window.removeEventListener('resize', resizeText)
  }, [])

  return (
    <div
      className="lg:min-h-screen h-auto my-20 lg:my-0 flex items-center justify-center cursor-pointer"
      ref={containerRef}
      onMouseMove={(e) => {
        const rect = containerRef.current.getBoundingClientRect()
        x.set(e.clientX - rect.left)
        y.set(e.clientY - rect.top)
      }}
    >
      <motion.div
        className="relative text-center w-full"
        style={{ rotateX, rotateY }}
      >
        {/* Full-width "Contact Us" text */}
        <div className="inset-0 flex items-center justify-center">
          <span
            ref={textRef}
            className="whitespace-nowrap text-center font-bold uppercase text-black font-montserrat "
          >
            Contact Us
          </span>
        </div>

        {/* Gradient email link */}
        {/* <motion.a
          href="mailto:hello@onnoff.com"
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 relative inline-block"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          hello@onnoff.com
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-2xl"
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.a> */}

        {/* Subtext */}
        <p className="text-xl font-poppins text-black">
          Drop us a line - we respond faster than light
        </p>
      </motion.div>
    </div>
  )
}