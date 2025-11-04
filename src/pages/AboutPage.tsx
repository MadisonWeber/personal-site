import React from "react";
import MY_PICTURE from "../assets/images/its-me.jpg";
import {
  Calendar,
  Library,
  MailIcon,
  MapPin,
  SproutIcon,
  University,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="page-wrapper bg-gray-100 flex flex-col items-center justify-center">
      {/* <div className="bg-white rounded-md shadow-md h-30 w-30" /> */}
      <div className="p-8 min-h-80 min-w-160 border-0 shadow-xl bg-white rounded-md flex flex-col items-start justify-start">
        <h3 className="text-2xl font-semibold font-josefin text-black">
          About
        </h3>
        <div className="min-h-4" />
        <div className="flex flex-row gap-x-8 items-start justify-start w-full">
          <div className="flex-1 h-full flex flex-col items-start justify-start pt-2">
            <div>
              <University />

              <p>University of Guelph</p>
            </div>
            <div>
              <MailIcon />
              <p>madison.weber.dev@gmail.com</p>
            </div>
            <div>
              <MapPin />
              <p>Toronto, Ontario, Canada</p>
            </div>
            <div>
              <Calendar />
              <p>Dec 4th 1991</p>
            </div>
            <div>
              <SproutIcon />
              <p>Hockey, Golf, Design, Plants</p>
            </div>
            {/* <p className="mt-2 text-gray-500 text-md font-sf">
              Say some stuff here about how awesome you are and how hard you
              try.
            </p> */}
          </div>
          <div className="p-2 bg-gray-200 rounded-xl shadow-xl shrink-0">
            <img
              src={MY_PICTURE}
              className="aspect-7/9 h-40 object-fit rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
