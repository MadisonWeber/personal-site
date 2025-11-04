import { Code } from "lucide-react";
import React from "react";

const SKILLS = [
  {
    name: "React",
    icon: null,
    level: 9,
    secondarySkills: [
      "Javascript",
      "Typescript",
      "Zustand",
      "React Query",
      "SWR",
      "Context",
      "REST",
      "Vite",
    ],
  },
  {
    name: "React Native",
    icon: null,
    level: 8,
    secondarySkills: [
      "Expo",
      "Notifications",
      "Permissions",
      "Deep Linking",
      "Xcode",
      "Android Studio",
      "Gradle",
      "Metro",
    ],
  },
  {
    name: "UI",
    icon: null,
    level: 8,
    secondarySkills: [
      "CSS",
      "SASS",
      "Material UI",
      "ShadCN",
      "Styled Components",
      "Tailwind",
    ],
  },
  {
    name: "Dev Ops",
    icon: null,
    level: 5,
    secondarySkills: [
      "Git",
      "GitHub",
      "Netlify",
      "Appstore Connect",
      "Google Playstore",
    ],
  },
  {
    name: "Data Science",
    icon: null,
    level: 4,
    secondarySkills: [
      "R",
      "R-Studio",
      "Tidyverse",
      "Machine Learning",
      "Data visualization,",
    ],
  },
  {
    name: "Prototyping",
    icon: null,
    level: 4,
    secondarySkills: ["Figma"],
  },
];

const SkillUI = ({ level }) => {
  const skillLevels = Array.from({ length: level }, (_, i) => i + 1);

  const skillColorMap = {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
    10: 950,
  };

  return (
    <div className="flex flex-row gap-x-2 items-center justify-start mt-2">
      {skillLevels.map((level) => (
        <div
          className={`h-3 w-8 border-0 rounded-sm bg-blue-${skillColorMap[level]} shadow-sm`}
          // className={`h-3 w-8 border-0 rounded-sm bg-blue-900 shadow-sm`}
        />
      ))}
    </div>
  );
};

const SkillsPage = () => {
  return (
    <div className="bg-gray-200 page-wrapper flex flex-col items-center justify-center p -10">
      <div className="bg-white rounded-md shadow-xl p-8 min-h-140 min-w-180 flex flex-col items-start justify-start">
        <div className="flex flex-row gap-x-3 border-0 items-center ">
          <h3 className="text-2xl font-semibold font-josefin text-black mt-[6px]">
            Skills
          </h3>
          {/* <div className="bg-gray-100 p-1.5 rounded-md">
            <Code height={18} width={18} className="text-secondary-500" />
          </div> */}
        </div>
        <div className="w-full mt-2 flex-1 border-0 h-full gap-y-4 flex flex-col items-start justify-start">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="w-full p-2 shadow-md rounded-xl p-3 border-1 border-gray-100"
            >
              <p className="font-medium">{skill.name}</p>
              {skill.secondarySkills && (
                <p className="text-sm text-gray-500">
                  {skill.secondarySkills.join(", ")}
                </p>
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
