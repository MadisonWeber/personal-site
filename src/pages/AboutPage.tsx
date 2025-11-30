import MY_PICTURE from '../assets/images/its-me.jpg';
import {
  Calendar,
  MailIcon,
  MapPin,
  SproutIcon,
  University,
  Code,
  Brain,
  Atom,
  Paintbrush,
  Monitor,
  ShieldCheck,
} from 'lucide-react';
import { clsx } from 'clsx';

const ABOUT_ITEMS = [
  {
    Icon: University,
    title: 'University of Guelph',
  },
  {
    Icon: MailIcon,
    title: 'madison.weber.dev@gmail.com',
  },
  {
    Icon: MapPin,
    title: 'Toronto, Ontario, Canada',
  },
  {
    Icon: Calendar,
    title: 'Dec 4th, 1991',
  },
  {
    Icon: SproutIcon,
    title: 'Hockey, Golf, Design, Plants',
  },
];

const bulletClass = 'text-gray-400';
const textClass = 'text-sm';
const highlightClass = 'font-semibold text-black';

const AboutPage = () => {
  return (
    <div className="page-wrapper bg-gray-100 flex flex-col items-center justify-center">
      <div className="p-4 sm:p-6 md:p-8 min-h-110 w-[96vw] md:w-180 shadow-xl bg-white rounded-md flex flex-col items-start justify-start">
        <h3 className="text-2xl font-semibold font-josefin text-black">About</h3>
        <div className="min-h-4" />
        <div className="flex flex-col-reverse sm:flex-row gap-8 items-start justify-start w-full">
          <div className="flex-1 h-full w-full flex flex-col flex-grow items-start justify-start bg-gray-100 flex-wrap max-h-100  shadow-lg rounded-xl p-2.5 gap-y-2.5">
            {ABOUT_ITEMS.map(item => (
              <div
                key={item.title}
                className="flex gap-x-3 flex-row bg-white items-center justify-start w-full h-11  p-3 rounded-md shadow-md"
              >
                <item.Icon
                  height={18}
                  width={18}
                  className="text-gray-400"
                />
                <p className="text-sm">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="p-2 bg-gray-200 rounded-xl shadow-xl shrink-0">
            <img
              src={MY_PICTURE}
              className="aspect-7/9 h-26 sm:h-40 object-fit rounded-xl"
            />
          </div>
        </div>
        <div className="p-2.5 max-w-164 w-full bg-gray-100 shadow-lg rounded-xl mt-8">
          <div className="p-4 pl-3 bg-white rounded-xl shadow-md">
            <div className="flex flex-start items-center justify-start gap-x-2 mt-0">
              <Code
                height={14}
                width={14}
                className={bulletClass}
              />
              <p className={clsx(textClass)}>
                Front-end developer with{' '}
                <b className={clsx(highlightClass)}>five years of professional experience.</b>
              </p>
            </div>
            <div className="flex flex-start items-center justify-start gap-x-2 mt-1">
              <Atom
                height={14}
                width={14}
                className={bulletClass}
              />
              <p className={clsx(textClass)}>
                Extensive experience in <b className={clsx(highlightClass)}>React</b> and{' '}
                <b className={clsx(highlightClass)}>React Native</b> ecosystems.
              </p>
            </div>
            <div className="flex flex-start items-center justify-start gap-x-2 mt-1">
              {/* <ChevronRight className={clsx(bulletClass)} /> */}
              <Monitor
                height={14}
                width={14}
                className={bulletClass}
              />
              <p className={clsx(textClass)}>
                Proven ability to build fast & beautiful web applications.
              </p>
            </div>
            <div className="flex flex-start items-center justify-start gap-x-2 mt-1">
              {/* <div className={clsx(bulletClass)} /> */}
              <Paintbrush
                height={14}
                width={14}
                className={bulletClass}
              />
              <p className={clsx(textClass)}>
                Excellent understanding of <b className={clsx(highlightClass)}>CSS</b> and{' '}
                <b className={clsx(highlightClass)}>responsive design principles</b>.
              </p>
            </div>
            <div className="flex flex-start items-center justify-start gap-x-2 mt-1">
              <Brain
                height={14}
                width={14}
                className={bulletClass}
              />
              <p className={clsx(textClass)}>
                <b className={clsx(highlightClass)}>Lifelong learner,</b> who strives to hone his
                craft and build his domain knowledge.
              </p>
            </div>
            <div className="flex flex-start items-center justify-start gap-x-2 mt-1">
              <ShieldCheck
                height={14}
                width={14}
                className={bulletClass}
              />
              <p className={clsx(textClass)}>
                Strong history of <b>releasing production apps</b> to Appstore and Playstore.
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-6" />
      </div>
    </div>
  );
};

export default AboutPage;
