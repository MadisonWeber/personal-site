import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Link, type LucideIcon } from 'lucide-react';
import MultiImageDisplay from './MultiImageDisplay';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type FilterTag = {
  Icon: LucideIcon;
  name: string;
};

type ProjectProps = {
  filterTags: FilterTag[];
  secondaryImages?: string[];
  description: string;
  name: string;
  image: string;
  visitUrl?: string;
  isMobile: boolean;
};

const DisplayAppImages = ({ imageArray }: { imageArray: string[] }) => (
  <div className="flex gap-x-4 w-full overflow-auto">
    {imageArray.map(src => (
      <LazyLoadImage
        className="h-50 aspect-9/19 border rounded-xl border-gray-300 shadow-md"
        src={src}
        alt="project"
        effect="blur"
      />
    ))}
  </div>
);

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [activeImg, setActiveImg] = useState(project?.image);

  return (
    <div className="w-full p-5">
      <div className="min-h-164 w-full rounded-md p-5 bg-gray-50 shadow-lg flex border border-gray-100 flex-col items-start justify-start">
        <div className="p-2 flex-1 flex flex-col items-start justify-start">
          <p className="text-lg font-semibold text-black">{project.name}</p>
          <p className="text-sm text-gray-500 max-w-9/10 mt-4">{project.description}</p>
          <div className="flex flex-col gap-2 gap-y-0.5 mt-2 flex-wrap py-2">
            {project?.filterTags &&
              project.filterTags.map(({ Icon, name }) => (
                <div className="flex gap-x-1 items-center">
                  <Icon className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-400 font-light">{name}</span>
                </div>
              ))}
          </div>

          <div className="min-h-4" />
          {!project.isMobile && project?.secondaryImages && (
            <MultiImageDisplay
              setActiveImg={setActiveImg}
              activeImg={activeImg}
              secondaryImages={[project?.image, ...project.secondaryImages]}
            />
          )}
          {project.isMobile && (
            <DisplayAppImages imageArray={[project.image, ...(project?.secondaryImages ?? [])]} />
          )}
          {project.isMobile && (
            <>
              <div className="w-full flex sm:flex-row flex-col gap-x-4 gap-y-1 p-3 mt-4">
                <span className="text-xs font-light text-gray-400">
                  ⭐ <b>4.4</b>/5 Appstore Rating
                </span>
                <span className="text-xs font-light text-gray-400">
                  📝 <b>30,000</b> submissions per week
                </span>
                <span className="text-xs font-light text-gray-400">
                  🙂 Crash Rate: <b>~0.1%</b>
                </span>
              </div>
            </>
          )}
          <div className="mt-auto ml-auto">
            <a
              href={project?.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                disabled={!project?.visitUrl}
                className="cursor-pointer rounded-full bg-white hover:bg-blue-50 transition duration-200 shadow-md border-black text-black font-medium h-10 w-10l"
              >
                <Link
                  className="text-sky-700 hover-group:text-white"
                  height={20}
                  width={20}
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
