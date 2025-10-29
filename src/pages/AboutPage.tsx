import React from "react";

const AboutPage = () => {
  return (
    <div className="page-wrapper bg-gray-100 flex items-center justify-center">
      <div className="p-8 min-h-80 min-w-180 border-0 shadow-xl bg-white rounded-md">
        <span className="text-xl font-semibold font-josefin">About</span>
        <p className="mt-2 text-gray-500 text-md font-sf">
          Say some stuff here about how awesome you are and how hard you try.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
