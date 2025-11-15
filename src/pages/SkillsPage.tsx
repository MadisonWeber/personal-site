import { useCallback, useMemo, useState } from 'react';
import { Code } from 'lucide-react';
import React from 'react';
import ProjectCard from './Projects/ProjectCard';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CATEGORIES = {
  PRIMARY: 'Primary',
  SECONDARY: 'Secondary',
  OTHER: 'Other',
  ALL: 'All',
};

const SKILLS = [
  {
    name: 'React',
    icon: null,
    level: 9,
    secondarySkills: [
      'Javascript',
      'Typescript',
      'Zustand',
      'React Query',
      'SWR',
      'Context',
      'REST',
      'Vite',
    ],
    category: CATEGORIES.PRIMARY,
  },
  {
    name: 'React Native',
    icon: null,
    level: 8,
    secondarySkills: [
      'Expo',
      'Notifications',
      'Permissions',
      'Deep Linking',
      'Xcode',
      'Android Studio',
      'Gradle',
      'Metro',
    ],
    category: CATEGORIES.PRIMARY,
  },
  {
    name: 'Next JS',
    icon: null,
    level: 8,
    secondarySkills: ['I am good at next js'],
    category: CATEGORIES.PRIMARY,
  },
  {
    name: 'UI',
    icon: null,
    level: 8,
    secondarySkills: ['CSS', 'SASS', 'Material UI', 'ShadCN', 'Styled Components', 'Tailwind'],
    category: CATEGORIES.SECONDARY,
  },
  {
    name: 'Dev Ops',
    icon: null,
    level: 5,
    secondarySkills: ['Git', 'GitHub', 'Netlify', 'Appstore Connect', 'Google Playstore'],
    category: CATEGORIES.SECONDARY,
  },
  {
    name: 'Data Science',
    icon: null,
    level: 4,
    secondarySkills: ['R', 'R-Studio', 'Tidyverse', 'Machine Learning', 'Data visualization'],
    category: CATEGORIES.OTHER,
  },
  {
    name: 'Prototyping',
    icon: null,
    level: 4,
    secondarySkills: ['Figma'],
    category: CATEGORIES.SECONDARY,
  },
];

const SkillUI = ({ level }: { level: number }) => {
  const skillLevels = Array.from({ length: level }, (_, i) => i + 1);

  const skillColorMap: { [key: number]: string } = {
    1: 'bg-blue-100',
    2: 'bg-blue-200',
    3: 'bg-blue-300',
    4: 'bg-blue-400',
    5: 'bg-blue-500',
    6: 'bg-blue-600',
    7: 'bg-blue-700',
    8: 'bg-blue-800',
    9: 'bg-blue-900',
    10: 'bg-blue-950',
  };

  return (
    <div className="flex flex-row gap-x-2 items-center justify-start mt-2">
      {skillLevels.map(level => (
        <div className={`h-3 w-8 border-0 rounded-sm ${skillColorMap[level]} shadow-sm`} />
      ))}
    </div>
  );
};

const SkillsPage = () => {
  const [selected, setSelected] = useState(CATEGORIES.ALL);

  console.log('selected is', selected);

  const filteredItems = useMemo(() => {
    if (selected === CATEGORIES.ALL) return SKILLS;

    return SKILLS.filter(skill => skill.category === selected);
  }, [selected]);

  console.log(filteredItems);

  return (
    <div className="bg-gray-200 page-wrapper flex flex-col items-center justify-center p-10">
      <div className="bg-white rounded-md shadow-xl p-8 min-h-220 min-w-180 flex flex-col items-start justify-start">
        <div className="flex flex-row gap-x-3 border-0 items-center justify-between w-full">
          <h4 className="text-2xl font-semibold font-josefin text-black mt-1.5">Tech Stack</h4>
          <Select onValueChange={newValue => setSelected(newValue)}>
            <SelectTrigger className="w-[180px] border-gray-300">
              <SelectValue placeholder="Select.." />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-300">
              <SelectGroup>
                <SelectLabel className="text-gray-500">My Skills</SelectLabel>
                <SelectItem
                  value={CATEGORIES.ALL}
                  className="hover:bg-gray-100"
                >
                  All
                </SelectItem>
                <SelectItem
                  value={CATEGORIES.PRIMARY}
                  className="hover:bg-gray-100"
                >
                  Primary
                </SelectItem>
                <SelectItem
                  value={CATEGORIES.SECONDARY}
                  className="hover:bg-gray-100"
                >
                  Secondary
                </SelectItem>
                <SelectItem
                  value={CATEGORIES.OTHER}
                  className="hover:bg-gray-100"
                >
                  Other
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="min-h-4" />
        <div className="w-full mt-2 flex-1  h-full gap-y-4 flex flex-col items-start justify-start">
          {filteredItems.map(skill => (
            <div
              key={skill.name}
              className="w-full shadow-md rounded-xl p-3 border border-gray-100"
            >
              <p className="font-medium">{skill.name}</p>
              {skill.secondarySkills && (
                <p className="text-sm text-gray-500">{skill.secondarySkills.join(', ')}</p>
              )}
              <SkillUI level={skill.level} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
