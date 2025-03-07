import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hook = () => {
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const content4Ref = useRef(null);

  useEffect(() => {
    gsap.to(content1Ref.current, {
      scrollTrigger: {
        trigger: content1Ref.current,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to(content2Ref.current, {
      scrollTrigger: {
        trigger: content2Ref.current,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to(content3Ref.current, {
      scrollTrigger: {
        trigger: content3Ref.current,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
    });
    gsap.to(content4Ref.current, {
      scrollTrigger: {
        trigger: content4Ref.current,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
      opacity: 0,
    });
  }, []);


  return (
    <div className="relative max-w-7xl mx-auto mb-10 px-4 md:px-4 lg:p-0 h-auto text-black font-poppins">
      <div className="text-4xl md:text-6xl font-montserrat lg:text-7xl font-bold text-black mb-10 lg:mb-20">
        Let's Cut the crap. You're Here Because…
      </div>

      <div ref={content1Ref} className="mt-10 lg:mt-20 text-xl md:text-2xl">
        - Your brand's stuck in the friendzone.
      </div>
      <div ref={content2Ref} className="mt-10 lg:mt-20 text-xl md:text-2xl">
        - Your content's drowning in the algorithm abyss.
      </div>
      <div ref={content3Ref} className="mt-10 lg:mt-20 text-xl md:text-2xl">
        - You're tired of agencies that talk like robots and deliver like amateurs.
      </div>
      <div ref={content4Ref} className="mt-10 lg:mt-20 text-xl md:text-2xl">
        <p>We feel you. <span className="font-bold">Marketing Shouldn't Be A Gamble - It Should Be A Damn Good Strategy. </span></p> <br />
        We're OnnOff - A team of brand strategists, content creators, and growth hackers who are here to help you cut through the noise and  knows exactly what it takes to flip the switch on your brand.
      </div>
    </div>
  );
};

export default Hook;