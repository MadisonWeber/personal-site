import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type MultiImageDisplayProps = {
  secondaryImages?: string[];
  setActiveImg: React.Dispatch<React.SetStateAction<string>>;
  activeImg: string;
};

const MultiImageDisplay = ({
  secondaryImages,
  setActiveImg,
  activeImg,
}: MultiImageDisplayProps) => {
  return (
    <div className="flex flex-row gap-x-3 items-start">
      <LazyLoadImage
        src={activeImg}
        effect="blur"
        className="h-full bg-gray-100 aspect[16/10] shadow-md rounded-xl border-2 border-sky-700 max-h-60 w-70 sm:w-90 max-w-90 object-fill"
      />
      <div className="h-64 flex flex-col items-start justify-start pt-1 gap-y-1">
        {secondaryImages?.map(image => (
          <div
            onMouseEnter={() => setActiveImg(image)}
            className="cursor-pointer"
          >
            <LazyLoadImage
              className={`h-13 w-13 min-h-13 min-w-13 rounded-xl bg-gray-100 object-cover border ${
                activeImg === image ? 'border-secondary-500 border-2' : 'border-gray-300'
              }`}
              src={image}
              effect="blur"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageDisplay;
