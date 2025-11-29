import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
// App
import SPIFFY_APP_1 from '@/assets/images/projects/spiffyApp/SpifyApp1.png';
import SPIFFY_APP_2 from '@/assets/images/projects/spiffyApp/SpiffyApp2.png';
import SPIFFY_APP_3 from '@/assets/images/projects/spiffyApp/SpiffyApp3.png';
import SPIFFY_APP_4 from '@/assets/images/projects/spiffyApp/SpiffyApp4.png';
import SPIFFY_APP_5 from '@/assets/images/projects/spiffyApp/SpiffyApp5.png';
// Dash

import DASH_1 from '@/assets/images/projects/dash/dash1.png';
import DASH_2 from '@/assets/images/projects/dash/dash2.png';
import DASH_3 from '@/assets/images/projects/dash/dash3.png';
// Web App
import WEB_APP_1 from '@/assets/images/projects/webapp/one.png';
import WEB_APP_2 from '@/assets/images/projects/webapp/two.png';
import WEB_APP_3 from '@/assets/images/projects/webapp/three.png';
import WEB_APP_4 from '@/assets/images/projects/webapp/four.png';
// Cert Site
import CERT_1 from '@/assets/images/projects/cert/one.png';
import CERT_2 from '@/assets/images/projects/cert/two.png';
import CERT_3 from '@/assets/images/projects/cert/three.png';
import CERT_4 from '@/assets/images/projects/cert/four.png';
// Data Science
import DS_ONE from '@/assets/images/projects/dataScience/one.png';
import DS_TWO from '@/assets/images/projects/dataScience/two.png';
import DS_FOUR from '@/assets/images/projects/dataScience/four.png';
import DS_FIVE from '@/assets/images/projects/dataScience/five.png';
// Other
import OTHER_ONE from '@/assets/images/projects/other/one.png';
import OTHER_TWO from '@/assets/images/projects/other/two.png';
import OTHER_THREE from '@/assets/images/projects/other/three.png';
import OTHER_FOUR from '@/assets/images/projects/other/four.png';

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
  FlaskConical,
  Calculator,
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
      {
        Icon: Box,
        name: 'Axios, MobX, Async-Storage, Firebase, Flashlist, Notifications, Jest',
      },
      { Icon: Paintbrush2, name: 'CSS, StyleSheets' },
      { Icon: Github, name: 'Git, Github' },
      { Icon: Server, name: 'Apple Appstore, Google Playstore' },
    ],
    isMobile: true,
    githubUrl: null,
    visitUrl: 'https://apps.apple.com/ca/app/spiffy/id1138634357',
  },
  {
    name: 'Spiffy Dashboard',
    description:
      "Spiffy's administration dashboard. Used by company admins to create modules, manage teams, view reports, and add content. Written in React using material ui, styled-components, SWR, zustand, chart-js-2.",
    image: DASH_1,
    secondaryImages: [DASH_2, DASH_3],
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
      "Web application of Spiffy's mobile app. Includes all functionality for users to complete modules & stay up to date with their training. Linked to mobile app via Universal Links.",
    image: WEB_APP_4,
    secondaryImages: [WEB_APP_2, WEB_APP_3, WEB_APP_1],
    filterTags: [
      { Icon: Monitor, name: 'Web Development' },
      { Icon: Atom, name: 'React, Javascript' },
      { Icon: Box, name: 'React Query, Zustand, Axios' },
      { Icon: Paintbrush2, name: 'Material-UI, Styled-Components' },
      { Icon: Github, name: 'Git, Github' },
      { Icon: Server, name: 'Netlifty' },
    ],
    isMobile: false,
    githubUrl: null,
    visitUrl: 'https://learn.withspiffy.com',
  },
  {
    name: 'Oliver Certifications Ecommerce Site',
    description:
      'Ecommerce site created to allow for the purchase of certificiations for Oliver Solutions. Complete stripe payment integration. Written in React with Tailwind, Shadcn & Zustand.',
    image: CERT_1,
    secondaryImages: [CERT_2, CERT_3, CERT_4],
    filterTags: [
      { Icon: Monitor, name: 'Web Development' },
      { Icon: Atom, name: 'React, Typescript' },
      { Icon: Box, name: 'Axios, Zustand, Context, Formik' },
      { Icon: Paintbrush2, name: 'Material-UI, Styled-Components' },
      { Icon: Github, name: 'Git, Github' },
      { Icon: Server, name: 'Netlifty' },
    ],
    isMobile: false,
    githubUrl: null,
    visitUrl: 'https://certifications.withspiffy.com/',
  },
  {
    name: 'Data Science Projects',
    description:
      'Machine learning, data visualization & statstics projects i have worked on. Some of these projects were submitted to Kaggle in competitions. Written in R and complied with R Markdown.',
    image: DS_ONE,
    secondaryImages: [DS_TWO, DS_FOUR, DS_FIVE],
    filterTags: [
      { Icon: FlaskConical, name: 'Data Science' },
      { Icon: Calculator, name: 'R, R-Studio' },
      { Icon: Box, name: 'Data Cleaning, Maching Learning, Statistics, Data Visualization' },
      { Icon: Server, name: 'R Markdown, Kaggle' },
    ],
    isMobile: false,
    githubUrl: null,
    visitUrl: 'https://www.kaggle.com/madison88/code',
  },

  {
    name: 'Other Website Projects',
    description:
      'A bunch of website layout projects i have completed. Practicing advanced CSS, responsiveness and pixel perfect layouts.',
    image: OTHER_ONE,
    secondaryImages: [OTHER_TWO, OTHER_THREE, OTHER_FOUR],
    filterTags: null,
    isMobile: false,
    githubUrl: '',
    visitUrl: 'https://frontend-mentor-easybank.madisonweber.vercel.app/',
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
              className="bg-gray-100 border border-gray-100 rounded-xl h-10 w-10 shadow-md hover:shadow-sm cursor-pointer"
            >
              <ChevronLeft
                className="text-black"
                height={50}
                width={50}
              />
            </Button>
            <div className="min-w-20 p-1.5 rounded-lg shadow-md flex items-center justify-center bg-gray-100 gap-x-2">
              {PROJECTS.map((p, i) => (
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

{
  /* <CarouselNext className="bg-gray-100 border-none rounded-full h-12 w-12 shadow-md -right-16" /> */
}
