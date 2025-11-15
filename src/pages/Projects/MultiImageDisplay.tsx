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
    <div className="flex flex-row gap-x-2 mt-4 mb-4">
      {secondaryImages?.map(image => (
        <div
          onMouseEnter={() => setActiveImg(image)}
          className="cursor-pointer"
        >
          <img
            className={`h-12 w-12 rounded-xl bg-gray-100 object-contain border ${
              activeImg === image ? 'border-secondary-500 border-2' : 'border-gray-200'
            }`}
            src={image}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiImageDisplay;
