import React from 'react';
import ImageOne from '../assets/images/hero-one.jpg';
import ImageTwo from '../assets/images/hero-two.jpg';
import ImageThree from '../assets/images/hero-three.jpg';
import ReactImg from '../assets/images/react.png';
import TypescriptImg from '../assets/images/ts.png';
import NextImg from '../assets/images/next.png';

const LandingPage = () => {
  return (
    <div className="page-wrapper flex-1 h-full bg-white flex flex-col items-center justify-center p-8">
      <div className="w-auto h-170 flex flex-row relative border-0 gap-x-0">
        <div className="rounded-none lg:rounded-md z-1 p-4 bg-black/60 backdrop-blur-xs shadow-2xl absolute min-w-full lg:min-w-150 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-0 border-white/40">
          <div className="p-6 border-0 rounded-md bg-transparent shadow-none flex flex-col items-center justify-center">
            <h1 className="text-3xl font-josefin sm:text-5xl font-bold text-white text-center leading-none font-sf">
              Madison Weber
            </h1>
            <div className="flex flex-row gap-x-3 items-center justify-center text-center mt-1">
              <p className="text-gray-200 font-regular text-lg">Frontend Developer</p>
            </div>
            <div className="flex flex-row gap-x-2 items-center mt-2">
              <div className="h-12 w-12 bg-black/90 rounded-xl flex items-center justify-center p-2">
                <img src={ReactImg} />
              </div>
              <div className="h-12 w-12 bg-black/70 rounded-xl flex items-center justify-center  p-2">
                <img src={TypescriptImg} />
              </div>
              <div className="h-12 w-12 bg-black rounded-xl flex items-center justify-center p-2">
                <img
                  className="bg-white rounded-sm"
                  src={NextImg}
                />
              </div>
            </div>
          </div>
        </div>

        <img
          className="w-1/3 object-cover h-full grayscale z-0 hover:grayscale-0 transition hidden sm:block"
          src={ImageOne}
        />
        <img
          className="w-full sm:w-1/3 object-cover h-full grayscale z-0 hover:grayscale-0 transition"
          src={ImageTwo}
        />
        <img
          className="w-1/3 object-cover h-full grayscale z-0 hover:grayscale-0 transition  hidden sm:block"
          src={ImageThree}
        />
      </div>
    </div>
  );
};

export default LandingPage;
