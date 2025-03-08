import React from "react";
import { BoxReveal } from "../magicui/box-reveal";

function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto relative top-0 h-screen flex flex-col items-center justify-center">
        <div className="leading-none rotate-90 md:rotate-0">
          <p className="text-left lg:text-4xl md:text-3xl text-xl font-poppins">
            Creativity is a switch
          </p>
          <BoxReveal boxColor="#000" duration={0.5}>
            <p className="lg:text-[228px] md:text-9xl text-9xl text-center font-bold font-montserrat">
              ONNOFF
            </p>
          </BoxReveal>
          <p className="text-right lg:text-4xl md:text-3xl text-xl font-poppins">
            as you go
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
