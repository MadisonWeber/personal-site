import { STACK_LIST, CATEGORIES } from '@/constants';
import TechItem from './TechItem';
import AnimatedTitle from '@/components/custom/AnimatedTitle';
import { Code } from 'lucide-react';
import TechItemV2 from './TechItemV2';

const SMALL_CATEGORIES = [CATEGORIES.PLATFORMS, CATEGORIES.MONITORING, CATEGORIES.TOOLING];

const TechStack = ({ isInViewport }: { isInViewport: boolean }) => {
  return (
    <div className="bg-gray-200 page-wrapper flex flex-col items-center justify-center p-10">
      <div className="relative">
        <AnimatedTitle
          title="Tech Stack"
          isActive={isInViewport}
          Icon={Code}
        />
        <div
          className={`bg-transparent w-[96vw] md:w-180 rounded-md shadow-none p-0 min-h-220 flex flex-col items-start justify-start delay-100 duration-500 ${
            isInViewport ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="w-full flex-1 min-h-100 h-100 gap-2 flex flex-col gap-y-2 p-0 items-start justify-start">
            {Object.values(CATEGORIES).map(category => (
              <div className="w-full flex flex-col items-start gap-y-2 pb-3">
                <p className="text-sm text-gray-400 tracking-widest uppercase">{category}</p>
                <div className="w-full flex flex-row flex-wrap gap-4">
                  {STACK_LIST.filter(item => item.category === category).map(item => (
                    <TechItemV2
                      item={item}
                      key={item?.name}
                      // isSmall={SMALL_CATEGORIES.includes(item.category)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
