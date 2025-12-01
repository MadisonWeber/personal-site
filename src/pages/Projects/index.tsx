import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { ChevronRight, ChevronLeft, FolderGit2 } from 'lucide-react';
import { PROJECT_LIST } from '@/constants';
import { Button } from '@/components/ui/button';
import AnimatedTitle from '@/components/custom/AnimatedTitle';

const ProjectPage = ({ isInViewport }: { isInViewport: boolean }) => {
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
      <div className="bg-transparent relative min-h-220 w-[96vw] md:w-180 flex flex-col items-center justify-center">
        <div className="relative w-full">
          <AnimatedTitle
            Icon={FolderGit2}
            title="Projects"
            isActive={isInViewport}
          />
          <div
            className={`${
              isInViewport ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            } delay-100 duration-500 bg-gray-200 shadow-xl rounded-lg w-full`}
          >
            <Carousel
              setApi={setApi}
              className="w-full max-w-full"
              opts={{
                align: 'center',
                loop: false,
              }}
            >
              <CarouselContent className="-ml-4">
                {PROJECT_LIST.map(p => (
                  <CarouselItem
                    key={p.name}
                    className="flex justify-center"
                  >
                    <ProjectCard project={p} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4 mt-12">
          <Button
            onClick={() => api?.scrollPrev()}
            disabled={!api?.canScrollPrev()}
            className="bg-white border border-gray-100 rounded-xl h-10 w-10 shadow-md hover:shadow-sm cursor-pointer"
          >
            <ChevronLeft
              className="text-black"
              height={50}
              width={50}
            />
          </Button>
          <div className="min-w-20 p-1.5 rounded-lg shadow-md flex items-center justify-center bg-white gap-x-2">
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
            className="bg-white border border-gray-100 rounded-xl h-10 w-10 shadow-md hover:shadow-sm cursor-pointer"
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
  );
};

export default ProjectPage;
