import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import HOUSING_IMG from '@/assets/images/projects/housing-prices.png';
import NHL_IMG from '@/assets/images/projects/nhl-expected-goals.png';
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
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import {
  Atom,
  Smartphone,
  Box,
  Server,
  Monitor,
  ChevronRight,
  ChevronLeft,
  Paintbrush2,
  Github,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const PROJECTS = [
  {
    name: 'Spiffy Mobile App',
    description:
      "Spiffy's flagship product, a cross-platform mobile app written in React Native. Provides all end-user LMS functionality for the Spiffy platform. Primary LMS tool for large canadian retailers Milestones, Second Cup, Pita Pit, and many more.",
    image: SPIFFY_APP_1,
    secondaryImages: [SPIFFY_APP_2, SPIFFY_APP_3, SPIFFY_APP_4, SPIFFY_APP_5],
    filterTags: [
      { Icon: Smartphone, name: 'Mobile Development' },
      { Icon: Atom, name: 'React, React Native' },
      { Icon: Box, name: 'Axios, MobX, Async-Storage, Firebase, Flashlist, ErrorBoundry, Jest' },
      { Icon: Paintbrush2, name: 'CSS, StyleSheets' },
      { Icon: Github, name: 'Git, Github' },
      { Icon: Server, name: 'Apple Appstore, Google Playstore' },
    ],
    isMobile: true,
    githubUrl: 'https://github.com/MadisonWeber',
    visitUrl: 'https://apps.apple.com/ca/app/spiffy/id1138634357',
  },
  {
    name: 'Spiffy Dashboard',
    description:
      "Spiffy's administration dashboard. Used by company admins to create modules, manage teams, view reports, and add content. Written in React using material ui, styled-components, SWR, zustand, chart-js-2.",
    image: SPIFFY_DASH,
    secondaryImages: [DASH_1, DASH_2, DASH_3],
    filterTags: [
      { Icon: Monitor, name: 'Web Development' },
      { Icon: Atom, name: 'React, Javascript' },
      { Icon: Box, name: 'MUI-Datatables, Axios, Zustand' },
      { Icon: Paintbrush2, name: 'Material-UI, Styled-Components' },
      { Icon: Github, name: 'Git, Github' },
      { Icon: Server, name: 'Netlifty' },
    ],
    isMobile: false,

    githubUrl: 'https://github.com/MadisonWeber',
    visitUrl: 'https://dashboard.withspiffy.com/',
  },
  {
    name: 'Spiffy Web App',
    description:
      "Spiffy's administration dashboard. Used by company admins to create modules, manage teams, view reports, and add content. Written in React using material ui, styled-components, SWR, zustand, chart-js-2.",
    image: SPIFFY_DASH,
    secondaryImages: [DASH_1, DASH_2, DASH_3],
    filterTags: [
      { Icon: Monitor, name: 'Web Development' },
      { Icon: Atom, name: 'React, Javascript' },
      { Icon: Box, name: 'Axios, Zustand, Context, Formik' },
      { Icon: Paintbrush2, name: 'Material-UI, Styled-Components' },
      { Icon: Github, name: 'Git, Github' },
      { Icon: Server, name: 'Netlifty' },
    ],
    isMobile: false,

    githubUrl: 'https://github.com/MadisonWeber',
    visitUrl: 'https://dashboard.withspiffy.com/',
  },
  {
    name: 'Oliver Certifications Ecommerce Site',
    description:
      'Ecommerce site created to allow for the purchase of certificiations for Oliver Solutions. Complete stripe payment integration. Written in React with Tailwind, Shadcn & Zustand.',
    image: OLIVER_CERT,
    secondaryImages: null,
    filterTags: [
      { Icon: Monitor, name: 'Web Development' },
      { Icon: Atom, name: 'React, Typescript' },
      { Icon: Box, name: 'Axios, Zustand, Context, Formik' },
      { Icon: Paintbrush2, name: 'Material-UI, Styled-Components' },
      { Icon: Github, name: 'Git, Github' },
      { Icon: Server, name: 'Netlifty' },
    ],
    isMobile: false,
    githubUrl: '',
    visitUrl: 'https://certifications-staging.withspiffy.com/',
  },
  {
    name: 'Data Science Projects',
    description:
      'Fun machine learning and visualization i worked on as a hobby project. Analysis and visualization of how goals are scored in the NHL.',
    image: NHL_IMG,
    secondaryImages: [HOUSING_IMG],
    filterTags: [
      { Icon: Monitor, name: 'Data Science' },
      { Icon: Atom, name: 'R, R-Studio' },
      { Icon: Box, name: 'Data Cleaning, Maching Learning, Statistics, Data Visualization' },
    ],
    isMobile: false,
    githubUrl: '',
    visitUrl: 'https://www.kaggle.com/code/madison88/nhl-expected-goals-model-and-heat-maps/report',
  },

  {
    name: 'Other Projects',
    description:
      'A bunch of website layout projects i have completed. Practicing advanced CSS, responsiveness and pixel perfect layouts.',
    image: '',
    secondaryImages: null,
    filterTags: null,
    isMobile: false,
    githubUrl: '',
    visitUrl: null,
  },
];

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

  console.log('current is', current);

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
              {PROJECTS.map(p => (
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
              className="bg-slate-700 border-none rounded-full h-10 w-10 shadow-md"
            >
              <ChevronLeft className="text-white" />
            </Button>
            <div className="min-w-20 p-1.5 rounded-lg shadow-md flex items-center justify-center bg-gray-100 gap-x-2">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.name}
                  className={`h-3 w-3 rounded-full transition ${
                    current === i ? 'bg-slate-700' : 'bg-gray-200'
                  }`}
                  onClick={() => api?.scrollTo(i)}
                />
              ))}
            </div>
            <Button
              onClick={() => api?.scrollNext()}
              disabled={!api?.canScrollNext()}
              className="bg-slate-700 border-none rounded-full h-10 w-10 shadow-md p-0 "
            >
              <ChevronRight
                className="text-white"
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

{
  /* <CarouselNext className="bg-gray-100 border-none rounded-full h-12 w-12 shadow-md -right-16" /> */
}
