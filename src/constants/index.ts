import REACT_IMG from '@/assets/images/stack/react.png';
import REACT_NATIVE_IMG from '@/assets/images/stack/native-2.png';
import NEXT_IMG from '@/assets/images/stack/next.png';
import JAVASCRIPT_IMG from '@/assets/images/stack/js-2.png';
import TYPESCRIPT_IMG from '@/assets/images/stack/ts.png';
import REACT_QUERY_IMG from '@/assets/images/stack/react-query.webp';
import XCODE_IMG from '@/assets/images/stack/xcode-2.webp';
import HTML from '@/assets/images/stack/html.png';
import CSS from '@/assets/images/stack/css.jpg';
import GIT from '@/assets/images/stack/git.png';
import TAILWIND from '@/assets/images/stack/tailwind.png';
import FIGMA from '@/assets/images/stack/figma.png';
import STYLED from '@/assets/images/stack/s-c.png';
import ZUSTAND from '@/assets/images/stack/zustand.png';
import STRIPE from '@/assets/images/stack/stripe-2.webp';
import EXPO from '@/assets/images/stack/expo.png';
import NETLIFY from '@/assets/images/stack/netlify.png';
import SENTRY from '@/assets/images/stack/sentry.svg';
import SWR from '@/assets/images/stack/SWR.png';
import VS_CODE from '@/assets/images/stack/vs-3.png';
import ANDROID_STUDIO from '@/assets/images/stack/android-studio.png';
import JIRA from '@/assets/images/stack/jira.webp';
import AXIOS from '@/assets/images/stack/axios.png';
import AMPLITUDE from '@/assets/images/stack/amplitude.webp';
import MOBX from '@/assets/images/stack/mobx.png';
import REDUX from '@/assets/images/stack/redux-4.png';
import MUI from '@/assets/images/stack/MUI.png';
import VERCEL from '@/assets/images/stack/vercel-2.png';
/// Stack

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

import {
  Atom,
  Smartphone,
  Box,
  Server,
  Monitor,
  Paintbrush2,
  Github,
  FlaskConical,
  Calculator,
} from 'lucide-react';

export const CATEGORIES = {
  LANGUAGE: 'Languages',
  FRAMEWORK: 'Frameworks',
  STATE_MANAGEMENT: 'State Management',
  STYLING: 'Styling',
  TOOLING: 'Tooling',
  PLATFORMS: "Platforms & Ide's",
  MONITORING: 'Monitoring',
};

