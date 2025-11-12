import React from "react";
import ImageOne from "../assets/images/hero-one.jpg";
import ImageTwo from "../assets/images/hero-two.jpg";
import ImageThree from "../assets/images/hero-three.jpg";

const LandingPage = () => {
  return (
    <div className="page-wrapper flex-1 h-full bg-white flex flex-col items-center justify-center p-8">
      <div className="w-300 h-160  flex flex-row relative">
        <div className="rounded-2xl z-1 p-6 bg-black/60 backdrop-blur-xs shadow-2xl absolute min-w-150 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white/10">
          <div className="p-6 border-0 rounded-md bg-transparent shadow-none flex flex-col items-center justify-center">
            <h1 className="text-2xl font-josefin md:text-5xl font-bold text-white text-center leading-none font-sf">
              Madison Weber
            </h1>
            <div className="flex flex-row gap-x-3 items-center justify-center">
              <p className="text-gray-300 text-lg font-josefin">
                Frontend Developer
              </p>
              <p className="text-blue-400">|</p>
              <p className="text-gray-300 text-lg font-josefin">
                React & React Native
              </p>
            </div>
          </div>
        </div>

        <img
          className="flex object-cover w-100 h-full grayscale z-0 hover:grayscale-0 transition"
          src={ImageOne}
        />
        <img
          className="flex object-cover w-100 h-full grayscale z-0 hover:grayscale-0 transition"
          src={ImageTwo}
        />
        <img
          className="flex object-cover w-100 h-full grayscale z-0 hover:grayscale-0 transition"
          src={ImageThree}
        />
      </div>
    </div>
  );
};

export default LandingPage;
