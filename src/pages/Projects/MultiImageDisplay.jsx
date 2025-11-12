import React from "react";

const MultiImageDisplay = ({ secondaryImages, setActiveImg, activeImg }) => {
  return (
    <div className="flex flex-row gap-x-2 mt-4 mb-4">
      {secondaryImages?.map((image) => (
        <div onClick={() => setActiveImg(image)}>
          <img
            className={`h-14 w-14 rounded-md bg-gray-100 object-contain border ${
              activeImg === image
                ? "border-secondary-500 border-2"
                : "border-gray-300"
            }`}
            src={image}
          />
        </div>
      ))}
    </div>
  );
};

export default MultiImageDisplay;
