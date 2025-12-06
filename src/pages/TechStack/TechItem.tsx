import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type ItemProps = {
  name: string;
  img: string;
  description: string;
};

const TechItem = ({ item }: { item: ItemProps }) => {
  return (
    <HoverCard
      openDelay={150}
      closeDelay={0}
    >
      <HoverCardTrigger asChild>
        <div className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-950 shadow-lg flex items-center justify-center gap-x-1">
          <div className="flex gap-x-2 items-center bg-white dark:bg-slate-900 justify-center p-0.5 sm:p-1 pr-2.5 rounded-md shadow-md hover:bg-gray-50 hover:dark:bg-gray-800 hover:shadow-sm cursor-pointer border transition duration-200  border-gray-100 dark:border-gray-800  hover:border-sky-800">
            <LazyLoadImage
              className="cover p-0.5 h-8 w-8 sm:w-10 sm:h-10 border border-gray-200 rounded-full bg-white"
              src={item.img}
              alt="tech-signature-small"
              effect="blur"
            />
            <span className="font-semibold text-sm text-sky-950 dark:text-gray-100">
              {item.name}
            </span>
            <div />
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        asChild
        sideOffset={10}
      >
        <div className="min-h-28 w-100 rounded-xl bg-white dark:bg-slate-800 flex flex-row item-start justify-start gap-x-2 shadow-xl border-0">
          <LazyLoadImage
            className="border-gray-100 object-contain w-10 h-10 min-w-10 rounded-full"
            src={item.img}
            alt="tech-signature"
            effect="blur"
            width="w-10"
          />

          <div className="grow flex flex-col items-start justify-start pr-2">
            <span className="font-semibold text-lg dark:text-white">{item?.name}</span>
            <span className="text-sm text-gray-500 mt-1.5">{item.description}</span>
            <div className="h-3" />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TechItem;
