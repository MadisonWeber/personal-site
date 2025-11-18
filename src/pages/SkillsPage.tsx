import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import type { LucideIcon } from 'lucide-react';
import { ShieldUser, Sun, Brain } from 'lucide-react';
import { SKILLS } from '@/constants';

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
          // todo -> come back and fix this
        />
      ))}
    </div>
  );
};

const LevelBar = ({ level, title, Icon }: { level: number; title: string; Icon: LucideIcon }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center justify-start gap-x-1">
        <Icon
          className="text-gray-400"
          height={12}
          width={12}
        />
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
                    <div className="flex w-full flex-col gap-y-3">
                      <LevelBar
                        title="Exposure Level"
                        level={skill.exposure}
                        Icon={Sun}
                      />
                      <LevelBar
                        title="Confidence Level"
                        level={skill.confidence}
                        Icon={Brain}
                      />
                      <LevelBar
                        title="Professional Experience"
                        level={skill.experience}
                        Icon={ShieldUser}
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
