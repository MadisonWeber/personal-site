import type { LucideIcon } from 'lucide-react';

const AnimatedTitle = ({
  title,
  isActive,
  Icon,
}: {
  title: string;
  isActive: boolean;
  Icon: LucideIcon;
}) => {
  return (
    <div
      className={`
    flex gap-x-3 absolute -top-16 left-0 py-2 px-4
    bg-linear-to-br border-0 from-white via-gray-100 to-white 
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
    shadow-sm rounded-sm items-center  border-gray-50 dark:border-gray-700 justify-center mr-auto
    transition-all duration-400 ease-out
    ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
  `}
    >
      <Icon
        className={`${
          isActive ? 'text-sky-700' : 'text-gray-300'
        } transition-colors delay-100 duration-300`}
        height={20}
        width={20}
      />
      <h3
        className={`${
          isActive ? 'text-black dark:text-white' : 'text-gray-400'
        } font-josefin text-xl font-semibold tracking-wider -mb-1 transition-colors delay-200`}
      >
        {title}
      </h3>
    </div>
  );
};

export default AnimatedTitle;
