import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { PROJECT_LIST } from '@/constants';
import { Button } from '@/components/ui/button';

const ProjectPage = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Set initial current slide
    setCurrent(api.selectedScrollSnap());

    // Listen for slide changes
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="bg-gray-100 page-wrapper flex flex-col items-center justify-center p-10">
      <div className="bg-white rounded-md shadow-xl p-8 min-h-220 w-200 flex flex-col items-start justify-start">
        <h3 className="text-2xl font-semibold font-josefin text-black mb-0">Projects</h3>
        <div className="w-full flex flex-1 items-center justify-start flex-col gap-y-2 p-0">
          <Carousel
            setApi={setApi}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-4">
              {PROJECT_LIST.map(p => (
                <CarouselItem
                  key={p.name}
                  className="pl-4 flex justify-center pt-4 py-8"
                >
                  <ProjectCard project={p} />
                </CarouselItem>
              ))}
              <div className="h-4 bg-blue-500 w-3" />
            </CarouselContent>
          </Carousel>
          <div className="flex items-center justify-center gap-x-4">
            <Button
              onClick={() => api?.scrollPrev()}
              disabled={!api?.canScrollPrev()}
              className="bg-gray-100 border border-gray-100 rounded-xl h-10 w-10 shadow-md hover:shadow-sm cursor-pointer"
            >
              <ChevronLeft
                className="text-black"
                height={50}
                width={50}
              />
            </Button>
            <div className="min-w-20 p-1.5 rounded-lg shadow-md flex items-center justify-center bg-gray-100 gap-x-2">
              {PROJECT_LIST.map((p, i) => (
                <button
                  key={p.name}
                  className={`h-3 w-3 rounded-full transition ${
                    current === i ? 'bg-sky-700' : 'bg-gray-200'
                  }`}
                  onClick={() => api?.scrollTo(i)}
                />
              ))}
            </div>
            <Button
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              className="bg-gray-100 border border-gray-100 rounded-xl h-10 w-10 shadow-md hover:shadow-sm cursor-pointer"
            >
              <ChevronRight
                className="text-black"
                height={18}
                width={18}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
