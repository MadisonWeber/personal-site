import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full min-h-64 h-64 bg-white rounded-lg shadow-md hover:shadow-lg p-4 flex flex-row">
      <div className="p-2">
        <p className="text-xl font-bold">{project.name}</p>
        <p className="max-w-200 mt-2 text-md text-gray-500">
          {project.description}
        </p>
      </div>
      <img
        src="https://picsum.photos/300/300"
        className="h-full bg-gray-100 rounded-lg shrink-0 min-w-60 max-w-60 ml-auto object-cover"
      />
    </div>
  );
};

export default ProjectCard;
