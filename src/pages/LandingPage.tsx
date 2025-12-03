import ImageOne from '../assets/images/hero/hero-one.avif';
import ImageTwo from '../assets/images/hero/hero-two.avif';
import ImageThree from '../assets/images/hero/hero-three.avif';

const LandingPage = () => {
  return (
    <div className="page-wrapper flex-1 h-full bg-white flex flex-col items-center justify-center p-8">
      <div className="w-[90vw] max-w-[1800px] h-[76vh] flex flex-row relative border-2 gap-x-0 shadow-lg">
        <div className="rounded-none z-1 p-4 bg-black/60 backdrop-blur-xs shadow-2xl absolute min-w-full h-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-0 border-white/40">
          <div className="p-6 h-full rounded-none bg-transparent shadow-none flex flex-col items-center justify-center">
            <h1 className="text-3xl uppercase font-josefin sm:text-6xl font-bold text-white text-center leading-none">
              Madison Weber
            </h1>
            <div className="flex flex-row gap-x-3 items-center justify-center text-center mt-1">
              <p className="text-gray-300 tracking-widest font-light uppercase text-lg sm:text-2xl text-sf">
                Frontend Developer
              </p>
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