export const STACK_LIST = [
  {
    name: 'React',
    level: 8,
    exposure: 8,
    confidence: 8,
    experience: 8,
    description:
      'Primary web framework i like to work with. I have 6 years experience building web applications with React. That includes building 4 enterprise applications and countless personal projects.',
    img: REACT_IMG,
    category: CATEGORIES.FRAMEWORK,
  },
  {
    name: 'React Native',
    level: 8,
    exposure: 7,
    confidence: 7,
    experience: 7,
    description:
      'Four years experience building production react native applications. Built and deployed multiple React Native apps, with 2 currently available in AppStore. Build and deployed common mobile features like push notifications(firebase), universal linking, permissions, haptic feedback and more.',
    img: REACT_NATIVE_IMG,
    category: CATEGORIES.FRAMEWORK,
  },
  {
    name: 'Javascript',
    level: 8,
    exposure: 7,
    confidence: 7,
    experience: 7,
    description:
      'Expert-level proficiency in modern JavaScript (ES6+). Primary programming language with deep understanding of async/await, promises, closures, and functional programming patterns.',
    img: JAVASCRIPT_IMG,
    category: CATEGORIES.LANGUAGE,
  },
  {
    name: 'CSS',
    exposure: 7,
    confidence: 7,
    experience: 8,
    level: 8,
    description:
      'Advanced CSS skills including Flexbox, Grid, animations, transitions, and responsive design. Strong focus on modern CSS features, performance optimization, and cross-browser compatibility.',
    category: CATEGORIES.LANGUAGE,
    img: CSS,
  },
  {
    name: 'HTML',
    level: 8,
    exposure: 6,
    confidence: 7,
    experience: 8,
    img: HTML,
    description:
      'Semantic HTML5 markup specialist with focus on accessibility (WCAG), SEO best practices, and proper document structure for improved user experience and search rankings.',
    category: CATEGORIES.LANGUAGE,
  },
  {
    name: 'Typescript',
    level: 6,
    exposure: 6,
    confidence: 6,
    experience: 4,
    description:
      'Strong typing expertise for building type-safe, scalable applications. Proficient in interfaces, generics, utility types, and leveraging TypeScript for improved code quality and developer experience.',
    img: TYPESCRIPT_IMG,
    category: CATEGORIES.LANGUAGE,
  },
  {
    name: 'Git',
    level: 6,
    exposure: 6,
    confidence: 5,
    experience: 8,
    description:
      'Version control expert with extensive experience in team collaboration. Proficient in branching strategies, pull requests, merge conflict resolution, and Git workflows.',
    category: CATEGORIES.TOOLING,
    img: GIT,
  },
  {
    name: 'Next JS',
    level: 5,
    exposure: 3,
    confidence: 5,
    experience: 0,
    description:
      'Working knowledge of Next.js 14 including App Router, server components, API routes, and static/dynamic rendering. Built multiple projects leveraging SSR, SSG, and ISR capabilities.',
    img: NEXT_IMG,
    category: CATEGORIES.FRAMEWORK,
  },

  {
    name: 'React Query',
    level: 7,
    exposure: 5,
    confidence: 5,
    experience: 8,
    description:
      'Advanced data fetching and caching solution for server state management. Experience with queries, mutations, optimistic updates, infinite scrolling, and background refetching patterns.',
    img: REACT_QUERY_IMG,
    category: CATEGORIES.STATE_MANAGEMENT,
  },
  {
    name: 'SWR',
    level: 7,
    exposure: 6,
    confidence: 7,
    experience: 8,
    description:
      'Lightweight React hooks library for remote data fetching. Implemented stale-while-revalidate patterns, real-time updates, and optimized caching strategies in production applications.',
    img: SWR,
    category: CATEGORIES.STATE_MANAGEMENT,
  },
  {
    name: 'Figma',
    level: 4,
    exposure: 2,
    confidence: 3,
    experience: 3,
    description:
      'Collaborative design tool for creating wireframes and mockups. Experience working with design systems, components, and developer handoff workflows.',
    img: FIGMA,
    category: CATEGORIES.TOOLING,
  },
  {
    name: 'Styled Components',
    level: 8,
    exposure: 4,
    confidence: 5,
    experience: 7,
    description:
      'CSS-in-JS expertise with extensive production usage. Skilled in creating dynamic, theme-able component styles, global styles, and leveraging TypeScript for type-safe styling.',
    img: STYLED,
    category: CATEGORIES.STYLING,
  },
  {
    name: 'Material UI',
    level: 8,
    exposure: 4,
    confidence: 5,
    experience: 7,
    description:
      'Comprehensive React component library experience for enterprise applications. Proficient in customizing themes, creating custom components, and implementing Material Design principles.',
    img: MUI,
    category: CATEGORIES.STYLING,
  },
  {
    name: 'Tailwind',
    level: 7,
    exposure: 5,
    confidence: 6,
    experience: 4,
    description:
      'Utility-first CSS framework for rapid UI development. Experience with custom configurations, responsive design patterns, and production optimization for minimal bundle sizes.',
    category: CATEGORIES.STYLING,
    img: TAILWIND,
  },
  {
    name: 'Zustand',
    level: 7,
    exposure: 4,
    confidence: 4,
    experience: 6,
    description:
      'Lightweight state management solution with minimal boilerplate. Implemented in multiple production applications for efficient, scalable state handling with excellent TypeScript support.',
    category: CATEGORIES.STATE_MANAGEMENT,
    img: ZUSTAND,
  },
  {
    name: 'Redux',
    level: 7,
    exposure: 4,
    confidence: 4,
    experience: 6,
    description:
      'Predictable state container for complex application state. Experience with Redux Toolkit, middleware (thunk, saga), normalized state patterns, and debugging with Redux DevTools.',
    category: CATEGORIES.STATE_MANAGEMENT,
    img: REDUX,
  },
  {
    name: 'MobX',
    level: 5,
    exposure: 4,
    confidence: 4,
    experience: 4,
    description:
      'Reactive state management using observable patterns. Built production applications leveraging MobX for automatic UI updates and efficient re-rendering through transparent reactivity.',
    category: CATEGORIES.STATE_MANAGEMENT,
    img: MOBX,
  },
  {
    name: 'Stripe',
    level: 5,
    exposure: 3,
    confidence: 4,
    experience: 3,
    description: 'Payment processing integration for secure online transactions',
    category: CATEGORIES.TOOLING,
    img: STRIPE,
  },
  {
    name: 'Expo',
    level: 5,
    exposure: 3,
    confidence: 4,
    experience: 3,
    description:
      'React Native development platform for streamlined mobile app development. Experience with Expo CLI, EAS Build, OTA updates, and native module integration for iOS and Android.',
    category: CATEGORIES.FRAMEWORK,
    img: EXPO,
  },
  {
    name: 'Axios',
    level: 8,
    exposure: 6,
    confidence: 6,
    experience: 8,
    description:
      'Promise-based HTTP client for API communication. Extensive experience with interceptors, error handling, request/response transformation, and authentication patterns in production environments.',
    category: CATEGORIES.TOOLING,
    img: AXIOS,
  },
  {
    name: 'Netlify',
    level: 7,
    exposure: 3,
    confidence: 4,
    experience: 7,
    description:
      'Modern web hosting and deployment platform with continuous deployment from Git. Experience with serverless functions, environment variables, custom domains, and automated build pipelines.',
    category: CATEGORIES.PLATFORMS,
    img: NETLIFY,
  },
  {
    name: 'Xcode',
    level: 4,
    exposure: 3,
    confidence: 4,
    experience: 4,
    description:
      "Apple's integrated development environment for iOS app development. Proficient in iOS simulators, debugging tools, provisioning profiles, and App Store deployment processes.",
    category: CATEGORIES.PLATFORMS,
    img: XCODE_IMG,
  },
  {
    name: 'Sentry',
    level: 4,
    exposure: 3,
    confidence: 4,
    experience: 6,
    description:
      'Error tracking and performance monitoring platform for production applications. Implemented real-time error reporting, breadcrumbs, release tracking, and performance metrics across web and mobile apps.',
    category: CATEGORIES.MONITORING,
    img: SENTRY,
  },

  {
    name: 'Amplitude',
    level: 5,
    exposure: 3,
    confidence: 4,
    experience: 4,

    description:
      'Product analytics platform for tracking user behavior and engagement metrics. Experience implementing event tracking, user funnels, retention analysis, and data-driven decision making.',
    category: CATEGORIES.MONITORING,
    img: AMPLITUDE,
  },
  {
    name: 'Jira',
    level: 4,
    exposure: 3,
    confidence: 4,
    experience: 3,
    description:
      'Project management and issue tracking tool for agile development teams. Proficient in sprint planning, story estimation, workflow customization, and cross-functional team collaboration.',
    category: CATEGORIES.TOOLING,
    img: JIRA,
  },
  {
    name: 'VS Code',
    level: 8,
    exposure: 6,
    confidence: 6,
    experience: 6,
    description:
      'Primary code editor with extensive customization. Expert in extensions, keyboard shortcuts, debugging workflows, Git integration, and workspace optimization for maximum productivity.',
    category: CATEGORIES.PLATFORMS,
    img: VS_CODE,
  },
  {
    name: 'Android Studio',
    level: 4,
    exposure: 3,
    confidence: 4,
    experience: 4,
    description:
      "Google's IDE for Android development and React Native debugging. Experience with Android emulators, Logcat debugging, Gradle builds, and Google Play Store deployment.",
    category: CATEGORIES.PLATFORMS,
    img: ANDROID_STUDIO,
  },
  {
    name: 'Vercel',
    level: 4,
    exposure: 3,
    confidence: 4,
    experience: 4,
    description:
      'Frontend cloud platform optimized for Next.js and modern web frameworks. Experience with zero-configuration deployments, serverless functions, edge computing, preview deployments, and custom domain management.',
    category: CATEGORIES.PLATFORMS,
    img: VERCEL,
  },
];

export const PROJECT_LIST = [
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

    visitUrl: 'https://www.kaggle.com/madison88/code',
  },

  {
    name: 'Other Website Projects',
    description:
      'A bunch of website layout projects i have completed. Practicing advanced CSS, responsiveness and pixel perfect layouts.',
    secondaryImages: [OTHER_TWO, OTHER_THREE, OTHER_FOUR],
    filterTags: [{ Icon: FlaskConical, name: 'test' }],
    image: OTHER_ONE,
    visitUrl: 'https://frontend-mentor-easybank.madisonweber.vercel.app/',
    isMobile: false,
  },
];
