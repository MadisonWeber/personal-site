import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Github, Link, Tag } from 'lucide-react';
import MultiImageDisplay from './MultiImageDisplay';

type ProjectProps = {
  project: Project;
  filterTags: string[];
  secondaryImages?: string[];
  description: string;
  name: string;
  image: string;
  githubUrl?: string;
  visitUrl?: string;
};

type Project = {
  project: ProjectProps;
};

const ProjectCard = ({ project }: Project) => {
  const [activeImg, setActiveImg] = useState(project?.image);

  return (
    <div className="w-full min-h-64  border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg p-4 flex flex-row">
      <div className="p-2 flex-1 flex flex-col items-start justify-start">
        <p className="text-lg font-semibold">{project.name}</p>
        <p className="mt-2 text-sm text-gray-500 max-w-9/10">{project.description}</p>
        {/* 
        {project?.filterTags && (
          <div className="w-fit border-0 rounded-md min-h-10 flex gap-x-2 items-center justify-start mt-2">
            {project.filterTags.map(tag => (
              <div className="p-1.5 px-1.5 flex flex-row items-center justify-center gap-x-1.5 bg-gray-50 rounded-lg border-1 border-gray-200">
                <Tag
                  height={12}
                  width={12}
                  className="text-gray-400"
                />
                <span className="text-xs font-medium text-gray-500">{tag}</span>
              </div>
            ))}
          </div>
        )} */}
        {project?.secondaryImages && (
          <MultiImageDisplay
            setActiveImg={setActiveImg}
            activeImg={activeImg}
            secondaryImages={[project?.image, ...project.secondaryImages]}
          />
        )}
        <div className="mt-auto mr-auto flex gap-x-2 pr-4">
          <a
            href={project?.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              disabled={!project?.githubUrl}
              className="bg-white cursor-pointer border-black text-black font-medium tracking-wide hover:bg-gray-100"
            >
              <Github className={project?.githubUrl ? 'text-accent-500' : 'text-gray-300'} />
              Github
            </Button>
          </a>
          <a
            href={project?.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              disabled={!project?.visitUrl}
              className="bg-white text-black cursor-pointer border-black font-medium tracking-wide hover:bg-gray-100"
            >
              <Link
                className="text-blue-400"
                height={20}
                width={20}
              />
              Visit
            </Button>
          </a>
        </div>
      </div>
      <img
        src={activeImg || 'https://picsum.photos/300/300'}
        className="h-full bg-gray-100 rounded-lg shrink-0 min-w-60 max-w-60 max-h-60 ml-auto object-contain"
      />
    </div>
  );
};

export default ProjectCard;
