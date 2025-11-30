import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Wrapper = 'bg-gray-50 p-1 rounded-xl shadow-md';

const WrapperSmall = 'bg-gray-50 p-1 rounded-xl shadow-md';

const ItemStyle =
  'w-19 h-19 hover:shadow-none shadow-lg hover:bg-gray-50 cursor-pointer bg-white transition-all duration-300 rounded-xl p-0 border border-gray-100 flex flex-col items-center justify-center';

const ImageStyle =
  'object-contain p-2 h-auto w-8/9 aspect-1/1 p-0 border-gray-100 rounded-full border-1 bg-white';

const ItemStyleSmall =
  'w-15 h-15 hover:shadow-none shadow-lg hover:bg-gray-50 cursor-pointer bg-white transition-all duration-300 rounded-xl p-0 border border-gray-100 flex flex-col items-center justify-center';

const ImageStyleSmall =
  'object-contain p-0.5 h-auto w-8/9 aspect-1/1 p-0 border-gray-100 rounded-full border-1 bg-white';

type ItemProps = {
  name: string;
  img: string;
  description: string;
};

// TODO -> clean up the css styling
const TechItem = ({ item, isSmall = false }: { item: ItemProps; isSmall?: boolean }) => {
  return (
    <HoverCard
      openDelay={150}
      closeDelay={0}
    >
      <HoverCardTrigger asChild>
        <div
          key={item.name}
          className={isSmall ? WrapperSmall : Wrapper}
        >
          <div
            key={item.name}
            className={isSmall ? ItemStyleSmall : ItemStyle}
          >
            <img
              src={item.img}
              className={isSmall ? ImageStyleSmall : ImageStyle}
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
