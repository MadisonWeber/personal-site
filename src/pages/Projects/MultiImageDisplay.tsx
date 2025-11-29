import React from 'react';

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
      <img
        src={activeImg}
        className="h-full bg-gray-100 aspect[16/10] shadow-md rounded-xl border-2 border-sky-700 max-h-60 w-90 max-w-90 object-fill"
      />
      <div className="h-64 flex flex-col items-start justify-start pt-1 gap-y-1">
        {secondaryImages?.map(image => (
          <div
            onMouseEnter={() => setActiveImg(image)}
            className="cursor-pointer"
          >
            <img
              className={`h-13 w-13 rounded-xl bg-gray-100 object-cover border ${
                activeImg === image ? 'border-secondary-500 border-2' : 'border-gray-300'
              }`}
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageDisplay;
