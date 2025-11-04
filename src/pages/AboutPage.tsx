import React from "react";

const AboutPage = () => {
  return (
    <div className="page-wrapper bg-gray-100 flex flex-col items-center justify-center">
      {/* <div className="bg-white rounded-md shadow-md h-30 w-30" /> */}
      <div className="p-8 min-h-80 min-w-180 border-0 shadow-xl bg-white rounded-md flex flex-col items-start justify-start">
        <span className="text-2xl font-semibold font-josefin text-black">
          About
        </span>

        <p className="mt-2 text-gray-500 text-md font-sf">
          Say some stuff here about how awesome you are and how hard you try.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
