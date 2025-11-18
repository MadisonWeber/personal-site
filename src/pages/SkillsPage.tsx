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
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const CATEGORIES = {
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
  OTHER: 'Other',
  ALL: 'All',
};

const SKILLS = [
  {
    name: 'React',
    level: 8,
    exposure: 8,
    confidence: 8,
    experience: 8,
    description:
      'Primary web framework i like to work with. I have 6 years experience building web applications with React. That includes building 4 enterprise applications and countless personal projects.',
    img: REACT_IMG,
    category: CATEGORIES.PRIMARY,
    quote: 'I can write react code in my sleep.',
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
    category: CATEGORIES.PRIMARY,
  },
  {
    name: 'Javascript',
    level: 8,
    exposure: 7,
    confidence: 7,
    experience: 7,
    description:
      'Excellent grasp of modern Javascript. Javascript has been my primary programming language for the last few years.',
    img: JAVASCRIPT_IMG,
    category: CATEGORIES.PRIMARY,
  },
  {
    name: 'CSS',
    exposure: 7,
    confidence: 7,
    experience: 8,
    level: 8,
    description:
      'Advanced styling with modern CSS, animations, and responsive design are a passion of mine. I like to keep up with the newest tech and im always learning.',
    category: CATEGORIES.SECONDARY,
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
      'Familiar with Semantic HTML5 markup use for accessible and SEO-friendly websites.',
    category: CATEGORIES.SECONDARY,
  },
  {
    name: 'Typescript',
    level: 6,
    exposure: 6,
    confidence: 6,
    experience: 4,
    description:
      'Strong typing and type-safe development for scalable applications. My secondary programming language.',
    img: TYPESCRIPT_IMG,
    category: CATEGORIES.PRIMARY,
  },
  {
    name: 'Git',
    level: 6,
    exposure: 6,
    confidence: 5,
    experience: 8,
    description:
      'Good understanding of git for version control in a team environment. Very familiar with Git workflows and best practices',
    category: CATEGORIES.SECONDARY,
    img: GIT,
  },
  {
    name: 'Next JS',
    level: 5,
    exposure: 3,
    confidence: 5,
    experience: 0,
    description:
      'Excellent working knowdlege of the NextJs framework and ecosystem. Have built multiple pet projects with NextJS.',
    img: NEXT_IMG,
    category: CATEGORIES.PRIMARY,
  },

  {
    name: 'React Query',
    level: 7,
    exposure: 5,
    confidence: 5,
    experience: 8,
    description: 'React hooks library for data fetching, caching & management.',
    img: REACT_QUERY_IMG,
  },
  {
    name: 'SWR',
    level: 7,
    exposure: 6,
    confidence: 7,
    experience: 8,
    description: 'React hooks library for data fetching, caching & management.',
    img: SWR,
  },
  {
    name: 'Figma',
    level: 4,
    exposure: 2,
    confidence: 3,
    experience: 3,
    description:
      'Solid understanding of basic figma functionality. I have the ability to create product wireframes & transform them to code.',
    category: CATEGORIES.SECONDARY,
    img: FIGMA,
  },
  {
    name: 'Styled Components',
    level: 8,
    exposure: 4,
    confidence: 5,
    experience: 7,
    description:
      'Popular CSS-in-JS styling solution commonly used in React. I used this in most of my production projects and am very confortable with it.',
    category: CATEGORIES.SECONDARY,
    img: STYLED,
  },
  {
    name: 'Tailwind',
    level: 7,
    exposure: 5,
    confidence: 6,
    experience: 4,
    description:
      'Popular utility-first CSS framework for stying and UI development. I have used this in production and like it for quick and easy styling.',
    category: CATEGORIES.SECONDARY,
    img: TAILWIND,
  },
  {
    name: 'Zustand',
    level: 7,
    exposure: 4,
    confidence: 4,
    experience: 6,
    description:
      'Preferred state managaement library, lightweight, flexible and fast. Easy to understand and simple to make changes. I have use this in multiple production projects.',
    category: CATEGORIES.SECONDARY,
    img: ZUSTAND,
  },
  {
    name: 'MobX',
    level: 5,
    exposure: 4,
    confidence: 4,
    experience: 4,
    description: 'Reactive state management through observable data and automatic updates',
    category: CATEGORIES.SECONDARY,
    img: MOBX,
  },
  {
    name: 'Stripe',
    level: 5,
    exposure: 3,
    confidence: 4,
    experience: 3,
    description: 'Payment processing integration for secure online transactions',
    category: CATEGORIES.SECONDARY,
    img: STRIPE,
  },
  {
    name: 'Expo',
    level: 5,
    exposure: 3,
    confidence: 4,
    experience: 3,
    description: 'Development platform for building and deploying React Native apps',
    category: CATEGORIES.SECONDARY,
    img: EXPO,
  },
  {
    name: 'Axios',
    level: 8,
    exposure: 6,
    confidence: 6,
    experience: 8,
    description: 'Popular HTTP client for API requests',
    category: CATEGORIES.SECONDARY,
    img: AXIOS,
  },
  {
    name: 'Netlify',
    level: 7,
    exposure: 3,
    confidence: 4,
    experience: 7,
    description: 'Web hosting platform for deployment and CI/CD',
    category: CATEGORIES.SECONDARY,
    img: NETLIFY,
  },
  {
    name: 'Xcode',
    level: 4,
    exposure: 3,
    confidence: 4,
    experience: 4,
    description: 'IOS development IDE, simulators, tooling, debugging, app development',
    category: CATEGORIES.SECONDARY,
    img: XCODE_IMG,
  },
  {
    name: 'Sentry',
    level: 4,
    exposure: 3,
    confidence: 4,
    experience: 6,
    description: 'Error tracking and performance monitoring for production applications',
    category: CATEGORIES.SECONDARY,
    img: SENTRY,
  },

  {
    name: 'Amplitude',
    level: 5,
    exposure: 3,
    confidence: 4,
    experience: 4,

    description: 'Analytics platform for tracking and understanding user behaviour',
    category: CATEGORIES.SECONDARY,
    img: AMPLITUDE,
  },
  {
    name: 'Jira',
    level: 4,
    exposure: 3,
    confidence: 4,
    experience: 3,

    description: 'Project management and issue tracking in agile workflows',
    category: CATEGORIES.SECONDARY,
    img: JIRA,
  },
  {
    name: 'VS Code',
    level: 8,
    exposure: 6,
    confidence: 6,
    experience: 6,
    description: 'Primary code editing tool',
    category: CATEGORIES.SECONDARY,
    img: VS_CODE,
  },
  {
    name: 'Android Studio',
    level: 4,
    exposure: 3,
    confidence: 4,
    experience: 4,
    description: 'IDE for Android development used with React Native ',
    category: CATEGORIES.SECONDARY,
    img: ANDROID_STUDIO,
  },
];

