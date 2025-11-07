import MY_PICTURE from "../assets/images/its-me.jpg";
import {
  Calendar,
  MailIcon,
  MapPin,
  SproutIcon,
  University,
} from "lucide-react";

const ABOUT_ITEMS = [
  {
    Icon: University,
    title: "University of Guelph",
  },
  {
    Icon: MailIcon,
    title: "madison.weber.dev@gmail.com",
  },
  {
    Icon: MapPin,
    title: "Toronto, Ontario, Canada",
  },
  {
    Icon: Calendar,
    title: "Dec 4th, 1991",
  },
  {
    Icon: SproutIcon,
    title: "Hockey, Golf, Design, Plants",
  },
];

const AboutPage = () => {
  return (
    <div className="page-wrapper bg-gray-100 flex flex-col items-center justify-center">
      {/* <div className="bg-white rounded-md shadow-md h-30 w-30" /> */}
      <div className="p-8 min-h-110 min-w-180 border-0 shadow-xl bg-white rounded-md flex flex-col items-start justify-start">
        <h3 className="text-2xl font-semibold font-josefin text-black">
          About
        </h3>
        <div className="min-h-4" />
        <div className="flex flex-row gap-x-8 items-start justify-start w-full">
          <div className="flex-1 h-full flex flex-col items-start justify-start bg-gray-100 flex-wrap max-h-100 border-0 shadow-lg rounded-xl p-2.5 gap-y-2.5">
            {ABOUT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex gap-x-3 flex-row bg-white items-center justify-start w-full h-11 border-0 p-3 rounded-md shadow-md"
              >
                <item.Icon height={18} width={18} className="text-gray-400" />
                <p className="text-sm">{item.title}</p>
              </div>
            ))}
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
