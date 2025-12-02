import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

type ItemProps = {
  name: string;
  img: string;
  description: string;
};

const TechItemV2 = ({ item }: { item: ItemProps }) => {
  return (
    <HoverCard
      openDelay={150}
      closeDelay={0}
    >
      <HoverCardTrigger asChild>
        <div className="p-1.5 rounded-lg bg-gray-50 shadow-lg flex items-center justify-center gap-x-1">
          <div className="flex gap-x-2 items-center bg-white justify-center p-1 pr-2.5 rounded-md shadow-md hover:bg-gray-50 hover:shadow-sm cursor-pointer border transition duration-200  border-gray-100  hover:border-sky-800">
            <img
              className="cover p-0.5 w-10 h-10 border border-gray-200 rounded-full bg-white"
              src={item.img}
            />
            <span className="font-semibold text-sm text-sky-950">{item.name}</span>
            <div />
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        asChild
        sideOffset={10}
      >
        <div className="min-h-28 w-100 rounded-xl bg-white flex flex-row item-start justify-start gap-x-2 shadow-xl border-0">
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

export default TechItemV2;
