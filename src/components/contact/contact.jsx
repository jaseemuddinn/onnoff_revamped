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

  const handleClick = () => {
    window.location.href = 'mailto:contact@onnoff.in';
  }

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
      className="lg:min-h-screen h-auto my-20 lg:my-0 flex items-center justify-center "
      ref={containerRef}
    >
      <motion.div
        className="relative text-center w-full leading-none"
      >
        <p className="text-3xl  font-poppins text-black">
          Click to
        </p>
        {/* Full-width "Contact Us" text */}
        <div onClick={handleClick} className="inset-0 flex items-center justify-center cursor-pointer">
          <span
            ref={textRef}
            className="whitespace-nowrap text-center font-bold uppercase text-transparent text-stroke-3 font-montserrat "
          >
            Contact Us
          </span>
        </div>

        
        <p className="text-xl font-poppins text-black">
          Drop us a line & we respond faster than light
        </p>
      </motion.div>
    </div>
  )
}