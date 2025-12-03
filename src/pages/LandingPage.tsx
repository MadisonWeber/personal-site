import ImageOne from '../assets/images/hero/hero-one.avif';
import ImageTwo from '../assets/images/hero/hero-two.avif';
import ImageThree from '../assets/images/hero/hero-three.avif';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LandingPage = () => {
  return (
    <div className="page-wrapper flex-1 h-full bg-white flex flex-col items-center justify-center p-8">
      <div className="w-[90vw] max-w-[1800px] h-[76vh] flex flex-row relative border-2 gap-x-0 shadow-lg bg-black/90">
        <div className="rounded-none z-1 p-4 bg-black/60 backdrop-blur-xs shadow-2xl absolute min-w-full h-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
        <LazyLoadImage
          className="w-full object-cover h-full grayscale z-0 hover:grayscale-0 transition hidden sm:block"
          src={ImageOne}
          effect="blur"
          alt="hero-1"
          width="100%"
          height="100%"
        />
        <LazyLoadImage
          className="w-full object-cover h-full grayscale z-0 hover:grayscale-0 transition hidden sm:block"
          src={ImageTwo}
          effect="blur"
          alt="hero-2"
          width="100%"
          height="100%"
        />
        <LazyLoadImage
          className="w-full object-cover h-full grayscale z-0 hover:grayscale-0 transition hidden sm:block"
          src={ImageThree}
          effect="blur"
          alt="hero-3"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default LandingPage;