const SkillUI = ({ level }: { level: number }) => {
  const skillLevels = Array.from({ length: 8 }, (_, i) => i + 1);

  const skillColorMap: { [key: number]: string } = {
    1: 'bg-blue-100',
    2: 'bg-blue-200',
    3: 'bg-blue-300',
    4: 'bg-blue-400',
    5: 'bg-blue-500',
    6: 'bg-blue-600',
    7: 'bg-blue-700',
    8: 'bg-blue-800',
  };

  return (
    <div className="flex flex-row gap-x-2 items-center justify-start">
      {skillLevels.map((skillLevel, i) => (
        <div
          key={skillLevel}
          className={`h-1 w-6 border-0 rounded-sm ${
            skillLevel > level ? 'bg-gray-50' : skillColorMap[skillLevel]
          } shadow-sm animate-in fade-in slide-in-from-left-2 fill-mode-both`}
          style={{
            animationDelay: `${i * 100}ms`,
            animationDuration: '200ms',
          }}
        />
      ))}
    </div>
  );
};

const LevelBar = ({ level, title }: { level: number; title: string }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center justify-between">
        <span className="text-xs text-gray-400">{title}</span>
      </div>
      <div className="min-h-2" />
      <SkillUI level={level} />
    </div>
  );
};

const ItemStyle =
  'w-26 h-26 hover:shadow-none shadow-lg hover:bg-gray-50 cursor-pointer bg-white transition-all duration-300 rounded-xl p-2 border border-gray-100 flex flex-col items-center justify-center';

const ImageStyle =
  'object-contain p-2 h-auto w-8/9 aspect-1/1 p-0 border-gray-100 rounded-full border-1 bg-white';

const SkillsPage = () => {
  return (
    <div className="bg-gray-200 page-wrapper flex flex-col items-center justify-center p-10">
      <div className="bg-white rounded-md shadow-xl p-8 min-h-220 w-200 flex flex-col items-start justify-start">
        <div className="flex flex-row gap-x-3 border-0 items-center justify-between w-full">
          <h4 className="text-2xl font-semibold font-josefin text-black mt-1.5">Stack</h4>
        </div>
        <div className="min-h-4" />
        <div className="w-full mt-2 flex-1 h-full gap-2 flex flex-row flex-wrap items-start justify-center">
          {SKILLS.map(skill => (
            <HoverCard
              openDelay={150}
              key={skill?.name}
              closeDelay={0}
            >
              <HoverCardTrigger asChild>
                <div
                  key={skill.name}
                  className="bg-gray-100 p-2 rounded-xl shadow-md"
                >
                  <div
                    key={skill.name}
                    className={ItemStyle}
                  >
                    <img
                      src={skill.img}
                      className={ImageStyle}
                    />
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent
                asChild
                sideOffset={10}
              >
                <div className="min-h-28 w-100 rounded-xl bg-white flex flex-row item-start border border-gray-100 justify-start gap-x-2 shadow-xl">
                  <img
                    className="border border-gray-100 object-contain w-10 h-10 rounded-full"
                    src={skill.img}
                  />
                  <div className="flex flex-col items-start justify-start p-1 pr-2">
                    <span className="font-semibold text-lg">{skill?.name}</span>
                    <span className="text-sm text-gray-500 mt-1.5">{skill.description}</span>
                    <div className="h-3" />
                    {/* <SkillUI level={skill.level} /> */}
                    <div className="flex w-full flex-col gap-y-3">
                      <LevelBar
                        title="Exposure Level"
                        level={skill.exposure}
                      />
                      <LevelBar
                        title="Confidence Level"
                        level={skill.confidence}
                      />
                      <LevelBar
                        title="Professional Experience"
                        level={skill.experience}
                      />

                      <div className="h-3" />
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
