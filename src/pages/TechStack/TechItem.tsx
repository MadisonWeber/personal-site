import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const ItemStyle =
  'w-20 h-20 hover:shadow-none shadow-lg hover:bg-gray-50 cursor-pointer bg-white transition-all duration-300 rounded-xl p-2 border border-gray-100 flex flex-col items-center justify-center';

const ImageStyle =
  'object-contain p-2 h-auto w-8/9 aspect-1/1 p-0 border-gray-100 rounded-full border-1 bg-white';

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
        <div
          key={item.name}
          className="bg-gray-100 p-2 rounded-xl shadow-md"
        >
          <div
            key={item.name}
            className={ItemStyle}
          >
            <img
              src={item.img}
              className={ImageStyle}
            />
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        asChild
        sideOffset={10}
      >
        <div className="min-h-28 w-100 rounded-xl bg-white flex flex-row item-start border border-gray-100 justify-start gap-x-2 shadow-xl">
          <img
            className="border border-gray-100 object-contain w-10 h-10 rounded-full"
            src={item.img}
          />
          <div className="flex flex-col items-start justify-start p-1 pr-2">
            <span className="font-semibold text-lg">{item?.name}</span>
            <span className="text-sm text-gray-500 mt-1.5">{item.description}</span>
            <div className="h-3" />
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TechItem;
