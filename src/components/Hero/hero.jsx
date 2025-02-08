import React from "react";

function Hero() {
  return (
    <div className="w-full relative top-0 h-screen flex flex-col items-center justify-center">
      <div className="leading-none rotate-90 md:rotate-0">
        <p className="text-left lg:text-4xl md:text-3xl text-xl font-poppins">Creativity is a switch</p>
        <p className="lg:text-[228px] md:text-9xl text-9xl text-center font-bold font-montserrat">ONNOFF</p>
        <p className="text-right lg:text-4xl md:text-3xl text-xl font-poppins">as you go</p>
      </div>
    </div>
  );
}

export default Hero;
