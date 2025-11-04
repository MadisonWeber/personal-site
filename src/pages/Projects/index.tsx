import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    name: "Spiffy",
    description: "Some descriptions here from the oliver stuff",
    image: "image obj",
    filterTags: [],
    githubUrl: "",
  },
  {
    name: "Oliver",
    description: "Some descriptions here from the oliver stuff",
    image: "image obj",
    filterTags: [],
    githubUrl: "",
  },
  {
    name: "NHL Expected Goals",
    description: "Some descriptions here from the oliver stuff",
    image: "image obj",
    filterTags: [],
    githubUrl: "",
  },
  {
    name: "Predicting Titanic Survivors",
    description: "Some descriptions here from the oliver stuff",
    image: "image obj",
    filterTags: [],
    githubUrl: "",
  },
  {
    name: "Predicting Housing Prices",
    description:
      "This is a notebook i wrote in R-Markdown, showing the data-wrangling and modelling performed for my submission in the Kaggle competition 'House Prices: Advanced Regression Techniques'. At the time, it was in the top 5% of all entries.",
    image: "image obj",
    filterTags: [],
    githubUrl:
      "https://www.kaggle.com/madison88/top-5-house-price-pred-xgboost-neuralnet-glmnet",
  },
  {
    name: "Emjoi This Website",
    description:
      "Using HTML, CSS and Javascript, this is a mock website for a popular skateboarding company. It includes a shopping cart and a slideshow.",
    image: "image obj",
    filterTags: [],
    githubUrl: "https://github.com/MadisonWeber/enjoi_skateboarding",
  },
];

const ProjectPage = () => {
  return (
    <div className="bg-gray-300 page-wrapper p-12">
      <span className="text-heading-3">Projects</span>
      <div className="min-h-8" />
      <div className="min-h-140 w full border-0 flex flex-col gap-y-8 items-start justify-start">
        {PROJECTS.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
