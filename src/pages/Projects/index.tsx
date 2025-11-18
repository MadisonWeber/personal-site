import React from 'react';
import ProjectCard from './ProjectCard';
import HOUSING_IMG from '../../assets/images/projects/housing-prices.png';
import NHL_IMG from '../../assets/images/projects/nhl-expected-goals.png';
import SPIFFY_DASH from '@/assets/images/projects/spiffy-dash.avif';
import OLIVER_CERT from '@/assets/images/projects/oliver-certs.png';
import SPIFFY_APP_1 from '@/assets/images/projects/SpifyApp1.png';
import SPIFFY_APP_2 from '@/assets/images/projects/SpiffyApp2.png';
import SPIFFY_APP_3 from '@/assets/images/projects/SpiffyApp3.png';
import SPIFFY_APP_4 from '@/assets/images/projects/SpiffyApp4.png';
import SPIFFY_APP_5 from '@/assets/images/projects/SpiffyApp5.png';
import DASH_1 from '@/assets/images/projects/dash1.png';
import DASH_2 from '@/assets/images/projects/dash2.png';
import DASH_3 from '@/assets/images/projects/dash3.png';

const PROJECTS = [
  {
    name: 'Spiffy Mobile App',
    description:
      "Spiffy's flagship product, a cross-platform mobile app written in React Native. Provides all end-user LMS functionality for the Spiffy platform. Leveraged by large canadian retailers Milestones, Second Cup, Pita Pit and many others for their employee training.",
    image: SPIFFY_APP_1,
    secondaryImages: [SPIFFY_APP_2, SPIFFY_APP_3, SPIFFY_APP_4, SPIFFY_APP_5],
    filterTags: ['Mobile Development', 'React', 'React Native', 'Mobx'],
    githubUrl: null,
    visitUrl: 'https://apps.apple.com/ca/app/spiffy/id1138634357',
  },
  {
    name: 'Spiffy Dashboard',
    description:
      "Spiffy's administration dashboard. Used by company admins to create modules, manage teams, view reports, and add content. Written in React using material ui, styled-components, SWR, zustand, chart-js-2.",
    image: SPIFFY_DASH,
    secondaryImages: [DASH_1, DASH_2, DASH_3],
    filterTags: null,
    githubUrl: '',
    visitUrl: 'https://dashboard.withspiffy.com/',
  },
  {
    name: 'Spiffy Web App',
    description:
      "Spiffy's administration dashboard. Used by company admins to create modules, manage teams, view reports, and add content. Written in React using material ui, styled-components, SWR, zustand, chart-js-2.",
    image: SPIFFY_DASH,
    secondaryImages: [DASH_1, DASH_2, DASH_3],
    filterTags: null,
    githubUrl: '',
    visitUrl: 'https://dashboard.withspiffy.com/',
  },
  {
    name: 'Oliver Certifications Ecommerce Site',
    description:
      'Ecommerce site created to allow for the purchase of certificiations for Oliver Solutions. Complete stripe payment integration. Written in React with Tailwind, Shadcn & Zustand.',
    image: OLIVER_CERT,
    secondaryImages: null,
    filterTags: null,
    githubUrl: '',
    visitUrl: 'https://certifications-staging.withspiffy.com/',
  },
  {
    name: 'NHL Expected Goals',
    description:
      'Fun machine learning and visualization i worked on as a hobby project. Analysis and visualization of how goals are scored in the NHL.',
    image: NHL_IMG,
    secondaryImages: null,
    filterTags: null,
    githubUrl: '',
    visitUrl: 'https://www.kaggle.com/code/madison88/nhl-expected-goals-model-and-heat-maps/report',
  },
  {
    name: 'Predicting Housing Prices',
    description:
      "This is a notebook i wrote in R-Markdown, showing the data-wrangling and modelling performed for my submission in the Kaggle competition 'House Prices: Advanced Regression Techniques'. At the time, it was in the top 5% of all entries.",
    image: HOUSING_IMG,
    secondaryImages: null,
    filterTags: null,
    githubUrl: 'https://www.kaggle.com/madison88/top-5-house-price-pred-xgboost-neuralnet-glmnet',
    visitUrl:
      'https://www.kaggle.com/code/madison88/top-5-house-price-pred-xgboost-neuralnet-glmnet',
  },
  {
    name: 'Other Projects',
    description:
      'A bunch of website layout projects i have completed. Practicing advanced CSS, responsiveness and pixel perfect layouts.',
    image: '',
    secondaryImages: null,
    filterTags: null,
    githubUrl: '',
    visitUrl: null,
  },
];

const ProjectPage = () => {
  return (
    <div className="bg-gray-100 page-wrapper flex flex-col items-center justify-center p-10">
      <div className="bg-transparent rounded-md shadow-none p-8 min-h-140 min-w-180 max-w-200 flex flex-col items-start justify-start">
        <h3 className="text-2xl font-semibold font-josefin text-black">Projects</h3>
        <div className="flex-1 w-full flex flex-row flex-wrap gap-y-4 pt-3">
          {PROJECTS.map(project => (
            <ProjectCard
              project={project}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
