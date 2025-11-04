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
    <div className="bg-gray-100 page-wrapper flex flex-col items-center justify-center">
      <div className="bg-white rounded-md shadow-xl p-8 min-h-140 min-w-180 flex flex-col items-start justify-start">
        <h3 className="text-2xl font-semibold font-josefin text-black">
          Projects
        </h3>
      </div>
    </div>
  );
};

export default ProjectPage;
