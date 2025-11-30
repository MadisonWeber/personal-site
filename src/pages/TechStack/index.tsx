import { STACK_LIST, CATEGORIES } from '@/constants';
import TechItem from './TechItem';

const SMALL_CATEGORIES = [CATEGORIES.PLATFORMS, CATEGORIES.MONITORING, CATEGORIES.TOOLING];

const TechStack = () => {
  return (
    <div className="bg-gray-200 page-wrapper flex flex-col items-center justify-center p-10">
      <div className="bg-white w-[96vw] md:w-180 rounded-md shadow-xl p-8 min-h-220 flex flex-col items-start justify-start">
        <div className="flex flex-row gap-x-3 border-0 items-center justify-between w-full">
          <h4 className="text-2xl font-semibold font-josefin text-black">Tech Stack</h4>
        </div>
        {/* <div className="min-h-4" /> */}
        <div className="w-full mt-2 flex-1 min-h-100 h-100 gap-2 flex flex-col gap-y-2 p-4 items-start justify-start">
          {Object.values(CATEGORIES).map(category => (
            <div className="w-full flex flex-col items-start gap-y-1 pb-2">
              <p className="text-xs text-gray-400 tracking-widest uppercase">{category}</p>
              <div className="w-full flex flex-row flex-wrap gap-4">
                {STACK_LIST.filter(item => item.category === category).map(item => (
                  <TechItem
                    item={item}
                    key={item?.name}
                    isSmall={SMALL_CATEGORIES.includes(item.category)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
